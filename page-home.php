<?php 
// Template Name: Home Page

get_header(); ?>


	<?php if ( get_field( 'show_slider' ) ) : ?>
		<section class="featured-content clearfix">

			<?php $slider_object = get_field( 'select_slider' ); $slider = $slider_object->post_name; ?>
			<?php if ( function_exists( 'soliloquy_slider' ) ) soliloquy_slider( $slider ); ?>

			<div class="one-of-3 clearfix featured-stories-container">
				<h3>College Priorities</h3>
				<ul class="featured-stories">
					<?php ob_start(); ?>
					<li class="challenge-hign challenge">						
						<a href="<?php echo site_url('/academics/high-impact-learning/') ?>" id="l1" class="challenge-link">
							<h2 id="challenge-high1">High-Impact</h2>
							<h2 id="challenge-high2">Learning</h2>
						</a>
					</li>				
					<li class="challenge-stem challenge">
						<a href="<?php echo site_url('/about/stem/') ?>" id="l2" class="challenge-link">
							<h2 id="challenge-stem1">Science &bull; Technology</h2>
							<h2 id="challenge-stem2">Engineering &bull; Math</h2>
						</a>		
					</li>				
					<li class="challenge-grand challenge">
						<a href="http://grandchallenges.tamu.edu/" id="l3" class="challenge-link">
							<h2 id="challenge-grand1">Grand</h2> 
							<h2 id="challenge-grand2">Challenges</h2>
						</a>		
					</li>				
					<li class="challenge-diversity challenge">
						<a href="<?php echo site_url('/about/diversity/') ?>" id="l4" class="challenge-link">
							<h2 id="challenge-diversity">Diversity</h2>
						</a>		
					</li>				
					<li class="challenge-accountability challenge">
						<a href="<?php echo site_url('/about/accountability/') ?>" id="l5" class="challenge-link">
							<h2 id="challenge-accountability">Accountability</h2>
						</a>		
					</li>
					<li class="challenge-international challenge">
						<a href="<?php echo site_url('/academics/international-programs/') ?>" id="l6" class="challenge-link">
							<h2 id="challenge-international1">International</h2>
							<h2 id="challenge-international2">Programs</h2>
						</a>		
					</li>		
					<?php $html = ob_get_contents(); ?>
					<?php ob_clean(); ?>
					<?php $html = apply_filters( 'agriflex_filter_home_links', $html ); ?>
					<?php echo $html; ?>
				</ul>
			</div>

		</section> 
	<?php endif; ?>
		
	<div class="home-content">
		<section id="content" role="main">

				<?php
				if ( get_field( 'welcome_text' ) ) {
					get_template_part( 'home', 'welcome' );
				}

				if ( get_field( 'coals_program_units' ) ) {
					get_template_part( 'home', 'programs' );
				}
				?>

				<div class="home-widgets">
					<div class="home-widget-left">
						<?php dynamic_sidebar( 'Home Page Bottom Left' ); ?>
					</div>

					<div class="home-widget-right">
						<?php dynamic_sidebar( 'Home Page Bottom Right' ); ?>
					</div>
				</div>

		</section><!-- /end #content -->

		<section id="aside" role="main">
			<?php if ( ! dynamic_sidebar( 'home_right_1' ) ) : ?>		
				
				
			<?php endif; ?>
		</section><!-- /end #content -->
	</div>


<?php get_footer(); ?>
