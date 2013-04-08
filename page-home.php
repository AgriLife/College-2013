<?php 
// Template Name: College Home Page

get_header(); ?>

	<section class="featured-content clearfix">

		<?php if ( function_exists( 'soliloquy_slider' ) ) soliloquy_slider( 'home-page-ss' ); ?>

		<div class="one-of-3 clearfix featured-stories-container">
			<h3>Click to Learn More</h3>
			<ul class="featured-stories">
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
					<a href="<?php echo site_url('/about/grand-challenges/') ?>" id="l3" class="challenge-link">
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
			</ul>
		</div>

	</section> 
		
	<div class="home-content">
		<section id="content" role="main">

				<div class="widget-container">
					<h3 class="widget-title social-directory">Social Headlines</h3>
					<div id="postano"><!-- <a href="<?php echo site_url('/social/') ?>">Connect with the College on Social Media</a>.--></div>
					<script type="text/javascript" src="http://www.postano.com/php/embed.2.php?id=54296&width=694&height=500"></script>
				</div> <!-- .widget-container -->

				<?php if (!dynamic_sidebar('Home Page Bottom')) : ?>	
				
				<?php endif; ?>


		</section><!-- /end #content -->

		<section id="aside" role="main">
			<?php if ( ! dynamic_sidebar( 'home_right_1' ) ) : ?>		
				
				
			<?php endif; ?>
		</section><!-- /end #content -->
	</div>


<?php get_footer(); ?>
