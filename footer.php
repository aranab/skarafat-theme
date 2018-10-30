<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package skarafat
 */

?>

	<footer>
		<div class="container">
			<div class="copyright">
				Copyrights &copy; 2018 <b>skarafat</b> | All Rights Reserved
			</div><!-- copyright -->
			<div class="social">
				<?php
				wp_nav_menu(
					array(
						'theme_location'  => 'social-menu',
						'container'       => 'nav',
						'container_class' => 'social-nav',
						'walker'          => new Skarafat_Social_Walker_Nav(),
					)
				);
				?>
			</div><!-- social -->
			<a href="#home" class="btn-top"></a>
		</div><!-- container -->
	</footer><!-- footer -->

<?php wp_footer(); ?>

</body>
</html>
