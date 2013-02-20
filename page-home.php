<?php 
// Template Name: College Home Page

get_header(); ?>

	<section class="featured-content clearfix">

		<div class="one-of-3 clearfix featured-stories-container">
			<h3>Click to Learn More</h3>
			<ul class="featured-stories">
				<li class="challenge-hign challenge">
						
					<a href="<?php echo site_url('/grand-challenges/extension-home/') ?>" id="l1" class="challenge-link">
						<h2 id="challenge-high1">High-Impact</h2>
						<h2 id="challenge-high2">Learning</h2>
					</a>
						<!-- <h2 id="challenge-high1"><a href="<?php echo site_url('/grand-challenges/extension-home/') ?>" id="l1" class="challenge-link">
							High-Impact
						</a></h2>
						<h2 id="challenge-high2"><a href="<?php echo site_url('/grand-challenges/extension-home/') ?>" id="l1" class="challenge-link">
							Learning
						</a></h2>
							-->	
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

		<?php if ( function_exists( 'soliloquy_slider' ) ) soliloquy_slider( 'home-page-ss' ); ?>

	</section> 
		
	<div class="home-content">
		<section id="content" role="main">

				<?php if (!dynamic_sidebar('Home Page Bottom')) : ?>	
				
				
				<?php endif; ?>

				<h2>SM Dir</h2>


		</section><!-- /end #content -->

		<section id="aside" role="main">
			<?php if ( ! dynamic_sidebar( 'home_right_1' ) ) : ?>		
				
				
			<?php endif; ?>
		</section><!-- /end #content -->
	</div>


<?php get_footer(); ?>
