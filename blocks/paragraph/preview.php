<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Paragraph
 */

$content = get_field('paragraph_text');
?>
<div id="section-<?php echo get_row_index(); ?>" class="container article-container">
    <article class="article-landing article-landing--long">
        <?php if ($content) : ?>
            <p>
                <?php echo wp_kses_post($content); ?>
            </p>
        <?php endif; ?>
    </article>
</div>
