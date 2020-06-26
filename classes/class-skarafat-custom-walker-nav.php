<?php
/**
 * Nav Menu API: Skarafat_Custom_Walker_Nav class
 *
 * @package Skarafat
 * @subpackage Custom_Walker_Nav
 * @since 1.0.0
 */

/**
 * Custom class used to implement an HTML list of nav menu items.
 *
 * @since 1.0.0
 *
 * @see Walker_Nav_Menu
 */
class Skarafat_Custom_Walker_Nav extends Walker_Nav_Menu {
	/**
	 * Starts the element output.
	 *
	 * @since 1.0.0
	 *
	 * @see Walker_Nav_Menu::start_el()
	 *
	 * @param string   $output Used to append additional content (passed by reference).
	 * @param WP_Post  $item   Menu item data object.
	 * @param int      $depth  Depth of menu item. Used for padding.
	 * @param stdClass $args   An object of wp_nav_menu() arguments.
	 * @param int      $id     Current item ID.
	 */
	public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
		if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		$output .= '<li>';

		$atts         = array();
		$atts['href'] = ! empty( $item->url ) ? $item->url : '';

		$attributes = '';
		foreach ( $atts as $attr => $value ) {
			if ( ! empty( $value ) ) {
				$value       = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
				$attributes .= ' ' . $attr . '="' . $value . '"';
			}
		}

		$item_output  = $args->before;
		$item_output .= '<a' . $attributes . '>';
		$item_output .= $args->link_before . $item->title . $args->link_after;
		$item_output .= '</a>';
		$item_output .= $args->after;
		$output      .= $item_output;
	}
}
