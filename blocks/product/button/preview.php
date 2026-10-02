<?php

if (!defined('ABSPATH')) {
    exit;
}

$color = get_field('button_style');
$color = is_string($color) ? sanitize_html_class($color) : '';
if ($color === 'white') {
    $color = 'empty';
}

$option = get_field('button_options');
$option = is_string($option) ? $option : '';

$label = get_field('button_text');
$label = is_string($label) ? $label : '';

$link = get_field('button_url');
$link = is_string($link) ? $link : '';

$popups = array(
    'popupBook'      => 'popup-mail',
    'popupIndicate'  => 'popup-mail',
    'popupMail'      => 'popup-mail',
    'popupSubscribe' => 'popup-mail',
);

?>
<div id="section-<?php echo esc_attr(skyrora_section_index()); ?>" class="container landing-links" style="margin-bottom: 40px;">
    <?php if ($option === 'link') : ?>
        <a href="<?php echo esc_url($link); ?>" class="button button--<?php echo esc_attr($color); ?>">
            <span><?php echo esc_html($label); ?></span>
            <svg width="1em" height="1em" class="icon icon-arrow-right">
                <use xlink:href="<?php echo esc_url(THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right'); ?>"></use>
            </svg>
        </a>
    <?php elseif (isset($popups[$option])) : ?>
        <button type="button" data-popup-name="<?php echo esc_attr($popups[$option]); ?>" class="button button--<?php echo esc_attr($color); ?> js-popup-btn">
            <span><?php echo esc_html($label); ?></span>
            <svg width="1em" height="1em" class="icon icon-arrow-right">
                <use xlink:href="<?php echo esc_url(THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right'); ?>"></use>
            </svg>
        </button>
    <?php endif; ?>
</div>
