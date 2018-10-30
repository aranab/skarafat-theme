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
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<header class="site-header">
		<div class="container">
			<div class="site-branding">
				<h2><a href="/"><?php bloginfo( 'name' ); ?></a></h2>
			</div><!-- site-branding -->
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
			<nav class="header-addon">
				<ul>
					<li><a href="javascript:void(0);" class="btn-mobile"></a></li>
				</ul>
			</nav><!-- header-addon -->
			<div id="mb-menu" class="mb-nav-container">
				<a href="javascript:void(0);" class="btn-close"></a>
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
			</div><!-- mb-nav-container -->
		</div><!-- container -->
	</header><!-- site-header -->
