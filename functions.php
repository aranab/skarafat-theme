<?php
/**
 * Skarafat functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package skarafat
 */

if ( ! function_exists( 'skarafat_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function skarafat_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on skarafat, use a find and replace
		 * to change 'skarafat' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'skarafat', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'top-menu' => esc_html__(
					'Primary',
					'skarafat'
				),
				'mobile-top-menu' => esc_html__(
					'Mobile',
					'skarafat'
				),
				'social-menu' => esc_html__(
					'Social',
					'skarafat'
				),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );
	}
endif;
add_action( 'after_setup_theme', 'skarafat_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function skarafat_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'skarafat_content_width', 640 );
}
add_action( 'after_setup_theme', 'skarafat_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function skarafat_scripts() {
	wp_enqueue_style( 'skarafat-style', get_stylesheet_uri(), '', '0.1' );

	wp_enqueue_script( 'skarafat-js', get_template_directory_uri() . '/js/bundle.min.js', array(), '0.1', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'skarafat_scripts' );

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom Walker Nav Menu.
 */
require get_template_directory() . '/inc/class-skarafat-custom-walker-nav.php';

/**
 * Social Walker Nav Menu.
 */
require get_template_directory() . '/inc/class-skarafat-social-walker-nav.php';
