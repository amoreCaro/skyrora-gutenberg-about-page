<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: News
 */
?>

<section class="section news js-viewport-checker invisible">
    <div class="container">
        <div class="news__top">
            <?php if( get_field('news_title') ){ ?>
                <h2>
                    <?php skyrora_print_escaped_field('news_title', 'textarea'); ?>
                </h2>
            <?php } ?>
        </div>
        <div class="news__collage">
            <div class="row">
            
                <?php 
                
                $news = get_field('news_list');

                if( $news ): ?>

                    <?php foreach( $news as $news_index => $news_item ): 
                        $id = $news_item->ID;
                        $image_id = get_post_thumbnail_id($id);
                        ?>

                        <?php if( $news_index < 1 ): ?>

                            <div class="col-lg-16 col-md-12 col-24">
                                
                                <?php if( get_field('ac_post_advanced_link_choice', $id ) == 'yes' ): ?>
                                    <a href="<?php echo esc_url(get_field('ac_post_advanced_link', $id)); ?>" class="news-banner" <?php if( get_field('ac_post_advanced_link_tab', $id) == 'yes' ){ echo 'target="_blank"'; } ?>>
                                <?php else: ?>
                                    <a href="<?php echo esc_url( get_the_permalink($id) ); ?>" class="news-banner" <?php if( get_field('ac_post_advanced_link_tab', $id) == 'yes' ){ echo 'target="_blank"'; } ?>>
                                <?php endif; ?>  

                                    <div class="news-banner__picture">
                                        <picture class="h-object-fit">
                                            <?php skyrora_image($image_id, 380, 235); ?>
                                        </picture>
                                    </div>
                                    <div class="news-banner__info">
                                        <div class="news-banner__info-top">
                                            <?php
                                                $tags = get_the_tags($id);
                                                if( !empty($tags) ){
                                                    foreach( $tags as $tag ){
                                                        echo '<span>#' . esc_html($tag->name) . '</span>';
                                                    }
                                                }
                                            ?>
                                        </div>
                                        <div class="news-banner__info-main">
                                            <?php if( get_the_title($id) ): ?>
                                                <h4><?php echo esc_html( get_the_title($id) ); ?></h4>
                                            <?php endif; ?>
                                            <time datetime="<?php echo esc_attr( get_the_date('Y-m-d' , $id) ); ?>">
                                                <?php echo esc_html( get_the_date('d.m.Y' , $id) ); ?>
                                            </time>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        <?php elseif( $news_index == 1 ): ?>

                            <div class="col-lg-8 col-md-12 col-24">
                                <?php if( get_field('ac_post_advanced_link_choice', $id ) == 'yes' ): ?>
                                    <a href="<?php skyrora_print_escaped_field('ac_post_advanced_link', 'url'); ?>" class="news-banner" <?php if( get_field('ac_post_advanced_link_tab', $id) == 'yes' ){ echo 'target="_blank"'; } ?>>
                                <?php else: ?>
                                    <a href="<?php echo esc_url( get_the_permalink($id) ); ?>" class="news-banner" <?php if( get_field('ac_post_advanced_link_tab', $id) == 'yes' ){ echo 'target="_blank"'; } ?>>
                                <?php endif; ?>  

                                    <div class="news-banner__picture">
                                        <div class="h-object-fit">
                                            <picture>
                                                <source media="(min-width: 769px)" srcset="<?php echo esc_url( get_the_post_thumbnail_url($id, array( 480, 340 ) ) ); ?>"/>
                                                <?php skyrora_image($image_id, 380, 235); ?>
                                            </picture>
                                        </div>
                                    </div>
                                    <div class="news-banner__info">
                                        <div class="news-banner__info-top">
                                            <?php
                                                $tags = get_the_tags($id);
                                                if( !empty($tags) ){
                                                    foreach( $tags as $tag ){
                                                        echo '<span>#' . esc_html($tag->name) . '</span>';
                                                    }
                                                }
                                            ?>
                                        </div>
                                        <div class="news-banner__info-main">
                                            <h4><?php echo esc_html( get_the_title($id) ); ?></h4>
                                            <time datetime="<?php echo esc_attr( get_the_date('Y-m-d' , $id) ); ?>">
                                                <?php echo esc_html( get_the_date('d.m.Y' , $id) ); ?>
                                            </time>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        <?php else: ?>

                            <div class="col-lg-8 col-md-12 col-24">
                                <?php if( get_field('ac_post_advanced_link_choice', $id ) == 'yes' ): ?>
                                    <a href="<?php skyrora_print_escaped_field('ac_post_advanced_link', 'url'); ?>" class="news-item" <?php if( get_field('ac_post_advanced_link_tab', $id) == 'yes' ){ echo 'target="_blank"'; } ?>>
                                <?php else: ?>
                                    <a href="<?php echo esc_url( get_the_permalink($id) ); ?>" class="news-item" <?php if( get_field('ac_post_advanced_link_tab', $id) == 'yes' ){ echo 'target="_blank"'; } ?>>
                                <?php endif; ?>  

                                    <div class="news-item__picture">
                                        <div class="h-object-fit">
                                            <picture>
                                                <source media="(min-width: 769px)" srcset="<?php echo esc_url( get_the_post_thumbnail_url($id, array( 480, 340 ) ) ); ?>"/>
                                                <?php skyrora_image($image_id, 380, 235); ?>
                                            </picture>
                                        </div>
                                    </div>
                                    <div class="news-item__info">
                                        <div class="news-item__info-top">
                                            <?php
                                                $tags = get_the_tags($id);
                                                if( !empty($tags) ){
                                                    foreach( $tags as $tag ){
                                                        echo '<span>#' . esc_html($tag->name) . '</span>';
                                                    }
                                                }
                                            ?>
                                        </div>
                                        <div class="news-item__info-main">
                                            <h4><?php echo esc_html( get_the_title( $id ) ); ?></h4>
                                            <time datetime="<?php echo esc_attr( get_the_date( 'Y-m-d', $id ) ); ?>">
                                                <?php echo esc_html( get_the_date( 'd.m.Y', $id ) ); ?>
                                            </time>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        <?php endif; ?>

                    <?php endforeach; wp_reset_postdata(); ?>
            
                <?php endif;  ?>
                    
            </div>
        </div>
        <div class="news__link">
            <a href="<?php skyrora_print_escaped_field('news_button_link', 'url'); ?>" class="button button--bordered">
                <span>
                    <?php skyrora_print_escaped_field('news_button_text'); ?>
                </span>
                <svg width="1em" height="1em" class="icon icon-arrow-right ">
                    <use xlink:href="<?php echo esc_url(THEME . '/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right'); ?>">
                </svg>
            </a>
        </div>
    </div>
</section>