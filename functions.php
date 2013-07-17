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
	add_image_size( 'home-ss', 748, 494, true );  

	// Register the menus
	register_nav_menus( array(
		'primary' => __( 'Primary Navigation', 'agriflex' ),
		'secondary' => __( 'Audience Navigation (bottom bar)', 'agriflex' ),
    'third-general' => __( 'Tertiary General Navigation (bottom bar)', 'agriflex' )
	) );


	register_sidebar( array(
		'name' => 'Home right sidebar',
		'id' => 'home_right_1',
		'before_widget' => '<div id="%1$s" class="widget home-widget widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );

	register_sidebar( array(
		'name' => 'Featured Story Sidebar (top of sidebar)',
		'id' => 'sidebar_top_featured',
		'before_widget' => '<div id="%1$s" class="widget featured-story widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
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
  
  // drop fitvids
  wp_deregister_script( 'fitvids' );

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

// Add specific CSS class by filter
add_filter('body_class','add_swap_sidebar_body_class');
function add_swap_sidebar_body_class($classes) {
  // add 'content-sidebar' to the $classes array
  $classes[] = 'content-sidebar';
  // return the $classes array
  return $classes;
}

add_action( 'wp_head', 'agriflex_add_ie_styles', -10 );
/**
 * Add old IE styles early
 *
 * @author Travis Ward <travis@travisward.com>
 * @since College 2013
 * @return void
 */
function agriflex_add_ie_styles() {

  remove_action( 'wp_enqueue_scripts', 'agriflex_load_ie_styles' );

  $html =   "\n<!--[if lt IE 9]>\n";
  $html .=  ' <link rel="stylesheet" type="text/css" media="all" href="'.get_stylesheet_directory_uri().'/iefix.css" />'."\n";
  $html .=  "\n<![endif]-->\n";

  echo $html;

} // agriflex_add_ie_styles

add_action( 'wp_head', 'agriflex_add_ie_scripts', 10 );
/**
 * Add Respond.js and old IE scripts after other .js
 *
 * @author Travis Ward <travis@travisward.com>
 * @since College 2013
 * @return void
 */
function agriflex_add_ie_scripts() {

  $html =   "\n<!--[if lt IE 9]>\n";
  $html .=  ' <script src="'.get_stylesheet_directory_uri().'/js/oldie.js"></script>';
  $html .=  "\n<![endif]-->\n";
  $html .=   "\n<!--[if IE 8]>\n";
  $html .=  ' <script src="'.get_stylesheet_directory_uri().'/js/respond/respond.min.js"></script>';
  $html .=  "\n<![endif]-->\n";
    
  echo $html;

} // agriflex_add_ie_scripts


// Add Featured Story Sidebar to top of Sidebar
add_action( 'agriflex_before_sidebar', 'agriflex_college_featured_sidebar', 10 );
/**
 * Displays the 'Featured Story Sidebar (top of sidebar)' Widget area
 *
 * @since College 2013
 * @author Travis Ward <travis@travisward.com>
 */
function agriflex_college_featured_sidebar() {

  dynamic_sidebar( 'sidebar_top_featured' );

} // agriflex_college_featured_sidebar



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

// Add Floating Audience Menu
add_action( 'agriflex_college_after_primary_nav', 'agriflex_college_add_floating_menu', 100);
function agriflex_college_add_floating_menu() {

  $html = '<div class="utility-nav">';
  $html .= '<div class="wrap">';

  $nav_audience = wp_nav_menu( array(
    'container_class' => 'menu-nav-audience',
    'theme_location'  => 'secondary',
    'echo'            => false,
    'fallback_cb'   => false,
    'items_wrap'      => '<ul id="%1$s" class="nav-audience">%3$s</ul>',
  ));

  $nav_general = wp_nav_menu( array(
    'container_class' => 'menu-nav-general',
    'theme_location'  => 'third-general',
    'echo'            => false,
    'fallback_cb'   => false,
    'items_wrap'      => '<ul id="%1$s" class="nav-general">%3$s</ul>',
  ));

  $html .= $nav_audience.$nav_general;
  $html .= '</div>';
  $html .= '</div>';
  echo $html;
}

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

/*
// Consolidate Plugin Styles
function remove_plugin_styles() {
  wp_dequeue_style( 'ag_social_media' );
} // remove_agriflex_header
add_action('widgets_init','remove_plugin_styles', 20);
*/



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
		<li><a href="http://governor.state.tx.us/homeland/" target="_blank">Texas Homeland Security</a></li>
    <li><a href="http://veterans.portal.texas.gov/">Texas Veteran&apos;s Portal</a></li>
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


function remove_some_widgets(){
	// Remove unused AgriFlex Widget Areas
	unregister_sidebar( 'sidebar-widget-navigation' );
	unregister_sidebar( 'right-column-bottom-widget-area' );
}
add_action( 'widgets_init', 'remove_some_widgets', 20 );



/**
 * This Conditional Tag checks if the main Blog page is being displayed.
 * 
 * @link https://gist.github.com/wesbos/1189639
 */
function is_blog () {
	global  $post;
	$posttype = get_post_type($post );
	return ( ((is_archive()) || (is_author()) || (is_category()) || (is_home()) || (is_single()) || (is_tag())) && ( $posttype == 'post')  ) ? true : false ;
}

/**
 * Display navigation to next/previous pages/posts when applicable
 * Works on single entries and loops and main blog page
 * 
 * @since College 2013
 * @author Travis Ward <travis@travisward.com>
 * @global $wp_query
 * @global $post
 * @param string $nav_id Unique identifier to be used as ID
 */
function agriflex_content_nav( $nav_id ) {

  global $wp_query, $post;

  // Don't print the nav at the top.
  if( 'nav-above' == $nav_id )
  	return;

  // Don't print empty markup on single pages if there's nowhere to navigate
  if ( is_single() ) {
    $previous = ( is_attachment() ) ? get_post( $post->post_parent ) :
      get_adjacent_post( false, '', true );
    $next = get_adjacent_post( false, '', false );

    if ( ! $next && ! $previous )
      return;
  }

  // Dont' print empty markup in archives if there's only one page
  if ( $wp_query->max_num_pages < 2 && ( is_home() || is_archive() || is_search() ) )
    return;

  $nav_class = 'navigation paging-navigation';
  if ( is_single() )
    $nav_class = 'navigation post-navigation';
  ?>
  <nav role="navigation" id="<?php echo $nav_id; ?>" class="<?php echo $nav_class; ?>">
    <h1 class="assistive-text screen-reader-text"><?php _e ( 'Post navigation', 'agriflex' ); ?></h1>
    <?php if ( is_single() ) : // navigation links for single posts ?>

      <?php previous_post_link( '<div class="nav-previous">%link</div>',
        '<span class="meta-nav">' .
        _x( '&larr;', 'Previous post', 'agriflex' ) . 
        '</span> %title' ); ?>

      <?php next_post_link( '<div class="nav-next">%link</div>',
        '%title <span class="meta-nav">' .
        _x( '&rarr;', 'Newer posts', 'agriflex' ) . 
        '</span>' ); ?>

    <?php elseif ( $wp_query->max_num_pages > 1 && ( is_archive() || is_search() || is_blog() ) ) : ?>

      <?php if ( get_next_posts_link() ) : ?>
        <div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older news', '_s' ) ); ?></div>
        <?php endif; ?>

        <?php if ( get_previous_posts_link() ) : ?>
        <div class="nav-next"><?php previous_posts_link( __( 'Newer news <span class="meta-nav">&rarr;</span>', '_s' ) ); ?></div>
        <?php endif; ?>

    <?php endif; ?>

  </nav><!-- #<?php echo $nav_id; ?> -->
<?php
}


/**
 * Register action hook: agriflex_college_after_primary_nav
 *
 * Located in nav-primary.php within the <nav> section
 *
 * @since College-2013 1.0
 */
function agriflex_college_after_primary_nav() {

  do_action( 'agriflex_college_after_primary_nav' );

}

/**
 * Retrieves all sample images from the backgrounds folder
 * @since 1.0
 * @return array Array of image files
 * 
 */
function college_get_background_images() {

  $image_path = dirname( __FILE__ ) . '/images/backgrounds/samples/';
  $image_uri = get_stylesheet_directory_uri() . '/images/backgrounds/samples/';

  $images = glob( $image_path . '*.jpg' );

  $return = array();

  foreach ($images as $image) {
    $image = basename( $image );
    $return[$image] = $image_uri . $image;
  }

  return $return;

}

add_filter( 'agriflex_add_options', 'college_add_options', 1 );
/**
 * Adds a background selector to the theme options
 * @since 1.0
 * @param  array $options The existing theme options array
 * @return array          The amended theme options array
 */
function college_add_options( $options ) {

  $images = college_get_background_images();

  $options[] = array(
    'name' => __( 'College', 'agriflex' ),
    'type' => 'heading',
  );

  $options[] = array(
    'name' => 'Background Image',
    'desc' => 'Select a background image',
    'id' => 'college-background-image',
    'std' => 'algae-lab.jpg',
    'type' => 'images',
    'options' => $images,
  );

  return $options;

}

add_action( 'wp_footer', 'college_background_image', 50 );
/**
 * Sets the background-image css rule based on the theme option
 * @since 1.0
 */
function college_background_image() {

  $image_path = get_stylesheet_directory_uri() . '/images/backgrounds/' . of_get_option('college-background-image');

  $script = '<script type="text/javascript">';
  $script .= '$(document).ready( function() {';
  $script .= '$("#bg-image-container").css("background-image", "url(' . $image_path . ')");';
  $script .= '});';
  $script .= '</script>';

  echo $script;

}

?>