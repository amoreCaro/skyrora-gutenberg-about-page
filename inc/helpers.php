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

/**
 * Incremental section index for Gutenberg blocks.
 *
 * ACF get_row_index() only works inside flexible/repeater rows.
 * In block templates it always returns 1, so navigation anchors break.
 * This counter mirrors flexible-content row indexes across rendered blocks.
 *
 * @return int
 */
function skyrora_section_index()
{
	if (!isset($GLOBALS['skyrora_section_index'])) {
		$GLOBALS['skyrora_section_index'] = 0;
	}

	$GLOBALS['skyrora_section_index']++;

	return (int) $GLOBALS['skyrora_section_index'];
}

/**
 * Add section--nextIsVideo to the block before Innovation (.section.about),
 * so its media can overlap via margin-top (same pattern as skyrora-theme).
 *
 * Do not apply before Video (.about-block) — that block already reserves
 * space with its own padding-top: 45rem.
 */
function skyrora_mark_previous_block_before_about_media($content)
{
	if (trim($content) === '' || is_admin()) {
		return $content;
	}

	if (!class_exists('DOMDocument')) {
		return $content;
	}

	$previous = libxml_use_internal_errors(true);
	$dom = new DOMDocument();
	$wrapped = '<div id="skyrora-content-root">' . $content . '</div>';
	$loaded = $dom->loadHTML('<?xml encoding="utf-8" ?>' . $wrapped, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
	libxml_clear_errors();
	libxml_use_internal_errors($previous);

	if (!$loaded) {
		return $content;
	}

	$root = $dom->getElementById('skyrora-content-root');
	if (!$root) {
		return $content;
	}

	foreach ($root->childNodes as $child) {
		if (!$child instanceof DOMElement) {
			continue;
		}

		$class = $child->getAttribute('class');
		// Innovation only: ".about" but not ".about-block" / ".about-dedicated-mod".
		if (!preg_match('/(?:^|\s)about(?:\s|$)/', $class)) {
			continue;
		}
		if (preg_match('/(?:^|\s)about-(?:block|dedicated)(?:\s|$)/', $class)) {
			continue;
		}

		$prev = $child->previousSibling;
		while ($prev && !$prev instanceof DOMElement) {
			$prev = $prev->previousSibling;
		}

		if (!$prev instanceof DOMElement) {
			continue;
		}

		$prev_class = $prev->getAttribute('class');
		if (strpos(' ' . $prev_class . ' ', ' section--nextIsVideo ') === false) {
			$prev->setAttribute('class', trim($prev_class . ' section--nextIsVideo'));
		}
	}

	$result = '';
	foreach ($root->childNodes as $child) {
		$result .= $dom->saveHTML($child);
	}

	return $result !== '' ? $result : $content;
}
add_filter('the_content', 'skyrora_mark_previous_block_before_about_media', 20);

function theme_allow_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'theme_allow_svg_upload');
