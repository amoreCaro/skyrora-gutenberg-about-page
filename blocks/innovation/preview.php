<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Innovation
 */
?>

<section class="section about js-viewport-checker">
    <div class="about__inner">
        
        <?php 
        if ( get_field('innovation_media_type') === 'video' ) {
            get_template_part('blocks/innovation/templates/background-video');
        } else if (get_field('innovation_media_type') === 'image') { 
            get_template_part('blocks/innovation/templates/background');
        } 
        ?>

        <div class="container">
            <div data-rellax-percentage="0.2" class="about__content">
                <div class="row">
                    
                    <div class="col-md-14 col-24">
                        <article>
                            <?php if ( get_field('innovation_title') ): ?>
                                <h2><?php skyrora_print_escaped_field('innovation_title', 'textarea'); ?></h2>
                            <?php endif; ?>

                            <?php if ( get_field('innovation_content') ): ?>
                                <p><?php skyrora_print_escaped_field('innovation_content'); ?></p>
                            <?php endif; ?>
                        </article>
                    </div>

                    <div class="col-md-10 col-24">
                        <?php if ( have_rows('innovation_list') ): ?>
                            <ul>
                                <?php while ( have_rows('innovation_list') ): the_row(); ?>
                                    <?php if ( get_sub_field('innovation_list_text') ): ?>
                                        <li>
                                            <span><?php echo esc_html( get_sub_field('innovation_list_text') ); ?></span>
                                        </li>
                                    <?php endif; ?>
                                <?php endwhile; ?>
                            </ul>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>