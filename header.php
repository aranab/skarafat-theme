<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package skarafat
 */

?>
<!doctype html>

<html <?php language_attributes(); ?>>

<head>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

	<a class="skip-link screen-reader-text" href="#site-content"><?php __( 'Skip to the content', 'skarafat' ); ?></a>

	<header id="site-header" class="site-header" role="banner">

		<div class="header-inner">

			<h1 class="site-title">

				<?php printf('<a href="%1$s">%2$s</a>', esc_url( get_home_url( null, '/' ) ), get_bloginfo( 'name' ) ); ?>

			</h1><!-- .site-title -->

			<div class="header-navigation-wrapper">

				<button class="btn-mobile"></button><!-- .btn-mobile -->

				<?php
				wp_nav_menu(
					array(
						'theme_location'  => 'top-menu',
						'container'       => 'nav',
						'container_class' => 'header-nav',
						'walker'          => new Skarafat_Custom_Walker_Nav(),
					)
				);
				?>
			</div><!-- .header-navigation-wrapper -->

		</div><!-- .header-inner -->

		<div id="mb-menu" class="mb-nav-container">

			<button class="btn-close"></button><!-- .btn-close -->

			<?php
			wp_nav_menu(
				array(
					'theme_location'  => 'mobile-top-menu',
					'container'       => 'nav',
					'container_class' => 'mobile-nav',
					'walker'          => new Skarafat_Custom_Walker_Nav(),
				)
			);
			?>

		</div><!-- .mb-nav-container -->

	</header><!-- #site-header -->
