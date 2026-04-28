<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Preview
 */
?>
<section class="section--nextIsVideo section about-dedicated-mod js-viewport-checker checker-visible"
    <?php if( get_field('dedicated_image') ) : ?>
        style="background-image: url('<?php echo esc_url( wp_get_attachment_image_url(get_field('dedicated_image'), 'full') ); ?>');"
    <?php endif; ?>>

    <div class="container">
        <div class="about-dedicated__inner">
            <div class="about__content--dedicated-mod">

                <?php if( get_field('dedicated_title') ): ?>
                    <h2>
                        <?php skyrora_print_escaped_field('dedicated_title', 'textarea'); ?>
                    </h2>
                <?php endif; ?>
            
                <?php if( have_rows('dedicated_list') ): ?>
                    <ul>
                        <?php while( have_rows('dedicated_list') ): the_row(); ?>
                            <li>
                                <span class="icon-wrap">
                                    <?php 
                                        $image_id = get_sub_field('dedicated_list_item_image');
                                        if ($image_id) {
                                            echo wp_get_attachment_image($image_id, 'thumbnail');
                                        }
                                    ?>
                                </span>
                                <?php if( get_sub_field('dedicated_list_item_content') ): ?>
                                    <span>
                                        <?php echo esc_html( get_sub_field('dedicated_list_item_content') ); ?>
                                    </span>
                                <?php endif; ?>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                <?php endif; ?>

                <button type="button" data-popup-name="popup-book" class="button button--blue js-popup-btn">
                    <span>
                        <?php skyrora_print_escaped_field('dedicated_button_text'); ?>
                    </span>
                    <svg width="1em" height="1em" class="icon icon-arrow-right ">
                        <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>