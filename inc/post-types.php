<?php

function theme_post_types() {

	/**
	 * Post Type: Products.
	 */

	$labels = [
		"name" => __( "Products", "custom-post-type-ui" ),
		"singular_name" => __( "Product", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Products", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( 'slug' => false, 'with_front' => false ),  
		"query_var" => true,
		"menu_icon" => HOME . "/wp-content/uploads/2021/05/products.svg",
		"supports" => [ "title", "editor", "thumbnail", "excerpt" ],
		"show_in_graphql" => false,
	];

	register_post_type( "product", $args );
}

add_action( 'init', 'theme_post_types' );