<?php

<<<<<<< HEAD
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/** Short debug **/
if (!function_exists('dd')) {
    function dd($data) {
        echo '<pre>';
        var_dump($data);
        echo '</pre>';
    }
}


if (!function_exists('get_post_main_image')) {  
    function get_post_main_image($post_id) {
        $main_type     = get_field('acf_main_media_type', $post_id);
        $main_image_id = get_field('acf_main_image', $post_id);
        $gallery       = get_field('acf_gallery', $post_id);

        if ($main_type === 'image' && $main_image_id) {
            return wp_get_attachment_image_url($main_image_id, 'medium');
        } elseif (!empty($gallery)) {
            return wp_get_attachment_image_url($gallery[0]['acf_gallery_image_id'], 'medium');
        }
        
        return get_template_directory_uri() . '/assets/img/default.jpg';
    }
}


if (!function_exists('limit_gallery_items')) {
    function limit_gallery_items($items, $max_count = 4) {
        if (empty($items) || !is_array($items)) {
            return [];
        }
        return array_slice($items, 0, $max_count);
    }
}


if (!function_exists('get_attachment_image_no_srcset')) {
    /**
     * Get attachment image without generating srcset
     */
    function get_attachment_image_no_srcset($attachment_id, $size = 'thumbnail', $icon = false, $attr = '') {
        add_filter('wp_calculate_image_srcset_meta', '__return_null');
        $html = wp_get_attachment_image($attachment_id, $size, $icon, $attr);
        remove_filter('wp_calculate_image_srcset_meta', '__return_null');
        return $html;
    }
}


if (!function_exists('get_image')) {
    /**
     * Get image with optional width/height and lazy class
     */
    function get_image($image_id, $width_size, $height_size) {
        if (!empty($image_id)) {
            if (!empty($width_size) && !empty($height_size)) {
                return get_attachment_image_no_srcset($image_id, [$width_size, $height_size], false, ['class' => 'lazy']);
            }
            return get_attachment_image_no_srcset($image_id, 'full', false, ['class' => 'lazy']);
        }
        return false;
    }
}


if (!function_exists('image')) {
    /**
     * Echo image helper
     */
    function image($image_id, $width_size, $height_size) {
        echo get_image($image_id, $width_size, $height_size);
    }
}


if (!function_exists('render_gallery_image')) {
    function render_gallery_image($url, $alt, $wrapper_class = '', $img_class = 'w-full h-full object-cover') {
        $wrapper_class = $wrapper_class ? "overflow-hidden $wrapper_class" : 'overflow-hidden';
        echo '<div class="'.esc_attr($wrapper_class).'">';
        echo '<img data-src="'.esc_url($url).'" src="'.esc_url($url).'" alt="'.esc_attr($alt).'" class="lazy-img '.esc_attr($img_class).'">';
        echo '</div>';
    }
}


if (!function_exists('render_decor_image')) {
    function render_decor_image($images, $index) {
        if (empty($images[$index])) return;

        $img = $images[$index];

        // Додаткова перевірка, чи є src
        if (empty($img['sizes']['medium'])) return;
        ?>
        <img
            src="<?php echo esc_url($img['sizes']['medium']); ?>"
            data-src="<?php echo esc_url($img['sizes']['medium']); ?>"
            alt="<?php echo esc_attr($img['alt'] ?? ''); ?>"
            class="lazy-img object-cover w-full h-full"
            loading="lazy"
        >
        <?php
    }
}


if (!function_exists('get_post_image_url')) {
    // Функція для отримання зображення поста
    function get_post_image_url($post_id, $placeholder) {
        // 1. Перевірка thumbnail
        if ( has_post_thumbnail( $post_id ) ) {
            return get_the_post_thumbnail_url( $post_id, 'large' );
        }

        // 2. Перевірка repeater галереї ACF
        $gallery = get_field('acf_gallery', $post_id);
        if ( ! empty($gallery) && is_array($gallery) ) {
            $first_image_id = $gallery[0]['acf_image'] ?? null;
            if ( $first_image_id ) {
                return wp_get_attachment_image_url( $first_image_id, 'large' );
            }
        }

        // 3. Placeholder
        return esc_url($placeholder);
    }
}


if (!function_exists('get_inline_svg_from_acf')) {
    function get_inline_svg_from_acf($menu_item_id, $field = 'acf_navigation_icon') {
        $icon = get_field($field, $menu_item_id);
        if (!$icon) return '';

        $icon_url = is_array($icon) ? ($icon['url'] ?? '') : $icon;
        if (!$icon_url) return '';

        $attachment_id = attachment_url_to_postid($icon_url);
        $svg_path = $attachment_id ? get_attached_file($attachment_id) : '';

        if (
            $svg_path &&
            file_exists($svg_path) &&
            pathinfo($svg_path, PATHINFO_EXTENSION) === 'svg'
        ) {
            $svg = file_get_contents($svg_path);

            return preg_replace(
                '/<svg([^>]*)>/',
                '<svg$1 class="w-4 h-4 fill-current">',
                $svg,
                1
            );
        }

        return '';
    }

}

if (!function_exists('get_inline_svg_category_from_acf')) {
    function get_inline_svg_category_from_acf($term_id, $field = 'category_icon', $width = 50, $height = 50) {

        // Отримуємо ID SVG з ACF поля
        $icon_id = get_field($field, 'category_' . $term_id);
        if (!$icon_id) return '';

        // Шлях до файлу SVG
        $svg_path = get_attached_file($icon_id);

        if (
            $svg_path &&
            file_exists($svg_path) &&
            pathinfo($svg_path, PATHINFO_EXTENSION) === 'svg'
        ) {

            $svg = file_get_contents($svg_path);

            // Замінюємо fill та stroke на currentColor
            $svg = preg_replace('/fill=".*?"/', 'fill="currentColor"', $svg);
            $svg = preg_replace('/stroke=".*?"/', 'stroke="currentColor"', $svg);

            // Додаємо width та height, якщо їх ще немає
            if (!preg_match('/width="/', $svg)) {
                $svg = preg_replace('/<svg([^>]*)>/', '<svg$1 width="' . esc_attr($width) . '" height="' . esc_attr($height) . '" class="fill-current">', $svg, 1);
            } else {
                // Якщо width/height вже є, додаємо тільки клас
                $svg = preg_replace('/<svg([^>]*)>/', '<svg$1 class="fill-current">', $svg, 1);
            }

            return $svg;
        }

        return '';
    }
}


if (!function_exists('get_inline_svg_social_icons_from_acf')) {

    function get_inline_svg_social_icons_from_acf($icon_id, $width = 32, $height = 32) {

        if (!$icon_id) return '';

        $svg_path = get_attached_file($icon_id);

        if (
            $svg_path &&
            file_exists($svg_path) &&
            pathinfo($svg_path, PATHINFO_EXTENSION) === 'svg'
        ) {

            $svg = file_get_contents($svg_path);

            // Заміна кольорів
            $svg = preg_replace('/fill=".*?"/', 'fill="currentColor"', $svg);
            $svg = preg_replace('/stroke=".*?"/', 'stroke="currentColor"', $svg);

            // ❗ ВИДАЛЯЄМО старі width/height
            $svg = preg_replace('/\swidth=".*?"/', '', $svg);
            $svg = preg_replace('/\sheight=".*?"/', '', $svg);

            // ❗ ДОДАЄМО свої
            $svg = preg_replace(
                '/<svg([^>]*)>/',
                '<svg$1 width="' . esc_attr($width) . '" height="' . esc_attr($height) . '" class="fill-current">',
                $svg,
                1
            );

            return $svg;
        }

        return '';
    }
}

if (!function_exists('theme_get_post_image')) {
    function theme_get_post_image($post_id, $size = 'medium', $placeholder = '') {
        $thumbnail = get_the_post_thumbnail_url($post_id, $size);
        return $thumbnail ? $thumbnail : $placeholder;
    }
}

function theme_query_posts($args = []) {

    $default = [
        'post_type' => 'post',
        'post_status' => 'publish',
    ];

    $args = array_merge($default, $args);

    return new WP_Query($args);
}

function trim_title_chars($title, $max = 50) {
    if (mb_strlen($title) > $max) {
        return mb_substr($title, 0, $max) . '...';
    }
    return $title;
}
=======
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
>>>>>>> dev
