<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Name: Partners
 */
?>
<div class="partners" id="section-<?php echo esc_attr( skyrora_section_index() ); ?>">
    <div class="container">
        <div class="partners__inner">

            <?php
            $partners = get_field('partners_items');

            if ($partners) :
                foreach ($partners as $partner) :
                    $partner_id = is_object($partner) ? $partner->ID : (int) $partner;
                    $image_id = get_post_thumbnail_id($partner_id);
                    ?>
                    <div class="partner-item">
                        <div class="partner-item__img">
                            <picture>
                                <?php skyrora_image($image_id, 225, 85, 'lazy'); ?>
                            </picture>
                        </div>
                    </div>
                    <?php
                endforeach;
            endif;
            ?>

        </div>
    </div>
</div>
