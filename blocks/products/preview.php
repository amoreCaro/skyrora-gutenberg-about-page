<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Products
 */
?>

<section data-rellax-speed="-8" id="mainPageCategoriesId" class="section section--nextIsVideo categories rellax">
    <div class="container">
        <div class="grid-container grid-container--type1">
            <?php $product_ids = get_field('products_list');

                $product_args = array(
                    'post_type' => 'product',
                    'posts_per_page' => -1,
                    'post_status' => ['publish','draft'],
                    'post__in' => $product_ids,
                    'orderby'  => 'post__in',
                );
                
                $products = get_posts($product_args); 
    
                if( $products ): ?>
                
                    <?php foreach( $products as $product_index => $product ): 
                        $product_id = $product->ID;
                        $product_image_id = get_post_thumbnail_id( $product_id );
                        $product_status = get_post_status($product_id);
                        $product_link = get_the_permalink($product_id);

                        if($product_index == 0){ ?>
                            <a href="<?php echo esc_url( get_permalink( $product_id ) ); ?>" class="js-product product product--<?php echo esc_attr( $product_index ); ?>">
                                <div class="product__info">
                                    <div class="product__info-top">
                                        <?php if( get_the_title($product_id) ){ ?>
                                            <span>
                                                <?php echo esc_html( get_the_title($product_id) ); ?>
                                            </span>
                                        <?php } ?>

                                        <?php if( get_field('acf_product_short_content', $product_id) ){ ?>
                                            <p>
                                                <?php skyrora_print_escaped_field('acf_product_short_content'); ?>
                                            </p>
                                        <?php } ?>
                                    </div>
                                    <div class="product__info-read">
                                        <span>Read more</span>
                                        <svg width="1em" height="1em" class="icon icon-arrow-right ">
                                            <use xlink:href="<?php echo esc_url( THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right' ); ?>"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="product__picture">
                                    <?php if( get_field('acf_product_hover', $product_id) ){ ?>
                                        <video class="product__video" loop="loop" muted="muted" loading="lazy" decoding="async" poster="<?php skyrora_image_url($product_image_id, 150, 880, ); ?>">
                                           <source src="<?php skyrora_print_escaped_field('acf_product_hover', 'url'); ?>" type="video/webm">
                                        <source src="<?php skyrora_print_escaped_field('acf_product_hover_safary', 'url'); ?>" type="video/quicktime">
                                        </video>
                                    <?php }  else { 
                                         skyrora_image($product_image_id, 180, 220, );
                                        } 
                                    ?>
                                </div>
                            </a>
                        <?php
                        } 

                        elseif( $product_index > 0 && $product_index < 5 ){ ?>
                            <a href="<?php echo esc_url( get_permalink($product_id) ); ?>" class="js-product product product--<?php esc_attr_e($product_index); ?>">
                                <div class="product__info">
                                    <div class="product__info-top">
                                        <?php if( get_the_title($product_id) ){ ?>
                                            <span>
                                                <?php echo esc_html( get_the_title($product_id) ); ?>
                                            </span>
                                        <?php } ?>

                                        <?php if( get_field('acf_product_short_content', $product_id) ){ ?>
                                            <p>
                                                <?php echo esc_html( get_field('acf_product_short_content', $product_id) ); ?>
                                            </p>
                                        <?php } ?>
                                    </div>
                                    <div class="product__info-read">
                                        <span>Read more</span>
                                        <svg width="1em" height="1em" class="icon icon-arrow-right ">
                                            <use xlink:href="<?php echo esc_url( THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right' ); ?>"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="product__picture">
                                   
                                    <?php if( get_field('acf_product_hover', $product_id) ){ ?>
                                        <video class="product__video" muted="muted" loop="loop" loading="lazy" decoding="async" poster="<?php skyrora_image_url($product_image_id, 130, 394, ); ?>">
                                            <source src="<?php echo esc_url(get_field('acf_product_hover', $product_id)); ?>" type="video/webm">
                                            <source src="<?php echo esc_url(get_field('acf_product_hover_safary', $product_id)); ?>" type="video/quicktime">
                                        </video>
                                    <?php } else { 
                                         skyrora_image($product_image_id, 180, 220, );
                                        } 
                                    ?>
                                </div>
                            </a>
                        <?php } else { ?>
                            <?php if( $product_status == 'publish'){ ?>
                                <a href="<?php echo esc_url( get_permalink($product_id) ); ?>" class="product--horizontal product product--<?php esc_attr_e($product_index); ?>">
                            <?php } else { ?> 
                                <div class="product--horizontal product product--<?php esc_attr_e($product_index); ?>">
                            <?php } ?>
                                    <div class="product__info">
                                        <div class="product__info-top">
                                            <?php if( get_the_title($product_id) ){ ?>
                                                <span>
                                                    <?php echo esc_html( get_the_title($product_id) ); ?>
                                                </span>
                                            <?php } ?>

                                            <?php if( get_field('acf_product_short_content', $product_id) ){ ?>
                                                <p>
                                                    <?php echo esc_html( get_field('acf_product_short_content', $product_id) ); ?>
                                                </p>
                                            <?php } ?>
                                        </div>
                                        <?php if( $product_status == 'publish'){ ?>
                                            <div class="product__info-read">
                                                <span>Read more</span>
                                                <svg width="1em" height="1em" class="icon icon-arrow-right ">
                                                    <use xlink:href="<?php echo esc_url( THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right' ); ?>"></use>
                                                </svg>
                                            </div>
                                        <?php } ?>
                                    </div>
                                    <div class="product__picture">
                                        <?php skyrora_image($product_image_id, 180, 220, ); ?>
                                    </div>
                            <?php if( $product_status == 'publish'){ ?>
                                </a>
                            <?php } else { ?> 
                                </div>
                            <?php } 
                    }  ?>

                    <?php endforeach; wp_reset_postdata(); ?>
                
                <?php endif; ?>
        </div>
    </div>
</section>