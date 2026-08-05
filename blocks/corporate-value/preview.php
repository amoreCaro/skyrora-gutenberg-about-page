<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Corporate Value
 */
?>
<div id="section-<?php echo esc_attr( skyrora_section_index() ); ?>" class="container constructor-columns">
    <div class="row">
        <?php if ( have_rows('corporate_value_items') ) : ?>
            <?php while ( have_rows('corporate_value_items') ) : the_row(); ?>
                <?php
                $name = get_sub_field('corporate_value_name');
                $content = get_sub_field('corporate_value_content');
                ?>
                <div class="col-md-12">
                    <article class="article-column">
                        <h4></h4>
                        <?php if ( $name ) : ?>
                            <h3><?php echo wp_kses( $name, [ 'br' => [] ] ); ?></h3>
                        <?php endif; ?>

                        <?php if ( $content ) : ?>
                            <p>
                                <?php echo wp_kses( $content, [ 'br' => [] ] ); ?>
                            </p>
                        <?php endif; ?>
                    </article>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>
