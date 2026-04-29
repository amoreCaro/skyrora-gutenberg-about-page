<?php

if (!defined('ABSPATH')) exit;

/**
 * Debug helper function
 * Dumps variable in a readable <pre> format
 */
function dd($data){
	echo '<pre>';
		var_dump($data);
	echo '</pre>';
}

/**
 * Output an image with custom size and class
 * Uses custom function that disables srcset
 */
function skyrora_image($image_id, $widthSize, $heightSize, $class_name = 'lazy') {
    echo skyrora_get_attachment_image_no_srcset($image_id, array($widthSize, $heightSize), false, ['class' => $class_name ] );
}

/**
 * Get WordPress attachment image WITHOUT srcset
 * Useful when you want to disable responsive image loading
 */
function skyrora_get_attachment_image_no_srcset($attachment_id, $size = 'thumbnail', $icon = false, $attr = '') {
    // add a filter to return null for srcset
    add_filter( 'wp_calculate_image_srcset_meta', '__return_null' );
    $attr['loading'] = 'lazy';
    // get the srcset-less img html
    $html = wp_get_attachment_image($attachment_id, $size, $icon, $attr);
    // remove the above filter
    remove_filter( 'wp_calculate_image_srcset_meta', '__return_null' );
    return $html;
}

/**
 * Output image URL (note: wp_get_attachment_image_url does NOT accept width/height array)
 * Returns direct image URL
 */
function skyrora_image_url($image_id, $widthSize, $heightSize, $class_name = 'lazy' ) {
    echo wp_get_attachment_image_url($image_id, array($widthSize, $heightSize), false );
}

/**
 * Generate dynamic link based on ACF radio selection
 * Allows switching between post link and category link
 */
function swipeks_leader_custom_link($select_data, $post_link_data, $category_link_data, $id) {
    
    $radio_button = get_field($select_data,$id);
    if($radio_button == 'post_select'){
        $post_url_data = get_field($post_link_data,$id);
        if($post_url_data){
            echo esc_url(get_permalink($post_url_data));
        }
    }
    if($radio_button == 'category_select'){
        $category_url_data = get_field($category_link_data,$id);
        if($category_url_data){
            echo esc_url(get_term_link($category_url_data));
        }
    }
}

/**
 * Outputs an ACF field value with proper escaping based on context.
 *
 * This helper retrieves a value from ACF using get_field() and safely outputs it
 * depending on the specified context type.
 *
 * Available output types:
 * - 'attr'     → escapes value for HTML attributes (esc_attr)
 * - 'url'      → escapes value for URLs (esc_url)
 * - 'textarea' → escapes value for textarea content (esc_textarea)
 * - 'html'     → default, escapes general HTML output (esc_html)
 *
 * If the field is empty, nothing is output.
 *
 * @param string $field_name Name of the ACF field.
 * @param string $type Output context type ('html', 'attr', 'url', 'textarea').
 *
 * @return void
 */
function skyrora_print_escaped_field($field_name, $type = 'html')
{
	$value = get_field($field_name);

	if (empty($value)) {
		return;
	}

	switch ($type) {
		case 'attr':
			echo esc_attr($value);
			break;

		case 'url':
			echo esc_url($value);
			break;
        case 'textarea':
            echo wp_kses($value, [
                'br' => []
            ]);
            break;
		case 'html':
		default:
			echo esc_html($value);
			break;
	}
}

function theme_allow_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'theme_allow_svg_upload');
