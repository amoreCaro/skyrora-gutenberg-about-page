<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: News About
 */
?>

<section id="section-<?php echo esc_attr( skyrora_section_index() ); ?>" class="section news js-viewport-checker invisible"
        style="background-color: <?php echo esc_attr( get_field('about_news_bg') ); ?>;">
    <div class="container">
        <div class="news__top">
            <?php if (get_field('about_news_title')): ?>
                <h1 class="h2" style="color:black;">
                    <?php skyrora_print_escaped_field('about_news_title', 'textarea'); ?>
                </h1>
            <?php endif; ?>
        </div>
        <div class="news__collage">
            <div class="row news__row">

                <?php
                $news = get_field('about_news_list');

                if ($news): ?>

                    <?php foreach ($news as $news_index => $news_item):
                        $id = $news_item->ID;
                        $image_id = get_post_thumbnail_id($id);
                        $use_advanced_link = get_field('ac_post_advanced_link_choice', $id) == 'yes';
                        $link = $use_advanced_link
                            ? get_field('ac_post_advanced_link', $id)
                            : get_the_permalink($id);
                        $target_blank = get_field('ac_post_advanced_link_tab', $id) == 'yes';
                        ?>

                        <?php if ($news_index < 1): ?>

                            <div class="col-lg-16 col-md-12 col-24">
                                <a href="<?php echo esc_url($link); ?>" class="news-banner"<?php if ($target_blank) { echo ' target="_blank"'; } ?>>
                                    <div class="news-banner__picture">
                                        <div class="h-object-fit">
                                            <?php skyrora_image($image_id, 780, 440); ?>
                                        </div>
                                    </div>
                                    <div class="news-banner__info">
                                        <div class="news-banner__info-top">
                                            <?php
                                            $tags = get_the_tags($id);
                                            if (!empty($tags)) {
                                                foreach ($tags as $tag) {
                                                    echo '<span>#' . esc_html($tag->name) . '</span>';
                                                }
                                            }
                                            ?>
                                        </div>
                                        <div class="news-banner__info-main">
                                            <?php if (get_the_title($id)): ?>
                                                <h4><?php echo esc_html(get_the_title($id)); ?></h4>
                                            <?php endif; ?>
                                            <time datetime="<?php echo esc_attr(get_the_date('Y-m-d', $id)); ?>">
                                                <?php echo esc_html(get_the_date('d.m.Y', $id)); ?>
                                            </time>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        <?php elseif ($news_index == 1): ?>

                            <div class="col-lg-8 col-md-12 col-24">
                                <a href="<?php echo esc_url($link); ?>" class="news-banner"<?php if ($target_blank) { echo ' target="_blank"'; } ?>>
                                    <div class="news-banner__picture">
                                        <div class="h-object-fit">
                                            <?php skyrora_image($image_id, 380, 440); ?>
                                        </div>
                                    </div>
                                    <div class="news-banner__info">
                                        <div class="news-banner__info-top">
                                            <?php
                                            $tags = get_the_tags($id);
                                            if (!empty($tags)) {
                                                foreach ($tags as $tag) {
                                                    echo '<span>#' . esc_html($tag->name) . '</span>';
                                                }
                                            }
                                            ?>
                                        </div>
                                        <div class="news-banner__info-main">
                                            <h4><?php echo esc_html(get_the_title($id)); ?></h4>
                                            <time datetime="<?php echo esc_attr(get_the_date('Y-m-d', $id)); ?>">
                                                <?php echo esc_html(get_the_date('d.m.Y', $id)); ?>
                                            </time>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        <?php else: ?>

                            <div class="col-lg-8 col-md-12 col-24">
                                <a href="<?php echo esc_url($link); ?>" class="news-item"<?php if ($target_blank) { echo ' target="_blank"'; } ?>>
                                    <div class="news-item__picture">
                                        <div class="h-object-fit">
                                            <?php skyrora_image($image_id, 280, 336); ?>
                                        </div>
                                    </div>
                                    <div class="news-item__info">
                                        <div class="news-item__info-top">
                                            <?php
                                            $tags = get_the_tags($id);
                                            if (!empty($tags)) {
                                                foreach ($tags as $tag) {
                                                    echo '<span>#' . esc_html($tag->name) . '</span>';
                                                }
                                            }
                                            ?>
                                        </div>
                                        <div class="news-item__info-main">
                                            <h4><?php echo esc_html(get_the_title($id)); ?></h4>
                                            <time datetime="<?php echo esc_attr(get_the_date('Y-m-d', $id)); ?>">
                                                <?php echo esc_html(get_the_date('d.m.Y', $id)); ?>
                                            </time>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        <?php endif; ?>

                    <?php endforeach; ?>

                <?php endif; ?>

            </div>
        </div>
    </div>
</section>
