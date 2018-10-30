<?php
/**
 * Skarafat Theme Customizer
 *
 * @package skarafat
 */

/**
 * Add postMessage support for site title for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function skarafat_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-branding a',
				'render_callback' => 'skarafat_customize_partial_blogname',
			)
		);
	}
}
add_action( 'customize_register', 'skarafat_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function skarafat_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function skarafat_customize_preview_js() {
	wp_enqueue_script( 'skarafat-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'skarafat_customize_preview_js' );
