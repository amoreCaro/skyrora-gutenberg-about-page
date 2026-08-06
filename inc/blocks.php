<?php

if (!defined('ABSPATH')) exit;

/**
 * Build a block icon SVG (Lucide-style stroke icons for WP block inserter).
 */
function skyrora_icon_stroke_attrs() {
    return 'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';
}

function skyrora_block_icon($paths) {
    return '<svg class="skyrora-block-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false">' . $paths . '</svg>';
}

function skyrora_icon_paths($items) {
    $s = skyrora_icon_stroke_attrs();
    $svg = '';

    foreach ($items as $item) {
        $tag = $item[0];
        $attrs = $item[1];
        $attr_str = '';

        foreach ($attrs as $key => $value) {
            $attr_str .= ' ' . $key . '="' . $value . '"';
        }

        $svg .= '<' . $tag . $attr_str . ' ' . $s . '/>';
    }

    return $svg;
}

// Register only the Skyrora category (hide default WP categories).
add_filter('block_categories_all', function($categories, $post) {
    return array(
        array(
            'slug'  => 'skyrora',
            'title' => 'Skyrora',
            'icon'  => skyrora_block_icon(skyrora_icon_paths(array(
                array('path', array('d' => 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z')),
                array('path', array('d' => 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z')),
                array('path', array('d' => 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0')),
                array('path', array('d' => 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5')),
            ))),
        ),
    );
}, 10, 2);


function theme_acf_blocks() {

    if (!function_exists('acf_register_block_type')) {
        return;
    }

    $icons = array(
        'banner' => skyrora_block_icon(skyrora_icon_paths(array(
            array('rect', array('x' => '3', 'y' => '3', 'width' => '18', 'height' => '18', 'rx' => '2')),
            array('circle', array('cx' => '8.5', 'cy' => '8.5', 'r' => '1.5')),
            array('path', array('d' => 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21')),
        ))),
        'products' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z')),
            array('path', array('d' => 'M12 22V12')),
            array('path', array('d' => 'm3.3 7 8.7 5 8.7-5')),
            array('path', array('d' => 'm12 12 9-5')),
        ))),
        'innovation' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5')),
            array('path', array('d' => 'M9 18h6')),
            array('path', array('d' => 'M10 22h4')),
        ))),
        'dedicated' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z')),
        ))),
        'news' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2')),
            array('path', array('d' => 'M18 14h-8')),
            array('path', array('d' => 'M15 18h-5')),
            array('path', array('d' => 'M10 6h8v4h-8V6Z')),
        ))),
        'leaders' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2')),
            array('circle', array('cx' => '9', 'cy' => '7', 'r' => '4')),
            array('path', array('d' => 'M22 21v-2a4 4 0 0 0-3-3.87')),
            array('path', array('d' => 'M16 3.13a4 4 0 0 1 0 7.75')),
        ))),
        'title' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M6 12h12')),
            array('path', array('d' => 'M6 20V4')),
            array('path', array('d' => 'M18 20V4')),
        ))),
        'quote' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z')),
            array('path', array('d' => 'M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z')),
        ))),
        'partners' => skyrora_block_icon(skyrora_icon_paths(array(
            array('circle', array('cx' => '18', 'cy' => '5', 'r' => '3')),
            array('circle', array('cx' => '6', 'cy' => '12', 'r' => '3')),
            array('circle', array('cx' => '18', 'cy' => '19', 'r' => '3')),
            array('path', array('d' => 'm8.59 13.51 6.83 3.98')),
            array('path', array('d' => 'm15.41 6.51-6.82 3.98')),
        ))),
        'news-about' => skyrora_block_icon(skyrora_icon_paths(array(
            array('circle', array('cx' => '12', 'cy' => '12', 'r' => '10')),
            array('path', array('d' => 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20')),
            array('path', array('d' => 'M2 12h20')),
        ))),
        'paragraph' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M13 4v16')),
            array('path', array('d' => 'M17 4v16')),
            array('path', array('d' => 'M19 4H9a4 4 0 0 0 0 8h6')),
        ))),
        'corporate-value' => skyrora_block_icon(skyrora_icon_paths(array(
            array('circle', array('cx' => '12', 'cy' => '8', 'r' => '6')),
            array('path', array('d' => 'm15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526')),
        ))),
        'hero' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'M12 2 2 7l10 5 10-5-10-5Z')),
            array('path', array('d' => 'm2 17 10 5 10-5')),
            array('path', array('d' => 'm2 12 10 5 10-5')),
        ))),
        'video' => skyrora_block_icon(skyrora_icon_paths(array(
            array('path', array('d' => 'm16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5')),
            array('rect', array('x' => '2', 'y' => '6', 'width' => '14', 'height' => '12', 'rx' => '2')),
        ))),
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
