<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Leaders
 */
?>

<section class="section leaders js-viewport-checker">
    <div class="container">
        
        <?php if( get_field('leaders_title') ){ ?>

            <h2>
                <?php skyrora_print_escaped_field('leaders_title', 'textarea');  ?>
            </h2>

        <?php } ?>

        <div class="leaders__content">
            <div class="row">

                <?php
                $leader_items = get_field('leaders_list');

                if (!empty($leader_items)) :

                    foreach ($leader_items as $leader_index => $leader_item) :

                        $index = $leader_index + 1;
                        $leader_id = $leader_item->ID;

                        if ($index <= 2) {
                            $col_class = 'col-md-12 col-24 l-' . $index;
                        } elseif ($index >= 3 && $index <= 5) {
                            $col_class = 'col-md-8 col-24 l-' . $index;
                        } else {
                            $col_class = 'col-md-12 col-24 l-' . $index;
                        }
                ?>

                    <a 
                        href="<?php echo get_permalink($leader_id); ?>" 
                        class="<?php echo esc_attr($col_class); ?>">

                        <div class="leader-item">

                            <div class="leader-item__img">
                                <picture>
                                    <source 
                                        media="(min-width: 769px)"
                                        srcset="<?php echo get_the_post_thumbnail_url($leader_id, [160, 35]); ?>" />

                                        <?php echo wp_get_attachment_image($leader_id, 'medium'); ?>
                                </picture>
                            </div>

                            <?php if (get_the_title($leader_id)) : ?>
                                <p><?php echo esc_html(get_the_title($leader_id)); ?></p>
                            <?php endif; ?>

                        </div>

                    </a>

                <?php
                    endforeach;

                endif;
                ?>

            </div>
        </div>
    </div>
</section>