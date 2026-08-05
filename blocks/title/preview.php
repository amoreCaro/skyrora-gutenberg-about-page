<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Title
 */

$tag = get_field('acf_title_type');
$title = get_field('acf_title_text');
?>
<div class="container constructor-title">
    <?php if ($title) : ?>
        <?php if ($tag === 'h1') : ?>
            <h1 class="h2"><?php echo esc_html($title); ?></h1>
        <?php else : ?>
            <<?php echo esc_attr($tag); ?>><?php echo esc_html($title); ?></<?php echo esc_attr($tag); ?>>
        <?php endif; ?>
    <?php endif; ?>
</div>
