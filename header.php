<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<<<<<<< HEAD
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
/**
 * ACF GLOBAL SETTINGS
 */

$logo_group    = get_field('header_logo', 'option');
$buttons_group = get_field('header_buttons', 'option');

$logo_text   = $logo_group['header_logo_txt'] ?? '';
$logo_img_id = $logo_group['header_logo_img'] ?? '';

$buttons = $buttons_group['header_buttons'] ?? [];

/**
 * MENU
 */

$nav_menu   = get_nav_menu_locations();
$menu_items = [];

$current_user = wp_get_current_user();

if (isset($nav_menu['header_menu'])) {
    $menu_id    = $nav_menu['header_menu'];
    $menu_items = wp_get_nav_menu_items($menu_id);
}
?>

<div class="l-wrapper">

<header class="header-default fixed top-0 left-0 z-[100] w-full px-5 xl:px-10 h-[80px] flex items-center bg-white text-black dark:bg-black dark:text-white">

    <div class="container flex items-center justify-between">

        <!-- LOGO -->
        <?php if ($logo_text || $logo_img_id) : ?>

            <a
                href="<?= esc_url(home_url('/')); ?>"
                class="flex items-center flex-shrink-0 no-underline text-black dark:text-white transition-opacity"
            >

                <?php if ($logo_img_id) : ?>

                    <?= wp_get_attachment_image(
                        $logo_img_id,
                        'full',
                        false,
                        [
                            'alt'   => esc_attr($logo_text),
                            'class' => 'w-full max-w-[130px] h-10 object-contain'
                        ]
                    ); ?>

                <?php elseif ($logo_text) : ?>

                    <span class="text-xl font-semibold tracking-tight">
                        <?= esc_html($logo_text); ?>
                    </span>

                <?php endif; ?>

            </a>

        <?php endif; ?>


        <!-- NAVIGATION -->
        <?php if (!empty($menu_items)) : ?>

            <nav class="navigation hidden flex-1 justify-center lg:flex">
                <ul class="flex space-x-3">

                    <?php foreach ($menu_items as $item) :

                        $icon_svg  = get_inline_svg_from_acf($item->ID, 'acf_navigation_icon');
                        $bg_light = get_field('acf_navigation_light_theme_bg', $item->ID);
                        $bg_hover = get_field('acf_navigation_light_theme_bg_hover', $item->ID);
                        $is_active = in_array('current-menu-item', $item->classes, true);

                    ?>

                        <li class="list-none">

                            <a
                                href="<?php echo esc_url($item->url); ?>"
                                class="group flex items-center gap-2 rounded-full px-4 py-1.5 text-black transition-all
                                    bg-[var(--bg-color)] hover:bg-[var(--bg-hover)]
                                    dark:bg-transparent
                                    dark:border dark:border-white/40
                                    dark:text-white
                                    dark:hover:bg-white dark:hover:text-black
                                    <?php echo $is_active ? 'bg-white text-black dark:bg-white dark:text-black' : ''; ?>"
                                
                                style="
                                    --bg-color: <?php echo esc_attr($bg_light); ?>;
                                    --bg-hover: <?php echo esc_attr($bg_hover); ?>;
                                "
                            >

                                <?php if (!empty($icon_svg)) : ?>
                                    <span class="menu-icon">
                                        <?php echo $icon_svg; ?>
                                    </span>
                                <?php endif; ?>

                                <span class="menu-text">
                                    <?php echo esc_html($item->title); ?>
                                </span>

                            </a>

                        </li>

                    <?php endforeach; ?>

                </ul>
            </nav>

        <?php endif; ?>


        <!-- RIGHT SIDE -->
        <div class="flex items-center gap-4 md:gap-6 text-sm flex-shrink-0">

            <!-- HEADER BUTTONS -->
            <?php if (!empty($buttons)) : ?>

                <div class="hidden lg:flex items-center gap-6">

                    <?php foreach ($buttons as $index => $button) :

                        $button_text = $button['header_button_text'] ?? '';
                        $button_url  = $button['header_button_url'] ?? '';
                        $show_auth_modal = $button['acf_show_auth_modal'] ?? '';

                    ?>

                        <?php if ($show_auth_modal === '1') : ?>

                            <?php if (is_user_logged_in()) : ?>

                                <a class="w-8 h-8 overflow-hidden rounded-full border border-white/10 shadow-sm" href="/profile">
                                    <?php echo get_avatar($current_user->ID, 32, '', $current_user->display_name, array('class' => 'object-cover')); ?>
                                </a>

                                <a
                                    href="<?php echo esc_url(wp_logout_url(home_url())); ?>"
                                    class="transition-colors hover:text-blue-400"
                                >
                                    Logout
                                </a>

                            <?php else : ?>

                                <button
                                    type="button"
                                    id="openSignInBtn"
                                    class="transition-colors hover:text-blue-400"
                                >
                                    <?php echo esc_html($button_text); ?>
                                </button>

                            <?php endif; ?>

                        <?php else : ?>

                            <a
                                href="<?php echo esc_url($button_url ?: '#'); ?>"
                                class="transition-colors hover:text-blue-400"
                            >
                                <?php echo esc_html($button_text); ?>
                            </a>

                        <?php endif; ?>

                    <?php endforeach; ?>

                </div>

            <?php endif; ?>

            <!-- THEME TOGGLE -->
            <label
                for="theme-toggle"
                class="inline-flex items-center group relative cursor-pointer"
            >

                <input
                    type="checkbox"
                    id="theme-toggle"
                    class="sr-only peer"
                >

                <div class="w-16 h-9 bg-slate-200 rounded-full transition-all duration-500 peer-checked:bg-slate-800 group-hover:bg-slate-300"></div>

                <div class="absolute left-1 top-1 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-500 peer-checked:translate-x-7 peer-active:scale-95">

                    <!-- SUN -->
                    <svg
                        class="w-4 h-4 text-amber-500 transition-all duration-500 peer-checked:opacity-0 peer-checked:rotate-90 peer-checked:scale-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>

                    <!-- MOON -->
                    <svg
                        class="absolute w-4 h-4 text-indigo-600 transition-all duration-500 opacity-0 -rotate-90 scale-0 peer-checked:opacity-100 peer-checked:rotate-0 peer-checked:scale-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                    </svg>

                </div>

            </label>


            <!-- BURGER -->
            <button
                id="openBurgerBtn"
                class="w-[24px] h-[24px] lg:hidden hover:text-blue-400 transition-colors"
            >

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-full h-full"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

            </button>
        </div>
    </div>
</header>
=======
  <head>
    <?php if( is_paged() ){ ?>
      <meta name="robots" content="index, follow" />
    <?php }  ?>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <?php if( is_paged() ){ ?>

      <title>
        <?php echo single_cat_title("", false); ?> - News and Updates | SKYRORA | Page <?php echo get_query_var('paged'); ?>
      </title>
      <link rel="canonical" href="<?php echo esc_url(get_category_link( get_queried_object()->term_id ));?>">

      <?php
      add_filter( 'aioseo_disable', 'aioseo_disable_term_output' );

      function aioseo_disable_term_output( $disabled ) {
        if ( is_category() || is_tag() || is_tax() ) {
            return true;
        }
        return false;
      }

       ?>

    <?php } else { ?>

      <title>
        <?php wp_title("", true); ?>
      </title>

    <?php } ?>

    <link rel="shortcut icon" sizes="16x16" href="<?=THEME?>/dist/s/images/favicon/Favicon.svg"/>
    <link rel="shortcut icon" sizes="32x32" href="<?=THEME?>/dist/s/images/favicon/Favicon.svg"/>
    <link rel="apple-touch-icon" sizes="120x120" href="<?=THEME?>/dist/s/images/favicon/Favicon.svg"/>
    <link rel="apple-touch-icon" sizes="152x152" href="<?=THEME?>/dist/s/images/favicon/Favicon.svg"/>
    <link rel="apple-touch-icon" sizes="167x167" href="<?=THEME?>/dist/s/images/favicon/Favicon.svg"/>
    <link rel="apple-touch-icon" sizes="180x180" href="<?=THEME?>/dist/s/images/favicon/Favicon.svg"/>
    <link rel="icon" sizes="192x192" href="<?=THEME?>/dist/s/images/favicon/Favicon.svg"/>

    <meta name="google-site-verification" content="w8A_Bbzq1KRoAcKZmMxw308qY7HN94L2K02g5rwVV8c"/>


    <?php wp_head(); ?>

</head>
  <body <?php body_class(); ?>>

  <script type="text/javascript">
    function loadGoogleAnalytics() {
        // Your Google Analytics tracking code
        var gaCode = 'UA-147259689-1'; 

        // Create a script element
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaCode;

        // Append the script to the document
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        // Define the function to initialize Google Analytics after the script is loaded
        script.onload = function() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', gaCode);
        };
    }

    // delay 
    setTimeout(loadGoogleAnalytics, 3000);
</script>

  <div class="l-wrapper">

  <?php if( is_page_template('template-pages/media-page.php') ){

    echo '<header class="header--white header--media header js-header">';

  } elseif( is_archive() ){

    echo '<header class="header--white header--media header js-header">';

  } elseif( is_singular('post') ){

    echo '<header class="header--white header js-header">';

  } elseif( is_singular('list_technology') ){

    echo '<header class="header--blue  header js-header">';

    
  } elseif( is_singular('list_vacancy') ){

    echo '<header class="header--filled  header js-header">';

    
  } elseif( is_singular('personal') ){

    echo '<header class="header--filled  header js-header">';


  } else {

    echo '<header class="header js-header header--' . get_field('acf_header_style') . '">';

  } ?>
      

    <div class="header--decor-opacity" style="filter: opacity(0%);"></div>
      
          <div class="container">
          <div class="header__content">
            <a href="<?=HOME?>" class="header__content-logo" aria-label="logo">
              <?php the_field('acf_header_logo', 'option'); ?>
              <svg width="1em" height="1em" class="icon icon-logo ">
                <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-logo"></use>
              </svg>
            </a>
            <button type="button" aria-label="burger" class="header__content-burger js-menu-open"></button>
            <nav class="header__content-nav js-menu-content">
              <?php 
              //wp_nav_menu( array('theme_location' => 'header-menu') );
              $nav = get_field('acf_header_nav','option');

              if($nav ){ ?>
                <ul class="c-header-menu__list h-reset-list">
                  <?php foreach( $nav as $item ) { ?>
                    <li class="c-header__menu-item">
                      <a href="<?php echo esc_url($item['acf_header_page_url']); ?>" class="c-header-menu__link" aria-label="nav-item">
                        <?php echo esc_html($item['acf_header_page_name']); ?>
                      </a>
                    </li>
                  <?php } ?>
                </ul>
                <?php 
              }
              ?>
            </nav>
          </div>
          <?php if( is_page('blog') or is_archive() ) { ?>
            <div class="header__media-submenu">
              <div class="header__media-submenu-inner">
                <div class="media-menu js-tags js-category">
                  <div class="media-menu__categories">
                    <button type="button" class="media-menu__categories-btn js-category-open">
                      <svg width="1em" height="1em" class="icon icon-categories ">
                        <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-categories"></use>
                      </svg><span>Category</span>
                    </button>
                    <div class="media-menu__categories-content">
                      <ul>
                      <?php if( is_page('blog') ) { ?>

                            <li>
                              <a href="<?=HOME?>/blog" class="active">ALL news</a>
                            </li>

                        <?php } else { ?>

                            <li>
                              <a href="<?=HOME?>/blog" aria-label="nav-item">ALL news</a>
                            </li>

                        <?php } ?>

                        <?php $news_categories = get_field('acf_cat_navigation_menu','option'); 
                            
                            foreach( $news_categories as $cat_item ){ ?>

                                <?php if( $cat_item->slug == get_queried_object()->slug ) { ?>

                                    <li>
                                      <a href="<?php echo esc_url( get_term_link($cat_item) ); ?>" aria-label="nav-item" class="active">
                                        <?php echo $cat_item->name; ?>
                                      </a>
                                    </li>

                                <?php } else { ?>

                                      <li>
                                        <a href="<?php echo esc_url( get_term_link($cat_item) ); ?>" aria-label="nav-item">
                                            <?php echo $cat_item->name; ?>
                                        </a>
                                      </li>

                                <?php } ?>
                            <?php }  ?>
                            <?php $page_navigate = get_field('acf_pages_navigation_menu','option'); 
                            foreach( $page_navigate as $page_item ){ ?>
                                <?php if( $page_item->post_name == get_queried_object()->post_name ) { ?>
                                <li>
                                    <a href="<?php echo esc_url( $page_item->guid ); ?>" class="active" aria-label="nav-item">
                                        <?php echo $page_item->post_title; ?>
                                    </a>
                                </li>
                                <?php } else { ?>
                                <li>
                                    <a href="<?php echo esc_url( $page_item->guid ); ?>" aria-label="nav-item">
                                        <?php echo $page_item->post_title; ?>
                                    </a>
                                </li>
                                <?php } ?>
                            <?php }  ?>
                        
                      </ul>
                    </div>
                    <button type="button" class="media-menu__tags-btn js-tags-open" aria-label="all tags"><span>All tags</span>
                      <svg width="1em" height="1em" class="icon icon-arrDown ">
                        <use xlink:href="<?=THEME?>/dist/s/images/useful/svg/theme/symbol-defs.svg#icon-arrDown"></use>
                      </svg>
                    </button>
                  </div>
                  <div class="media-menu__tags">
                    <div class="media-menu__tags-content js-tags-content">
                      
                      <ul>
                        <?php $news_tags = get_field('acf_tag_navigation_menu','option'); 
                         
                              foreach( $news_tags as $tag_item ){ ?>

                              <li>
                                  <a href="<?=HOME?>/blog/tag/<?php echo $tag_item->slug; ?>" aria-label="nav-item">
                                      #<?php echo $tag_item->name; ?>
                                  </a>
                              </li>

                              <?php } ?>
                      </ul>
                    </div>
                  </div>
                  <div class="media-menu__content-category-mobile js-category-content"></div>
                </div>
              </div>
            </div>
          <?php } ?>
        </div>
       
      </header>
>>>>>>> dev
