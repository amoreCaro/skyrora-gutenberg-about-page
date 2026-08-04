<?php

if (!defined('ABSPATH')) exit;

/**
 * Build a block icon SVG with shared size, stroke and color.
 */
function skyrora_block_icon($paths) {
    $color = '#3858E9';

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="' . $color . '" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' . $paths . '</svg>';
}

// Register only the Skyrora category (hide default WP categories).
add_filter('block_categories_all', function($categories, $post) {
    return array(
        array(
            'slug'  => 'skyrora',
            'title' => 'Skyrora',
            'icon'  => skyrora_block_icon('<path d="M4.5 16.5c2-1.5 3.5-4 3.5-7V6l4-3 4 3v3.5c0 3 1.5 5.5 3.5 7"/><path d="M9 14h6"/><path d="M10 19c.5 1.5 1.5 2.5 2 2.5s1.5-1 2-2.5"/>'),
        ),
    );
}, 10, 2);


function theme_acf_blocks() {

    if (!function_exists('acf_register_block_type')) {
        return;
    }

    $icons = array(
        'banner' => skyrora_block_icon(
            '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 14l4-3 3 2 4-4 7 5"/>'
        ),
        'products' => skyrora_block_icon(
            '<path d="M6 8h12l-1 11H7L6 8z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/>'
        ),
        'innovation' => skyrora_block_icon(
            '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a5 5 0 0 1 3.5 8.5c-.7.6-1.1 1.4-1.3 2.3H9.8c-.2-.9-.6-1.7-1.3-2.3A5 5 0 0 1 12 3z"/>'
        ),
        'dedicated' => skyrora_block_icon(
            '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'
        ),
        'news' => skyrora_block_icon(
            '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h5"/><path d="M8 12h8"/><path d="M8 16h8"/>'
        ),
        'leaders' => skyrora_block_icon(
            '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 19c.5-3 2.5-4.5 5.5-4.5s5 1.5 5.5 4.5"/><path d="M15 14.5c2.2.2 3.8 1.4 4.5 4.5"/>'
        ),
        'title' => skyrora_block_icon(
            '<path d="M6 7h12"/><path d="M12 7v10"/><path d="M9 17h6"/>'
        ),
        'quote' => skyrora_block_icon(
            '<path d="M8 17H5a2 2 0 0 1-2-2v-3a4 4 0 0 1 4-4h1v5H5v2h3v2z"/><path d="M19 17h-3a2 2 0 0 1-2-2v-3a4 4 0 0 1 4-4h1v5h-3v2h3v2z"/>'
        ),
        'partners' => skyrora_block_icon(
            '<circle cx="6" cy="8" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="12" cy="17" r="2.5"/><path d="M8 9.5l2.5 5M16 9.5l-2.5 5M8.5 8h7"/>'
        ),
        'news-about' => skyrora_block_icon(
            '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>'
        ),
        'paragraph' => skyrora_block_icon(
            '<path d="M13 4v16"/><path d="M17 4v16"/><path d="M13 4H9.5A3.5 3.5 0 0 0 9.5 11H13"/>'
        ),
        'corporate-value' => skyrora_block_icon(
            '<path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z"/>'
        ),
        'hero' => skyrora_block_icon(
            '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 15l5-4 3 2 4-3 6 5"/><circle cx="9" cy="9" r="1.25" fill="#3858E9" stroke="none"/>'
        ),
        'video' => skyrora_block_icon(
            '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="#3858E9" stroke="none"/>'
        ),
    );

    acf_register_block_type(array(
        'name'            => 'banner',
        'title'           => 'Block - Banner',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/banner/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['banner'],
        'keywords'        => array('banner'),
        'enqueue_style'   => get_template_directory_uri() . '/blocks/banner/style.css',
    ));

    acf_register_block_type(array(
        'name'            => 'products',
        'title'           => 'Block - Products',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/products/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['products'],
        'keywords'        => array('products'),
    ));

    acf_register_block_type(array(
        'name'            => 'innovation',
        'title'           => 'Block - Innovation',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/innovation/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['innovation'],
        'keywords'        => array('innovation'),
    ));

    acf_register_block_type(array(
        'name'            => 'dedicated',
        'title'           => 'Block - Dedicated',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/dedicated/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['dedicated'],
        'keywords'        => array('dedicated'),
    ));

    acf_register_block_type(array(
        'name'            => 'news',
        'title'           => 'Block - News',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/news/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['news'],
        'keywords'        => array('news'),
    ));

    acf_register_block_type(array(
        'name'            => 'leaders',
        'title'           => 'Block - Leaders',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/leaders/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['leaders'],
        'keywords'        => array('leaders'),
    ));

    acf_register_block_type(array(
        'name'            => 'title',
        'title'           => 'Block - Title',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/title/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['title'],
        'keywords'        => array('title', 'heading'),
    ));

    acf_register_block_type(array(
        'name'            => 'quote',
        'title'           => 'Block - Quote',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/quote/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['quote'],
        'keywords'        => array('quote', 'blockquote'),
    ));

    acf_register_block_type(array(
        'name'            => 'partners',
        'title'           => 'Block - Partners',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/partners/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['partners'],
        'keywords'        => array('partners', 'logos'),
    ));

    acf_register_block_type(array(
        'name'            => 'news-about',
        'title'           => 'Block - News About',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/news-about/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['news-about'],
        'keywords'        => array('partners', 'logos'),
    ));

    acf_register_block_type(array(
        'name'            => 'paragraph',
        'title'           => 'Block - Paragraph',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/paragraph/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['paragraph'],
        'keywords'        => array('paragraph', 'text'),
    ));

    acf_register_block_type(array(
        'name'            => 'corporate-value',
        'title'           => 'Block - Corporate Value',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/corporate-value/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['corporate-value'],
        'keywords'        => array('corporate', 'value', 'values'),
    ));

    acf_register_block_type(array(
        'name'            => 'hero',
        'title'           => 'Block - Hero',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/hero/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['hero'],
        'keywords'        => array('hero', 'banner', 'landing'),
    ));

    acf_register_block_type(array(
        'name'            => 'video',
        'title'           => 'Block - Video',
        'category'        => 'skyrora',
        'render_template' => PATH . '/blocks/video/preview.php',
        'mode'            => 'preview',
        'icon'            => $icons['video'],
        'keywords'        => array('video', 'media'),
    ));
}

// Register blocks when ACF is initialized
add_action('acf/init', 'theme_acf_blocks');
