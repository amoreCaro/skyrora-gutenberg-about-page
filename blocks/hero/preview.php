<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Hero
 */
?>

<section id="section-<?php echo esc_attr( skyrora_section_index() ); ?>" class="banner--landing banner--description section banner js-viewport-checker">

    <?php if ( get_field('hero_background_type') === 'video' ) {
        $video_url = get_field('hero_video');
        ?>
        <div id="bannerVideoId"
             data-src="<?php echo esc_url( $video_url ); ?>"
             class="banner__video">
            <video autoplay playsinline muted loop class="bv-video" data-prevent-transform="true">
                <source src="<?php echo esc_url( $video_url ); ?>" type="video/mp4" />
            </video>
        </div>
    <?php } else { ?>
        <div id="bannerVideoId"
             data-src="<?php skyrora_print_escaped_field('hero_backgroud_image', 'url'); ?>"
             class="banner__video banner--image">
            <div class="bv-video-wrap bv-video-wrap-0" style="position: relative; overflow: hidden; z-index: 10;">
                <video autoplay="true"
                       playsinline
                       muted
                       loop="true"
                       poster="<?php skyrora_print_escaped_field('hero_backgroud_image', 'url'); ?>"
                       class="bv-video"
                       preload="metadata"
                       style="position: absolute; z-index: 1;">
                    <source src="<?php skyrora_print_escaped_field('hero_backgroud_image', 'url'); ?>" type="video/mp4">
                </video>
            </div>
        </div>
    <?php } ?>

    <div class="container">
        <div class="banner__content">
            <div class="banner__content-txt">

                <?php if ( get_field('hero_subtitle') ) { ?>
                    <span class="title-sub">
                        <?php skyrora_print_escaped_field('hero_subtitle', 'textarea'); ?>
                    </span>
                <?php } ?>

                <?php if ( get_field('hero_title') ) { ?>
                    <h1>
                        <?php skyrora_print_escaped_field('hero_title', 'textarea'); ?>
                    </h1>
                <?php } ?>

                <?php if ( get_field('content') ) { ?>
                    <p>
                        <?php skyrora_print_escaped_field('content', 'textarea'); ?>
                    </p>
                <?php } ?>

            </div>

            <?php if ( have_rows('hero_page_navigation') ) : ?>
                <div class="banner__content-list">
                    <ul>
                        <?php while ( have_rows('hero_page_navigation') ) : the_row(); ?>
                            <li>
                                <a href="#section-<?php echo esc_attr( get_sub_field('hero_section_index') ); ?>"
                                   data-section-nav="#section-<?php echo esc_attr( get_sub_field('hero_section_index') ); ?>">
                                    <?php echo esc_html( get_sub_field('hero_name_section') ); ?>
                                </a>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                </div>
            <?php endif; ?>

        </div>
    </div>

</section>
