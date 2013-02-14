<?php /**
 * College 2013 functions and definitions
 *
 * @package WordPress
 * @subpackage college-2013
 * @since college-2013 1.0
 */

// Remove Parent Theme's Setup
function remove_parent_theme_setup() {
	remove_action( 'after_setup_theme', 'agriflex_setup' );
}
add_action('after_setup_theme','remove_parent_theme_setup');


function agriflex_college_setup() {
	// Remove things that get stuck up in the doc head that we don't need
	remove_action( 'wp_head', 'wp_generator' );
	remove_action( 'wp_head', 'index_rel_link' );
	remove_action( 'wp_head', 'rsd_link' );
	remove_action( 'wp_head', 'feed_links_extra', 3 );
	remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); // prev link
	remove_action( 'wp_head', 'start_post_rel_link', 10, 0 ); // start link
	remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 );

	// Add support for post thumbnails
	add_theme_support( 'post-thumbnails' );

	// Add posts and comments RSS feed links to the head
	add_theme_support( 'automatic-feed-links' );

	// Add new image sizes
	add_image_size( 'featured', 965, 475, true );
	add_image_size( 'featured-2', 585, 305, true );
	add_image_size( 'featured-mediabox', 175, 124, true );    

	// Register the menus
	register_nav_menus( array(
		'primary' => __( 'Primary Navigation', 'agriflex' ),
		'secondary' => __( 'Secodary Navigation', 'agriflex' )
	) );

	// register Category_Widget widget
	add_action( 'widgets_init',
	create_function( '', 'register_widget( "category_widget" );' ) );
}
// Now add the new theme setup
add_action( 'after_setup_theme', 'agriflex_college_setup' );


// Load New .js for College
add_action(	'wp_enqueue_scripts', 'load_new_js' );    
function load_new_js() {

	if ( !is_admin() ) {
		wp_deregister_script( 'my_scripts' );

		// enqueue the custom jquery js
		wp_register_script( 'college_scripts',
		  get_stylesheet_directory_uri() . '/js/college_scripts-ck.js',
		  array('jquery'),
		  '1.0',
		  true);
		wp_enqueue_script( 'college_scripts' );
	}                
}



add_action( 'wp_head', 'agriflex_add_js_class', 100 );
/**
 * Replace no-js class with js
 *
 * @author Travis Ward <travis@travisward.com>
 * @since College 2013
 * @return void
 */
function agriflex_add_js_class() {

  	$html = 	'<script type="text/javascript">';
	$html .= 		"var doc = document.getElementById('doc');";
	$html .= 		"doc.removeAttribute('class', 'no-js');";
	$html .= 		"doc.setAttribute('class', 'js');";
	$html .= 	'</script>';
  	
  	echo $html;

} // agriflex_add_js_class

// Drop the old logo
function remove_agriflex_college_logo() {
	remove_action( 'agriflex_before_header', 'agriflex_college_logo');
}
add_action('init','remove_agriflex_college_logo');

// Add a new logo
add_action( 'agriflex_before_header', 'agriflex_college_logo_retina', 10 );
/**
 * Displays the college logo when selected.
 *
 * @since College 2013
 * @author Travis Ward <travis@travisward.com>
 */
function agriflex_college_logo_retina() {

  $html = '<li class="top-agency college-item">';
  //$html .= '<a href="http://aglifesciences.tamu.edu/" class="college-logo">';
  //$html .= '<span class="top-level-hide">';
  //$html .= 'Texas A&amp;M College of Agriculture and Life Sciences';
  //$html .= '</span>';

  $html .= '<h1 class="site-title"><a href="http://aglifesciences.tamu.edu/">Texas A&amp;M College of Agriculture and Life Sciences</a></h1>';

  //$html .= '<img src="' . get_stylesheet_directory_uri() . '/images/logo-w@2x.png" width="183" alt="Texas A&amp;M College of Agriculture and Life Sciences" />';
  $html .= '</a></h1>';
  $html .= '</li>';

  $html .= '<li class="explore right-align">';
  $html .= '<div class="menu-button" id="menu-button">Menu</div>';
  $html .= '</li>';

  echo $html;

} // agriflex_college_logo



// Remove Header Section from parent theme
// Remove 'Menu' Button from parent theme
// Remove 'Explore' Menu from parent theme
// Remove Typekit info from parent theme
function remove_agriflex_header() {
	remove_action( 'agriflex_header', 'agriflex_site_title', 30);
	remove_action( 'agriflex_after_header', 'agriflex_main_nav', 30 );
	remove_action( 'agriflex_header', 'agriflex_college_explore', 1 );
	remove_action( 'wp_head', 'typekit_js');
} // remove_agriflex_header
add_action('init','remove_agriflex_header');

/**
 * Includes the main navigation
 *
 * @since College 2013
 * @author Travis Ward <travis@travisward.com>
 */
function agriflex_main_nav_nomenu() {
	get_template_part( 'nav', 'primary' );
} // agriflex_main_nav_nomenu
add_action( 'agriflex_after_header', 'agriflex_main_nav_nomenu', 30 );




/**
 * Adds the Typekit goodies to the document head
 *
 * @since College 2013
 * @author Travis Ward <travis@travisward.com>
 */
function typekit_js_college() {

	$key = 'bbz1kzh';

  if( !is_admin() ) : ?>
    <script type="text/javascript" src="http://use.typekit.com/<?php echo $key ?>.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    <style type="text/css">
      .wf-loading #site-title,
      .wf-loading .entry-title {
      /* Hide the blog title and post titles while web fonts are loading */
      visibility: hidden;
      }
    </style>                        
  <?php
  endif;

} // typekit_js
add_action('wp_head','typekit_js_college');


// Add secondary (audience) navigation
add_action( 'agriflex_before_footer', 'agriflex_college_second_nav' );
/**
 * Displays the college logo when selected.
 *
 * @since College 2013
 * @author Travis Ward <travis@travisward.com>
 */
function agriflex_college_second_nav() {

  // Primary nav menu
	$nav_menu = wp_nav_menu( array(
              'container_class' => 'menu-secondary',
              'theme_location'  => 'secondary',
              'echo'            => false,
              'fallback_cb'		=> false,
              'items_wrap'      => '<ul id="%1$s" class="secondary-nav">%3$s</ul>',
            ));

	$html =  	$nav_menu;

	echo $html;

} // agriflex_college_second_nav





function remove_agriflex_footer() {
	remove_action( 'agriflex_footer', 'agriflex_show_footer' );
}
add_action('init','remove_agriflex_footer');



add_action( 'agriflex_footer', 'agriflex_college_footer' );
/**
 * Add the College footer
 *
 * @author Travis Ward <travis@travisward.com>
 * @since College 2013
 * @return void
 */
function agriflex_college_footer() {

   ob_start(); ?>

  	<ul class="req-links">
		<li><a href="http://agrilife.org/required-links/compact/">Compact with Texans</a></li>
		<li><a href="http://agrilife.org/required-links/privacy/">Privacy and Security</a></li>
		<li><a href="http://itaccessibility.tamu.edu/" target="_blank">Accessibility Policy</a></li>
		<li><a href="http://www2.dir.state.tx.us/pubs/Pages/weblink-privacy.aspx" target="_blank">State Link Policy</a></li>
		<li><a href="http://www.tsl.state.tx.us/trail" target="_blank">Statewide Search</a></li>
		<li><a href="http://www.tamus.edu/veterans/" target="_blank">Veterans Benefits</a></li>
		<li><a href="http://fcs.tamu.edu/families/military_families/" target="_blank">Military Families</a></li>
		<li><a href="https://secure.ethicspoint.com/domain/en/report_custom.asp?clientid=19681" target="_blank">Risk, Fraud &amp; Misconduct Hotline</a></li>
		<li><a href="http://www.texashomelandscurity.com/" target="_blank">Texas Homeland Security</a></li>
		<li><a href="http://aghr.tamu.edu/education-civil-rights.htm" target="_blank">Equal Opportunity for Educational Programs Statement</a></li>
		<li class="last"><a href="http://agrilife.org/required-links/orpi/">Open Records/Public Information</a></li>
	</ul>
	
	<?php
	
	$html = ob_get_clean();
    echo $html;

} // agriflex_about_footer



/**
 * Prints HTML with meta information for the current post—date/time and author.
 *
 * @author Travis Ward <travis@travisward.com>
 * @since College 2013
 */
function agriflex__college_posted_on() {
     printf( __( '<time class="entry-date" datetime="%1$s"><div class="college-day">%2$s</div><div class="college-month">%3$s</div></time>', 'agriflex' ),
          esc_attr( get_the_date( 'c' ) ),
          esc_html( get_the_date( 'j' ) ),
          esc_html( get_the_date( 'M' ) )
     );
}


/**
 * Prints HTML with meta information for the current post—date/time and author.
 *
 * @author Travis Ward <travis@travisward.com>
 * @since College 2013
 */
function agriflex_college_post_thumbnail( $size = 'featured-mediabox' ) {

  global $post;

  if ( has_post_thumbnail( $post->ID ) ) {
  	// Show the post thumbnail
  	$html = '<a class="feature-img-excerpt" href="' . get_permalink( $post->ID ) . '">';
    $html .= get_the_post_thumbnail( $post->ID, $size ); 
    $html .= '</a>';
    
	  echo $html;
  } 
  

} // agriflex_post_thumbnail


?>