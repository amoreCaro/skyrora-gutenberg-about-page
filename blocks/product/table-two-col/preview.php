<?php

if (!defined('ABSPATH')) {
    exit;
}

$rows = get_field('product_contents_content_table');

if (!is_array($rows)) {
    $rows = array();
}

?>
<div id="section-<?php echo esc_attr(skyrora_section_index()); ?>" class="container characteristics-list two--column">
    <?php if ($rows) : ?>
        <ul>
            <?php foreach ($rows as $row) :
                $name = isset($row['product_contents_content_table_name']) ? $row['product_contents_content_table_name'] : '';
                $value = isset($row['product_contents_content_table_value']) ? $row['product_contents_content_table_value'] : '';

                if ($name === '' && $value === '') {
                    continue;
                }
                ?>
                <li>
                    <span><?php echo esc_html($name); ?></span>
                    <span><?php echo esc_html($value); ?></span>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</div>
