<<<<<<< HEAD
<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * ACF Global Settings
 */

$disclaimer = get_field('footer_disclamer', 'option');

$copyright = get_field('footer_copyright', 'option');

$pre_text     = $copyright['footer_copyright_before_link'] ?? '';
$link_data = $copyright['footer_agency_link'] ?? null;
$link_url  = $link_data['url'] ?? '';
$link_text = $link_data['title'] ?? '';
$link_target = $link_data['target'] ?? '_self';
$post_text    = $copyright['footer_text_after_link'] ?? '';

$before_year  = $copyright['footer_before_year'] ?? '';
$current_year = date('Y');
/**
 * Footer Menu
 */
$nav_menu = get_nav_menu_locations();
$footer_items = [];

if (isset($nav_menu['footer_menu'])) {
    $menu_id = $nav_menu['footer_menu'];
    $footer_items = wp_get_nav_menu_items($menu_id);
}
?>

<footer class="footer py-[100px] flex items-center bg-white dark:bg-black justify-center border-t dark:border-[#1a1a1a]">
    <div class="container mx-auto flex flex-col items-center gap-5 text-center">

        <!-- Disclaimer -->
        <?php if ( !empty($disclaimer) ) : ?> 
            <div class="text-[14px] leading-[28px]  font-normal max-w-[912px] mx-auto text-center text-dark dark:text-white">
                <?php echo $disclaimer; ?>
            </div>
        <?php endif; ?>

        <!-- Footer nav -->
        <?php if (!empty($footer_items)) : ?>
        <nav class="min-h-[46px] flex items-center">
            <ul class="flex justify-center flex-wrap">
                <?php foreach ($footer_items as $item) : 
                    $text = $item->title ?? '';
                    $url  = $item->url ?? '';

                    if (!$text) continue;
                ?>
                    <li>
                        <a
                            href="<?php echo esc_url($url); ?>"
                            class="text-[14px] leading-[20px] font-medium text-gray-700 dark:text-white px-5 py-3 transition-colors duration-300 hover:text-blue-400 dark:hover:text-blue-400" 
                        >
                            <?php echo esc_html($text); ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </nav>
        <?php endif; ?>

        <!-- Socials -->
        <?php require PATH . "/components/socials/component.php"; ?> 

        <!-- Copyright -->
        <span class="text-[14px] leading-[28px] text-gray-500 dark:text-[#d5d5d5] font-normal">
            <?php 
                echo esc_html($before_year) . ' ' . $current_year; 
            ?>
            
            <?php if (!empty($link_url)) : ?>
                <?php echo esc_html($pre_text); ?>
                <a href="<?php echo esc_url($link_url); ?>" class="underline hover:text-black dark:hover:text-white transition-colors">
                    <?php echo esc_html($link_text); ?>
                </a>
            <?php endif; ?>

            <?php 
                echo esc_html($post_text); 
            ?> 
        </span>

    </div>
</footer>

</div>
<?php wp_footer(); ?>
</body>
=======
<?php 
$theme_locations = get_nav_menu_locations();
$columns = get_field('acf_footer_column','option');
?>
<footer class="footer">
  <div class="container">
    <div class="footer__content">
      <?php if( 
                    !is_home() and 
                    !is_front_page()  and  
                    !is_singular('post') and 
                    !is_singular('product') and
                    !is_singular('list_technology') and
                    !is_singular('list_vacancy') and
                    !is_singular('personal') and
                    !is_paged()
                  ){ ?>
      <div class="breadcrumbs">
        <div class="breadcrumbs__inner">
          <?php 
                        the_breadcrumbs();
                    ?>
        </div>
      </div>
      <?php } else { ?>
      <?php if( !is_home() and !is_front_page() and !is_singular('post') and !is_paged() ){ ?>
      <div class="breadcrumbs">
        <div class="breadcrumbs__inner">
          <ul class="breadcrumbs__list" itemtype="http://schema.org/BreadcrumbList">
            <li class="breadcrumb__item" itemprop="itemListElement" itemtype="http://schema.org/ListItem">
              <a class="link link_gr h-link-seo" href="<?=HOME?>" itemprop="item">
                <span itemprop="name">Skyrora</span>
              </a>
              <svg width="1em" height="1em" class="icon icon-arrow-right">
                <use
                  xlink:href="/wp-content/themes/skyrora-theme/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right">
                </use>
              </svg>
              <meta itemprop="position" content="1">
            </li>
            <li>

              <?php if(is_singular('product') ){ ?>
              <a href="<?=HOME?>/products/">
                <span>Products</span>
              </a>
              <?php } ?>

              <?php if(is_singular('list_technology') ){ ?>
              <a href="<?=HOME?>/technology/">
                <span>Technology</span>
              </a>
              <?php } ?>

              <?php if(is_singular('list_vacancy') ){ ?>
              <a href="<?=HOME?>/career/">
                <span>SPACE CAREERS</span>
              </a>
              <?php } ?>

              <?php if(is_singular('personal') ){ ?>
              <a href="<?=HOME?>/who-we-are/">
                <span>About us</span>
              </a>
              <?php } ?>

              <svg width="1em" height="1em" class="icon icon-arrow-right">
                <use
                  xlink:href="/wp-content/themes/skyrora-theme/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right">
                </use>
              </svg>
            </li>

            <li class="breadcrumb__item">
              <span class="breadcrumbs__current"><?=get_the_title();?></span>
            </li>
          </ul>
        </div>
      </div>
      <?php } 
                    if( is_paged() ){ ?>
      <div class="breadcrumbs breadcrumbs--archive">
        <div class="breadcrumbs__inner">
          <ul class="breadcrumbs__list" itemtype="http://schema.org/BreadcrumbList">
            <li class="breadcrumb__item" itemprop="itemListElement" itemtype="http://schema.org/ListItem">
              <a class="link link_gr h-link-seo" href="<?=HOME?>" itemprop="item" aria-label="breadcrumbs">
                <span itemprop="name">Skyrora</span>
              </a>
              <svg width="1em" height="1em" class="icon icon-arrow-right">
                <use
                  xlink:href="/wp-content/themes/skyrora-theme/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right">
                </use>
              </svg>
              <meta itemprop="position" content="1">
            </li>
            <li>
              <a href="<?=HOME?>/blog" aria-label="breadcrumbs">
                <span>Media</span>
              </a>
              <svg width="1em" height="1em" class="icon icon-arrow-right">
                <use
                  xlink:href="/wp-content/themes/skyrora-theme/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right">
                </use>
              </svg>
            </li>

            <li class="breadcrumb__item">

              <?php if( is_tag() ){
                              $tag_id = get_queried_object()->term_id; ?>
              <a href="<?php echo esc_url( get_category_link( $tag_id ) );?>" aria-label="breadcrumbs">
                <?php } else { 
                              $category_id = get_queried_object()->term_id;  ?>
                <a href="<?php echo esc_url( get_category_link( $category_id ) );?> " aria-label="breadcrumbs">
                  <?php } ?>

                  <span><?=get_queried_object()->name;?></span>
                </a>
                <svg width="1em" height="1em" class="icon icon-arrow-right">
                  <use
                    xlink:href="/wp-content/themes/skyrora-theme/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrow-right">
                  </use>
                </svg>
            </li>

            <li class="breadcrumb__item">
              <span class="breadcrumbs__current">page-<?=get_query_var('paged');?></span>
            </li>
          </ul>
        </div>
      </div>
      <?php  } ?>
      <?php } ?>

      <div class="footer__content-main row">
        <?php 
              if( $columns ){
                foreach( $columns as $column ){ 
                  if( isset($column) && !empty($column) ){ ?>
        <div class="js-collapse col-lg-4 col-md-8 col-24">
          <?php if( isset($column['acf_footer_menu_list'][0]) ){ ?>
          <button type="button" class="footer__content-collapseMobileBtn js-collapse-btn" aria-label="footer collapse">
            <span>
              <?php 
                          echo $column['acf_footer_menu_list'][0]['acf_footer_page_name']; 
                        ?>
            </span>
            <svg width="1em" height="1em" class="icon icon-down ">
              <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-down"></use>
            </svg>
          </button>
          <?php } ?>

          <?php if( $column['acf_footer_menu_list'] ){ ?>
          <ul class="js-collapse-content">
            <?php foreach( $column['acf_footer_menu_list'] as $item ){ ?>
            <li>
              <?php if( !empty($item['acf_footer_page_url']) ){ ?>
              <a href="<?php echo esc_url($item['acf_footer_page_url']); ?>" aria-label="footer-nav">
                <?php echo esc_html($item['acf_footer_page_name']); ?>
              </a>
              <?php } else { ?>
              <span>
                <?php echo esc_html($item['acf_footer_page_name']); ?>
              </span>
              <?php } ?>
            </li>
            <?php } ?>
          </ul>
          <?php } ?>

        </div>
        <?php } }
              }?>

      </div>
      <div class="footer__content-bottom">
        <span>
          <?php the_field('acf_footer_copyright' , 'option'); ?>
        </span>
        <div class="content-media">
          <?php 
                
                if( have_rows('acf_footer_social','option') ){
                  while( have_rows('acf_footer_social','option') ) { the_row(); 
                  $icon = get_sub_field('acf_footer_social_icon', 'option'); ?>

          <a href="<?php echo get_sub_field('acf_footer_social_link', 'option'); ?>" aria-label="social">
            <svg width="1em" height="1em" class="icon icon-<?php echo $icon; ?>">
              <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-<?php echo $icon; ?>">
              </use>
            </svg>
          </a>

          <?php } } ?>

        </div>
      </div>
    </div>
  </div>
</footer>
</div>
<div class="l-modals">

  <div id="popup-book" class="popup-layout js-popup-content">
    <div class="popup-wrap">
      <div class="popup-inner">
        <div class="popup-top">
          <div class="container">
            <div class="popup-top__row">
              <a href="<?=HOME?>" class="popup-top__logo" aria-label="logo">
                <svg width="1em" height="1em" class="icon icon-logo ">
                  <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-logo"></use>
                </svg>
              </a>
              <button type="button" class="popup-top__close js-popup-close" aria-label="close">
                <svg width="1em" height="1em" class="icon icon-close ">
                  <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-close"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <?php echo do_shortcode('[skyrora_contact_form id="4962"]')?>
      </div>
    </div>
  </div>
  <div id="popup-indicate" class="popup-layout js-popup-content">
    <div class="popup-wrap">
      <div class="popup-inner">
        <div class="popup-top">
          <div class="container">
            <div class="popup-top__row">
              <a href="<?=HOME?>" class="popup-top__logo">
                <svg width="1em" height="1em" class="icon icon-logo ">
                  <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-logo"></use>
                </svg>
              </a>
              <button type="button" class="popup-top__close js-popup-close">
                <svg width="1em" height="1em" class="icon icon-close ">
                  <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-close"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <?php echo do_shortcode('[skyrora_contact_form id="4961"]')?>
      </div>
    </div>
  </div>

  <div id="popup-mail" class="popup-layout js-popup-content">
    <div class="popup-wrap">
      <div class="popup-inner">
        <div class="popup-top">
          <div class="container">
            <div class="popup-top__row">
              <a href="<?=HOME?>" class="popup-top__logo" aria-label="logo">
                <svg width="1em" height="1em" class="icon icon-logo ">
                  <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-logo"></use>
                </svg>
              </a>
              <button type="button" class="popup-top__close js-popup-close" aria-label="close">
                <svg width="1em" height="1em" class="icon icon-close ">
                  <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-close"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <?php echo do_shortcode('[skyrora_contact_form id="4960"]')?>
      </div>
    </div>
  </div>

  <div id="popup-subscribe" class="popup-layout js-popup-content">
    <div class="popup-wrap">
      <div class="popup-inner">
        <div class="popup-top">
          <div class="container">
            <div class="popup-top__row">
              <a href="<?=HOME?>" class="popup-top__logo" aria-label="logo">
                <svg width="1em" height="1em" class="icon icon-logo ">
                  <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-logo"></use>
                </svg>
              </a>
              <button type="button" class="popup-top__close js-popup-close" aria-label="close">
                <svg width="1em" height="1em" class="icon icon-close ">
                  <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-close"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <?php echo do_shortcode('[skyrora_contact_form id="4959"]')?>
      </div>
    </div>
  </div>

</div>

<?php wp_footer(); ?>

</body>

>>>>>>> dev
</html>