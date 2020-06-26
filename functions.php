<?php
/**
 * Skarafat functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package skarafat
 */

/**
 * Theme version.
 */
define( 'SKARAFAT_VERSION', '1.0.0' );

/**
 * Theme name.
 */
define( 'SKARAFAT_THEME_NAME', 'skarafat' );

if ( ! function_exists( 'skarafat_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function skarafat_setup() {

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Custom background color.
		add_theme_support(
			'custom-background',
			array(
				'default-color' => 'f5efe0',
			)
		);

		// Set content-width.
		global $content_width;
		if ( ! isset( $content_width ) ) {
			$content_width = 1333;
		}

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

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

		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on skarafat, use a find and replace
		 * to change 'skarafat' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'skarafat', get_template_directory() . '/languages' );

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );
	}
endif;

add_action( 'after_setup_theme', 'skarafat_setup' );

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom Walker Nav Menu.
 */
require get_template_directory() . '/classes/class-skarafat-custom-walker-nav.php';

/**
 * Social Walker Nav Menu.
 */
require get_template_directory() . '/classes/class-skarafat-social-walker-nav.php';

/**
 * Register and Enqueue Styles.
 */
function skarafat_register_styles() {

	wp_enqueue_style( 'skarafat-style', get_stylesheet_uri(), array(), SKARAFAT_VERSION );

}

add_action( 'wp_enqueue_scripts', 'skarafat_register_styles' );

/**
 * Register and Enqueue Scripts.
 */
function skarafat_register_scripts() {

	// automatically load dependencies and version
	$asset_file = include get_template_directory() . '/assets/js/bundle.min.asset.php';

	wp_enqueue_script(
		'skarafat-js',
		get_template_directory_uri() . '/assets/js/bundle.min.js',
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
	// wp_script_add_data( 'skarafat-js', 'async', true );
}

add_action( 'wp_enqueue_scripts', 'skarafat_register_scripts' );

/**
 * Register navigation menus uses wp_nav_menu in five places.
 */
function skarafat_menus() {

	$locations = array(
		'primary' => __( 'Desktop Horizontal Menu', 'skarafat' ),
		'mobile'  => __( 'Mobile Menu', 'skarafat' ),
		'social'  => __( 'Social Menu', 'skarafat' ),
	);

	register_nav_menus( $locations );
}

add_action( 'init', 'skarafat_menus' );

/**
 * Registers custom blocks assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function skarafat_register_block() {

	// automatically load dependencies and version
	$asset_file = include get_template_directory() . '/assets/js/blocks.min.asset.php';

	wp_register_script(
		'skarafat-block-script',
		get_template_directory_uri() . '/assets/js/blocks.min.js',
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_register_style(
		'skarafat-block-editor-style',
		get_template_directory_uri() . '/assets/css/editor-style-block.css',
		array( 'wp-edit-blocks' ),
		$asset_file['version']
	);

	register_block_type(
		'skarafat/theme-blocks',
		array(
			'style'         => 'skarafat-style',
			'editor_style'  => 'skarafat-block-editor-style',
			'editor_script' => 'skarafat-block-script',
		)
	);

	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
		 * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
		 * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'skarafat-block-script', 'skarafat', get_template_directory() . '/languages' );
	}

}

add_action( 'enqueue_block_editor_assets', 'skarafat_register_block', 1, 1 );
