<?php 
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$categories      = get_the_category();
$first_category  = ! empty( $categories ) ? $categories[0] : null;
$title           = get_the_title();
$is_front_page   = is_front_page();
$is_page         = is_page() && ! $is_front_page;
$ancestors       = $is_page ? array_reverse( get_post_ancestors( get_the_ID() ) ) : [];
$show            = $is_front_page || ( $first_category && $title ) || ( $is_page && $title );

$chevron = '<svg class="w-4 h-4 text-[#9CA3AF] dark:text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6" /></svg>';
?>

<?php if ( $show ) : ?>
<nav class="breadcrumbs max-w-[800px] mx-auto pt-8 pb-8 hidden sm:block xl:pl-0"
     aria-label="Breadcrumb">
     
    <ul class="flex flex-wrap items-center gap-x-4 gap-y-2 font-light text-[18px] leading-[18px] text-[#6B7280] dark:text-white/60"
        itemscope
        itemtype="https://schema.org/BreadcrumbList">

        <?php if ( $is_front_page ) : ?>
            <li class="text-black dark:text-white"
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem">

                <span itemprop="name">Home</span>
                <meta itemprop="position" content="1" />
            </li>

        <?php else : ?>

            <!-- Home -->
            <li class="flex items-center gap-x-4"
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem">

                <a href="<?php echo esc_url( home_url('/') ); ?>"
                   itemprop="item"
                   class="transition-colors duration-300 text-[#374151] dark:text-white hover:text-blue-400 dark:hover:text-blue-400">
                    <span itemprop="name">Home</span>
                </a>

                <meta itemprop="position" content="1" />

                <?php echo $chevron; ?>
            </li>

            <?php if ( $is_page ) : ?>
                <?php
                $position = 2;
                foreach ( $ancestors as $ancestor_id ) :
                ?>
                    <li class="flex items-center gap-x-4"
                        itemprop="itemListElement"
                        itemscope
                        itemtype="https://schema.org/ListItem">

                        <a href="<?php echo esc_url( get_permalink( $ancestor_id ) ); ?>"
                           itemprop="item"
                           class="transition-colors duration-300 capitalize text-[#374151] dark:text-white hover:text-blue-400 dark:hover:text-blue-400">
                            <span itemprop="name">
                                <?php echo esc_html( get_the_title( $ancestor_id ) ); ?>
                            </span>
                        </a>

                        <meta itemprop="position" content="<?php echo esc_attr( (string) $position ); ?>" />

                        <?php echo $chevron; ?>
                    </li>
                <?php
                    $position++;
                endforeach;
                ?>

                <li class="text-[#9CA3AF] dark:text-white/40"
                    itemprop="itemListElement"
                    itemscope
                    itemtype="https://schema.org/ListItem">

                    <span itemprop="name">
                        <?php echo esc_html( $title ); ?>
                    </span>

                    <meta itemprop="position" content="<?php echo esc_attr( (string) $position ); ?>" />
                </li>

            <?php else : ?>

                <!-- Category -->
                <li class="flex items-center gap-x-4"
                    itemprop="itemListElement"
                    itemscope
                    itemtype="https://schema.org/ListItem">

                    <a href="<?php echo esc_url( get_category_link( $first_category->term_id ) ); ?>"
                       itemprop="item"
                       class="transition-colors duration-300 capitalize text-[#374151] dark:text-white hover:text-blue-400 dark:hover:text-blue-400">
                        <span itemprop="name">
                            <?php echo esc_html( $first_category->name ); ?>
                        </span>
                    </a>

                    <meta itemprop="position" content="2" />

                    <?php echo $chevron; ?>
                </li>

                <!-- Current post -->
                <li class="text-[#9CA3AF] dark:text-white/40"
                    itemprop="itemListElement"
                    itemscope
                    itemtype="https://schema.org/ListItem">

                    <span itemprop="name">
                        <?php echo esc_html( $title ); ?>
                    </span>

                    <meta itemprop="position" content="3" />
                </li>

            <?php endif; ?>

        <?php endif; ?>

    </ul>
</nav>
<?php endif; ?>
