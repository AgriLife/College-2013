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

				<div id="postano" class="widget-container"><a href="<?php echo site_url('/social/') ?>">Connect with the College on Social Media</a>.</div>
				<!-- OLD <script type="text/javascript" src="http://www.postano.com/php/embed.2.php?id=54296&width=694&height=500&scrolling=no&border=no"></script>-->
				<script type="text/javascript" src="http://www.postano.com/php/embed.2.php?id=54296&width=694&height=500"></script>

				<div class="simpleTabs" class="widget-container">
			        <ul class="simpleTabsNavigation">
			            <li class="l1"><a href="#">Departments</a></li>
			            <li class="l2"><a href="#">Student Groups</a></li>
			            <li class="l3"><a href="#">Institutes &amp; Centers</a></li>
			        </ul>
			        <div class="simpleTabsContent">
			        	<?php echo do_shortcode( ' [smc_display org="Department"] ' ); ?>
						
			        </div>
			        <div class="simpleTabsContent"><?php echo do_shortcode( ' [smc_display org="Student Group"] ' ); ?></div>
			        <div class="simpleTabsContent"><?php echo do_shortcode( ' [smc_display org="Institute/Center"] ' ); ?>

<div class="social-accounts student-groups">
							<ul>
								<li>
									<h3 class="dept-name">Mathemetics</h3>
						<ul>
							<li class="social-media-item"><a class="facebook" href="http://today.agrilife.org/agrilife-facebook/">Facebook</a></li>
							<li class="social-media-item"><a class="googleplus" href="http://today.agrilife.org/agrilife-google-plus/">Google Plus</a></li>
							<li class="social-media-item"><a class="twitter" href="http://twitter.com/#!/agrilifetoday">Twitter</a></li>
							<li class="social-media-item"><a class="flickr" href="http://www.flickr.com/photos/agrilifetoday/">Flickr</a></li>
							<li class="social-media-item"><a class="youtube" href="http://www.youtube.com/user/agrilifetoday">YouTube</a></li>
							<li class="social-media-item"><a class="rss" href="http://feeds.feedburner.com/AgrilifeToday/">RSS</a></li>
						</ul>
									
								</li>
								<li>
									<h3 class="dept-name">Education</h3>
						<ul>
							<li class="social-media-item"><a class="facebook" href="http://today.agrilife.org/agrilife-facebook/">Facebook</a></li>
							<li class="social-media-item"><a class="googleplus" href="http://today.agrilife.org/agrilife-google-plus/">Google Plus</a></li>
							<li class="social-media-item"><a class="twitter" href="http://twitter.com/#!/agrilifetoday">Twitter</a></li>
							<li class="social-media-item"><a class="flickr" href="http://www.flickr.com/photos/agrilifetoday/">Flickr</a></li>
							<li class="social-media-item"><a class="youtube" href="http://www.youtube.com/user/agrilifetoday">YouTube</a></li>
							<li class="social-media-item"><a class="rss" href="http://feeds.feedburner.com/AgrilifeToday/">RSS</a></li>
						</ul>
									
								</li>
								<li>
									<h3 class="dept-name">Engineering</h3>
						<ul>
							<li class="social-media-item"><a class="facebook" href="http://today.agrilife.org/agrilife-facebook/">Facebook</a></li>
							<li class="social-media-item"><a class="googleplus" href="http://today.agrilife.org/agrilife-google-plus/">Google Plus</a></li>
							<li class="social-media-item"><a class="twitter" href="http://twitter.com/#!/agrilifetoday">Twitter</a></li>
							<li class="social-media-item"><a class="flickr" href="http://www.flickr.com/photos/agrilifetoday/">Flickr</a></li>
							<li class="social-media-item"><a class="youtube" href="http://www.youtube.com/user/agrilifetoday">YouTube</a></li>
							<li class="social-media-item"><a class="rss" href="http://feeds.feedburner.com/AgrilifeToday/">RSS</a></li>
						</ul>
									
									
								</li>
							</ul>
						</div>

			        </div>
			    </div>


				<?php if (!dynamic_sidebar('Home Page Bottom')) : ?>	
				
				<?php endif; ?>


		</section><!-- /end #content -->

		<section id="aside" role="main">
			<?php if ( ! dynamic_sidebar( 'home_right_1' ) ) : ?>		
				
				
			<?php endif; ?>
		</section><!-- /end #content -->
	</div>


<?php get_footer(); ?>
