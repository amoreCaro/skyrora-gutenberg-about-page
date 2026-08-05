<?php

if (!defined('ABSPATH')) exit;

/**
 * Enqueue theme styles and scripts for the front-end
 */
function theme_scripts_front() {
    // Load main compiled CSS file (all styles)
    wp_enqueue_style( 'all', THEME . '/dist/s/css/all.css' );

    // Load helper CSS file (utility/helper classes)
    wp_enqueue_style( 'helper', THEME . '/dist/s/css/helper.css' );

    // Load main JavaScript file with jQuery as a dependency
    wp_enqueue_script( 'main', THEME . '/dist/s/js/main.js', array('jquery'), '1.0', true );
}

// Set priority to 100 to make sure we dequeue styles successfully
add_action( 'wp_enqueue_scripts', 'theme_scripts_front', 100 );

function theme_gutenberg_scripts() {
    
    wp_enqueue_style( 'blocks', THEME . '/inc/admin/blocks.css', array( 'wp-editor' ) );
    wp_enqueue_style( 'helper', THEME . '/dist/s/css/helper.css',  array( 'wp-editor' ) );
    // Editor/iframe only — quote padding overrides live in admin.css
    if ( is_admin() ) {
        wp_enqueue_style( 'admin_helper', THEME . '/inc/admin/admin.css', array( 'blocks' ), '1.10' );
    }
    wp_enqueue_script('rellax', 'https://cdn.jsdelivr.net/npm/rellax@1.12.1/rellax.min.js', [], null, true);
    wp_enqueue_script('viewport-checker', 'https://cdnjs.cloudflare.com/ajax/libs/jQuery-viewport-checker/1.8.8/jquery.viewportchecker.min.js', ['jquery'], '1.8.8', true);

    wp_enqueue_script(
        'blocks',
        THEME . '/inc/admin/blocks.js',
        ['jquery', 'rellax', 'viewport-checker'],
        '1.1',
        true
    );
}

add_action ( 'enqueue_block_assets', 'theme_gutenberg_scripts' );

function theme_admin_scripts() {
    wp_enqueue_style( 'admin_helper', THEME . '/inc/admin/admin.css', array(), '1.10' );
}

add_action('admin_enqueue_scripts', 'theme_admin_scripts');

function theme_block_editor_assets() {
    wp_enqueue_style( 'admin_helper', THEME . '/inc/admin/admin.css', array( 'wp-edit-blocks' ), '1.10' );
}

add_action( 'enqueue_block_editor_assets', 'theme_block_editor_assets' );
