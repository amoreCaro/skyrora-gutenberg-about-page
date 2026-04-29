<!DOCTYPE html>
<html <?php language_attributes(); ?>>

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