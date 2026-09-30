<?php

if (!defined('ABSPATH')) {
    exit;
}

$stages = get_field('list-stages');

if (!is_array($stages)) {
    $stages = $stages instanceof WP_Post ? array($stages) : array();
}

?>
<div id="section-<?php echo esc_attr(skyrora_section_index()); ?>" class="container stages-collage">
    <div class="grid-container grid-container--type2">

        <?php if ($stages) : ?>

            <?php foreach( $stages as $stage ):  ?>
                    
                    <div class="product--horizontal product--column-mobile product">
                        <div class="product__info">
                            <div class="product__info-top">
                            
                                <?php if( get_the_title($stage->ID) ){ ?>

                                    <h4>
                                        <?php echo get_the_title($stage->ID); ?>
                                    </h4>

                                <?php } ?>
                                
                                <?php if( get_field('acf_product_short_content', $stage->ID) ){ ?>

                                    <p>
                                        <?php echo get_field('acf_product_short_content', $stage->ID); ?>
                                    </p>

                                <?php } ?>
                                
                            </div>
                        </div>
                        <div class="product__picture">
                            <picture>
                                <source media="(min-width: 769px)" srcset="<?php echo get_the_post_thumbnail_url($stage->ID,'large' ); ?>"/>
                                <source srcset="<?php echo get_the_post_thumbnail_url($stage->ID, 'large'); ?>" type="image/webp" />
                                <?php echo wp_get_attachment_image(get_post_thumbnail_id($stage->ID), 'large' ); ?>
                            </picture>
                        </div>
                    </div>
               
            <?php endforeach; ?>

        <?php endif; ?>

    </div>
</div>