<?php

if (!defined('ABSPATH')) {
    exit;
}

$title = get_field('look_other_products_title');
$btn_text = get_field('look_other_products_btn_text');
$btn_url = get_field('look_other_products_btn_url');
$products = get_field('look_other_products_list');

if (!is_array($products)) {
    $products = $products instanceof WP_Post ? array($products) : array();
}

?>
<div id="section-<?php echo esc_attr(skyrora_section_index()); ?>" class="container constructor-title">
    <?php if ($title) : ?>
        <h2><?php echo esc_html($title); ?></h2>
    <?php endif; ?>
    <?php if ($btn_text && $btn_url) : ?>
        <a href="<?php echo esc_url($btn_url); ?>" class="link-line">
            <span><?php echo esc_html($btn_text); ?></span>
            <svg width="1em" height="1em" class="icon icon-arrow-right">
                <use xlink:href="<?php echo esc_url( THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right' ); ?>"></use>
            </svg>
        </a>
    <?php endif; ?>
</div>

<div class="container recommended-block">
    <div class="row">
        <?php foreach ($products as $product) :
            $product_id = $product->ID;
            $product_image_id = get_post_thumbnail_id($product_id);
            ?>
            <div class="col-lg-8 col-md-12">
                <a href="<?php echo esc_url(get_permalink($product_id)); ?>" class="js-product product">
                    <div class="product__info">
                        <div class="product__info-top">
                            <?php if (get_the_title($product_id)) : ?>
                                <h4><?php echo esc_html(get_the_title($product_id)); ?></h4>
                            <?php endif; ?>

                            <?php if (get_field('acf_product_short_content', $product_id)) : ?>
                                <p><?php echo esc_html(get_field('acf_product_short_content', $product_id)); ?></p>
                            <?php endif; ?>
                        </div>
                        <div class="product__info-read"><span>Read more</span>
                            <svg width="1em" height="1em" class="icon icon-arrow-right">
                                <use xlink:href="<?php echo esc_url( THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right' ); ?>"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="product__picture">
                        <?php skyrora_image($product_image_id, 220, 220); ?>
                    </div>
                </a>
            </div>
        <?php endforeach; ?>
    </div>
    <?php if ($btn_text && $btn_url) : ?>
        <div class="constructor-mobile-link">
            <a href="<?php echo esc_url($btn_url); ?>" class="link-line">
                <span><?php echo esc_html($btn_text); ?></span>
                <svg width="1em" height="1em" class="icon icon-arrow-right">
                    <use xlink:href="<?php echo esc_url( THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right' ); ?>"></use>
                </svg>
            </a>
        </div>
    <?php endif; ?>
</div>
