<?php

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
    );
}