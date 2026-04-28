<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Banner
 */
?>

<section id="section-<?php echo esc_attr(get_row_index()); ?>" class="banner--landing banner--description section banner js-viewport-checker">

    <?php if (get_field('banner_media_type') === 'video') { ?>
        <div id="bannerVideoId"
             data-src="<?php skyrora_print_escaped_field('banner_video', 'url'); ?>"
             class="banner__video">

            <video autoplay playsinline muted loop class="bv-video" data-prevent-transform="true">
                <source src="<?php skyrora_print_escaped_field('banner_video', 'url'); ?>" type="video/mp4" />
            </video>

        </div>
    <?php } else { ?>

        <div id="bannerVideoId"
             data-src="<?php skyrora_print_escaped_field('banner_image', 'url'); ?>"
             class="banner__video banner--image">

            <div class="bv-video-wrap bv-video-wrap-0" style="position: relative; overflow: hidden; z-index: 10;">
                <video autoplay="true"
                       playsinline
                       muted
                       loop="true"
                       poster="<?php skyrora_print_escaped_field('banner_image', 'url'); ?>"
                       class="bv-video"
                       preload="metadata"
                       style="position: absolute; z-index: 1;">

                    <source src="<?php skyrora_print_escaped_field('banner_image', 'url'); ?>" type="video/mp4">
                </video>
            </div>
        </div>
    <?php } ?>

    <div class="container">
        <div class="banner__content">

            <div class="banner__content-txt">
            <?php
            $logos = get_field('banner_images');

            if (!empty($logos)) { ?>
                <div class="banner__content-logo">
                    <?php foreach ($logos as $item) {

                        $image_id = $item['ID'] ?? null;

                        if (!$image_id) {
                            continue;
                        }
                        ?>
                        <div class="banner__content-logo__item">
                            <figure>
                                <?php skyrora_image($image_id, 300, 300); ?>
                            </figure>
                        </div>
                    <?php } ?>
                </div>
            <?php } ?>

                <?php if (get_field('banner_title')) { ?>
                    <h1>
                        <?php skyrora_print_escaped_field('banner_title', 'textarea'); ?>
                    </h1>
                <?php } ?>

                <?php if (get_field('banner_subtitle')) { ?>
                    <p>
                        <?php skyrora_print_escaped_field('banner_subtitle'); ?>
                    </p>
                <?php } ?>
            </div>

            <div class="banner__content-list">
                <ul>
                    <li>
                        <a href="#section-<?php echo esc_attr(get_sub_field('acf_product_nav_section_index')); ?>"
                           data-section-nav="#section-<?php echo esc_attr(get_sub_field('acf_product_nav_section_index')); ?>">
                            <?php echo esc_html(get_sub_field('acf_product_nav_section_name')); ?>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>