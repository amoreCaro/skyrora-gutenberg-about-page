<?php

<<<<<<< HEAD
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define('_S_VERSION', '1.0.0');
define('PATH', get_template_directory());
define('PATH_URL', esc_url( get_template_directory_uri()));
define('THEME', 'blog-theme');
=======
if (!defined('ABSPATH')) exit;

define('THEME', preg_replace('/https?\:\/\/(.+?)\//', '/', get_bloginfo('template_directory')));
define('PATH', get_template_directory() );
define('SITE', preg_replace('/https?\:\/\/(.+?)\//', '/', get_home_url() ) );
define('HOME', preg_replace('/https?\:\/\/(.+?)\//', '/', get_home_url("home")  ) );
>>>>>>> dev

require PATH . '/inc/acf.php';
require PATH . '/inc/setup.php';
require PATH . '/inc/enqueues.php';
require PATH . '/inc/helpers.php';
<<<<<<< HEAD
require PATH . '/inc/ajax.php';
=======
require PATH . '/inc/blocks.php';
require PATH . '/inc/post-types.php';
>>>>>>> dev
