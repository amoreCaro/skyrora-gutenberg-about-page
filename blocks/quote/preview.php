<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Quote
 */

$quote_text = get_field('quote_text');
?>

<div id="section-<?php echo get_row_index(); ?>"  class="container article-container">
    <article class="article-landing article-landing--long">
        <?php if ( $quote_text ) : ?>
            <blockquote>
                <p>
                    <?php echo wp_kses_post( $quote_text ); ?>
                </p>
            </blockquote>
        <?php endif; ?>
    </article>
</div>