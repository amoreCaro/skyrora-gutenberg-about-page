<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Video
 */

$media_type = get_field('media_type');
$video_url = get_field('video_url');
$video_img = get_field('video_img');
$video_content = get_field('video_content');
?>

<div id="section-<?php echo esc_attr( skyrora_section_index() ); ?>" class="about about-block js-viewport-checker checker-visible">
    <div class="about__inner">
        <?php if ( $media_type === 'video' && $video_url ) : ?>
            <div class="about__video">
                <video
                    class="js-block-video"
                    src="<?php echo esc_url( $video_url ); ?>"
                    autoplay="autoplay"
                    playsinline
                    muted="muted"
                    loop="loop"
                    preload="auto"
                    poster="<?php echo esc_url( THEME . '/dist/s/images/useful/stub.webp' ); ?>"
                ></video>
            </div>
        <?php elseif ( $media_type === 'image' && $video_img ) : ?>
            <div class="about__video about--image">
                <picture>
                    <img src="<?php echo esc_url( $video_img ); ?>" alt="" loading="lazy" decoding="async">
                </picture>
            </div>
        <?php endif; ?>

        <?php if ( $video_content ) : ?>
            <div class="container">
                <div class="about__content">
                    <div class="row">
                        <div class="col-md-14 col-24">
                            <article>
                                <p>
                                    <?php echo wp_kses( $video_content, [ 'br' => [] ] ); ?>
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>
