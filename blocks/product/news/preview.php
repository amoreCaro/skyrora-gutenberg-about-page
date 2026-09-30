<?php

if (!defined('ABSPATH')) {
    exit;
}

$title = get_field('product_news_title');
$posts = get_field('product_list_product');
$bg_color = get_field('product_news_bg_color') ?: '#F3F3F5';

if (!is_array($posts)) {
    $posts = $posts instanceof WP_Post ? array($posts) : array();
}

?>
<section id="section-<?php echo esc_attr(skyrora_section_index()); ?>" class="section news js-viewport-checker checker-visible news--product" style="background-color: <?php echo esc_attr($bg_color); ?>;">
    <div class="container">
        <?php if ($title) : ?>
            <h2>
                <?php echo esc_html($title); ?>
            </h2>
        <?php endif; ?>

        <?php if ($posts) : ?>
            <div class="row news__row">
                <?php foreach ($posts as $product) : ?>
                    <?php
                    $product_id = $product->ID;
                    $product_image_id = get_post_thumbnail_id($product_id);
                    $link = get_permalink($product_id);
                    $target = '';

                    if (get_field('ac_post_advanced_link_choice', $product_id) === 'yes') {
                        $advanced_link = get_field('ac_post_advanced_link', $product_id);

                        if ($advanced_link) {
                            $link = $advanced_link;
                        }
                    }

                    if (get_field('ac_post_advanced_link_tab', $product_id) === 'yes') {
                        $target = ' target="_blank" rel="noopener noreferrer"';
                    }
                    ?>
                    <div class="col-lg-8 col-md-12 col-24">
                        <a href="<?php echo esc_url($link); ?>" class="news-item"<?php echo $target; ?>>
                            <div class="news-item__picture">
                                <div class="h-object-fit">
                                    <?php skyrora_image($product_image_id, 178, 274); ?>
                                </div>
                            </div>
                            <div class="news-item__info">
                                <div class="news-item__info-top">
                                    <?php
                                    $tags = get_the_tags($product_id);

                                    if (!empty($tags)) {
                                        foreach ($tags as $tag) {
                                            echo '<span>#' . esc_html($tag->name) . '</span>';
                                        }
                                    }
                                    ?>
                                </div>
                                <div class="news-item__info-main">
                                    <h4>
                                        <?php echo esc_html(get_the_title($product_id)); ?>
                                    </h4>
                                    <time datetime="<?php echo esc_attr(get_the_date('Y-m-d', $product_id)); ?>">
                                        <?php echo esc_html(get_the_date('d.m.Y', $product_id)); ?>
                                    </time>
                                </div>
                            </div>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
