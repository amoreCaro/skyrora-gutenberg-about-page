<?php


// Security: no direct access
if ( ! defined('ABSPATH') ) {
    exit;
}


if ( ! function_exists('theme_setup') ) {
    function theme_setup() {

        // Let WordPress manage the document title
        add_theme_support('title-tag');

        // Enable post thumbnails
        add_theme_support('post-thumbnails');

        // Enable HTML5 markup
        add_theme_support(
            'html5',
            [
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
            ]
        );
    }
}
add_action('after_setup_theme', 'theme_setup');

if ( ! function_exists('theme_add_svg_upload') ) {
    function theme_add_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
    }
    add_filter('upload_mimes', 'theme_add_svg_upload');
}


/* -------------------------------------------------
 * Navigation menus
 * ------------------------------------------------- */

if ( ! function_exists('theme_register_menus') ) {
    function theme_register_menus() {
        register_nav_menus([
            'header_menu' => __('Header Menu', 'theme'),
            'footer_menu' => __('Footer Menu', 'theme'),
        ]);
    }
}
add_action('after_setup_theme', 'theme_register_menus');


/* -------------------------------------------------
 * ACF Options Page
 * ------------------------------------------------- */

add_action('acf/init', 'theme_add_global_settings');

function theme_add_global_settings() {

    if (function_exists('acf_add_options_page')) {

        acf_add_options_page([
            'page_title'  => 'Global Settings',
            'menu_title'  => 'Global Settings',
            'menu_slug'   => 'global-settings',
            'capability'  => 'manage_options',
            'redirect'    => false,
            'position'    => 2,
            'icon_url'    => 'dashicons-admin-generic'
        ]);

    }

}

/* -------------------------------------------------
 * Locations taxonomy
 * ------------------------------------------------- */
if ( ! function_exists('theme_register_locations_taxonomy') ) {
    function theme_register_locations_taxonomy() {
        $labels = [
            'name'              => 'Locations',
            'singular_name'     => 'Location',
            'search_items'      => 'Search Locations',
            'all_items'         => 'All Locations',
            'parent_item'       => 'Parent Location',
            'parent_item_colon' => 'Parent Location:',
            'edit_item'         => 'Edit Location',
            'update_item'       => 'Update Location',
            'add_new_item'      => 'Add New Location',
            'new_item_name'     => 'New Location Name',
            'menu_name'         => 'Locations',
        ];

        $args = [
            'labels'            => $labels,
            'public'            => true,
            'hierarchical'      => true,
            'show_ui'           => true,
            'show_admin_column' => true,
            'show_in_nav_menus' => true,
            'show_in_rest'      => true, 
            'rewrite'           => ['slug' => 'location'    
],
        ];

        register_taxonomy('locations', ['post'], $args);
    }
}
add_action('init', 'theme_register_locations_taxonomy');

add_filter('acf/fields/taxonomy/query/name=bento_category', function($args) {
    $args['hide_empty'] = true;
    $args['orderby'] = 'count';
    $args['order'] = 'DESC';

    return $args;
});


add_action('acf/save_post', 'theme_listing_category_svg_save', 20);


if ( ! function_exists('theme_listing_category_svg_save') ) {
    function theme_listing_category_svg_save($post_id) {

        if ( is_admin() && isset($_GET['taxonomy']) && $_GET['taxonomy'] === 'category' ){
            return;
        }

        $file_field = 'category_icon';

        $file_id = get_field($file_field, $post_id);

        if (!$file_id) {
            return;
        }

        $file_path = get_attached_file($file_id);


        if (!$file_path || !file_exists($file_path)) {
            return;
        }

        if (pathinfo($file_path, PATHINFO_EXTENSION) !== 'svg') {
            return;
        }

        $svg_content = file_get_contents($file_path);

        if (!$svg_content) {
            return;
        }

        $term_id = str_replace('term_', '', $post_id);

        update_term_meta($term_id, 'category_icon_svg', $svg_content);
    }
}


add_filter('acf/fields/taxonomy/query', function($args, $field, $post_id) {

    // Фільтруємо тільки категорії
    if($field['taxonomy'] === 'category' || $field['taxonomy'] === 'post_tag') {
        $args['hide_empty'] = true;
    }

    return $args;
}, 10, 3);


add_action('pre_get_posts', function($query) {
    if (!is_admin() && $query->is_main_query() && is_archive()) {
        $query->set('posts_per_page', 12);
    }
});


/**
 * Extend WordPress search (pre_get_posts)
 * - limit to posts
 * - keep default search (title, content, excerpt)
 * - add taxonomy search (category, tag, locations)
 */
add_action('pre_get_posts', function ($query) {

    // only frontend main search query
    if (is_admin() || !$query->is_main_query() || !$query->is_search()) {
        return;
    }

    $search = trim($query->get('s'));
    if (!$search) {
        return;
    }

    $slug = sanitize_title($search);

    $tax_query = [
        'relation' => 'OR'
    ];

    $has_tax = false;

    // category
    $cat = get_term_by('slug', $slug, 'category');
    if ($cat) {
        $tax_query[] = [
            'taxonomy' => 'category',
            'field'    => 'term_id',
            'terms'    => $cat->term_id,
        ];
        $has_tax = true;
    }

    // tag
    $tag = get_term_by('slug', $slug, 'post_tag');
    if ($tag) {
        $tax_query[] = [
            'taxonomy' => 'post_tag',
            'field'    => 'term_id',
            'terms'    => $tag->term_id,
        ];
        $has_tax = true;
    }

    // custom taxonomy
    $loc = get_term_by('slug', $slug, 'locations');
    if ($loc) {
        $tax_query[] = [
            'taxonomy' => 'locations',
            'field'    => 'term_id',
            'terms'    => $loc->term_id,
        ];
        $has_tax = true;
    }

    // apply tax query
    if ($has_tax) {
        $query->set('tax_query', $tax_query);
    }

    // pagination (OK)
    $query->set('posts_per_page', 12);

    // IMPORTANT: do NOT break default search completely
    if ($has_tax) {
        $query->set('s', ''); // only if taxonomy matched
    }

    $query->set('post_type', 'post');
});

if (!defined('ABSPATH')) exit;

/**
 * Theme setup
 */
function skyrora_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption'
    ]);

    // Gutenberg support
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
}
add_action('after_setup_theme', 'skyrora_theme_setup');

/**
 * Enqueue styles
 */
function skyrora_theme_assets() {
    wp_enqueue_style(
        'skyrora-style',
        get_stylesheet_uri(),
        [],
        filemtime(get_stylesheet_directory() . '/style.css')
    );
}
add_action('wp_enqueue_scripts', 'skyrora_theme_assets');


/**
 * Allow only custom ACF blocks in Gutenberg editor.
 *
 * Removes default WordPress blocks.
 **/
add_filter('allowed_block_types_all', 'theme_allowed_blocks', 20, 2);

function theme_allowed_blocks($allowed_blocks, $editor_context)
{
    return array(
        'acf/banner',
        'acf/products',
        'acf/innovation',
        'acf/dedicated',
        'acf/news',
        'acf/leaders',
        'acf/title',
        'acf/quote',
        'acf/partners',
        'acf/news-about',
        'acf/paragraph',
        'acf/corporate-value',
    );
}
