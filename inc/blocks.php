<?php

if (!defined('ABSPATH')) exit;

// Register custom category Skyrora
add_filter('block_categories_all', function($categories, $post) {
    return array_merge(
        array(
            array(
                'slug'  => 'skyrora',
                'title' => 'Skyrora',
                'icon'  => null,
            ),
        ),
        $categories
    );
}, 10, 2);


function theme_acf_blocks() {

    $icon = '<svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99517 8.00002C9.84282 8.00104 9.69195 8.04362 9.55607 8.12966C9.4243 8.21161 6.29412 10.2279 6.29412 14.1942C6.29412 14.8511 6.46817 15.9154 6.67532 17.0128H6.54665C6.49156 17.0127 6.43659 17.018 6.38258 17.0288C6.38258 17.0288 5.54135 17.1938 4.70979 17.7779C3.87823 18.362 3 19.4736 3 21.1103C3.00002 21.3276 3.08679 21.536 3.24123 21.6897C3.39567 21.8434 3.60512 21.9297 3.82353 21.9298H16.1765C16.3949 21.9297 16.6043 21.8434 16.7588 21.6897C16.9132 21.536 17 21.3276 17 21.1103C17 19.4736 16.1218 18.362 15.2902 17.7779C14.4586 17.1938 13.6174 17.0288 13.6174 17.0288C13.5634 17.018 13.5084 17.0127 13.4534 17.0128H13.3199C13.5293 15.9013 13.7059 14.8224 13.7059 14.1606C13.7059 10.1861 10.5677 8.20361 10.4359 8.12166C10.3 8.03971 10.1475 7.99899 9.99517 8.00002ZM10 12.0959C10.6835 12.0959 11.2353 12.6449 11.2353 13.3251C11.2353 14.0053 10.6835 14.5543 10 14.5543C9.31647 14.5543 8.76471 14.0053 8.76471 13.3251C8.76471 12.6449 9.31647 12.0959 10 12.0959ZM6.67371 18.6518H7.00023C7.13293 19.2605 7.26378 19.8441 7.37017 20.2908H4.8449C5.02533 19.769 5.30184 19.3678 5.66039 19.116C6.17228 18.7564 6.64046 18.659 6.67371 18.6518ZM12.9966 18.6518H13.3263C13.3595 18.6591 13.8277 18.7564 14.3396 19.116C14.6982 19.3678 14.9747 19.769 15.1551 20.2908H12.6282C12.7338 19.845 12.8647 19.2591 12.9966 18.6518ZM8.76471 23.5687C8.76471 24.784 10 26 10 26C10 26 11.2353 24.784 11.2353 23.5687H8.76471Z" fill="black"/>
            </svg>';

    /**
     * Register custom Gutenberg blocks using ACF.
     *
     * Checks whether ACF Pro is active and the block registration
     * function exists, then registers custom theme blocks.
     *
     */
    if (function_exists('acf_register_block_type')) {

        acf_register_block_type(array(
            'name'            => 'banner',
            'title'           => 'Block - Banner',
            'category'        => 'skyrora',
            'render_template' => PATH . '/blocks/banner/preview.php',
            'mode'            => 'preview',
            'icon'            => $icon,
            'keywords'        => array('banner'),
            'enqueue_style'   => get_template_directory_uri() . '/blocks/banner/style.css',
        ));

        acf_register_block_type(array(
            'name'            => 'products',
            'title'           => 'Block - Products',
            'category'        => 'skyrora',
            'render_template' => PATH . '/blocks/products/preview.php',
            'mode'            => 'preview',
            'icon'            => $icon,
            'keywords'        => array('products'),
        ));

        acf_register_block_type(array(
            'name'            => 'innovation',
            'title'           => 'Block - Innovation',
            'category'        => 'skyrora',
            'render_template' => PATH . '/blocks/innovation/preview.php',
            'mode'            => 'preview',
            'icon'            => $icon,
            'keywords'        => array('innovation'),
        ));

        acf_register_block_type(array(
            'name'            => 'dedicated',
            'title'           => 'Block - Dedicated',
            'category'        => 'skyrora',
            'render_template' => PATH . '/blocks/dedicated/preview.php',
            'mode'            => 'preview',
            'icon'            => $icon,
            'keywords'        => array('dedicated'),
        ));

        acf_register_block_type(array(
            'name'            => 'news',
            'title'           => 'Block - News',
            'category'        => 'skyrora',
            'render_template' => PATH . '/blocks/news/preview.php',
            'mode'            => 'preview',
            'icon'            => $icon,
            'keywords'        => array('news'),
        ));

        acf_register_block_type(array(
            'name'            => 'leaders',
            'title'           => 'Block - Leaders',
            'category'        => 'skyrora',
            'render_template' => PATH . '/blocks/leaders/preview.php',
            'mode'            => 'preview',
            'icon'            => $icon,
            'keywords'        => array('leaders'),
        ));

        acf_register_block_type(array(
            'name'            => 'title',
            'title'           => 'Block - Title',
            'category'        => 'skyrora',
            'render_template' => PATH . '/blocks/title/preview.php',
            'mode'            => 'preview',
            'icon'            => $icon,
            'keywords'        => array('title', 'heading'),
        ));
    }
}

// Register blocks when ACF is initialized
add_action('acf/init', 'theme_acf_blocks');