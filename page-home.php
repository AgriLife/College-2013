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

				<div id="postano"></div>
				<!-- OLD <script type="text/javascript" src="http://www.postano.com/php/embed.2.php?id=54296&width=694&height=500&scrolling=no&border=no"></script>-->
				<!-- <script type="text/javascript" src="http://www.postano.com/php/embed.2.php?id=54296&width=694&height=500"></script> -->

				<div class="simpleTabs" class="widget-container">
			        <ul class="simpleTabsNavigation">
			            <li class="l1"><a href="#">Tab 1</a></li>
			            <li class="l2"><a href="#">Tab 2</a></li>
			            <li class="l3"><a href="#">Tab3 (and so on)</a></li>
			        </ul>
			        <div class="simpleTabsContent">
						<div class="social-accounts student-groups">
							<ul>
								<li>
									<h3 class="dept-name">College of Agriculture and Life Sciences Student Council</h3>
									<ul>
										<li class="social-media-item"><a class="facebook" href="http://www.facebook.com/COALSCouncil">Facebook</a></li>
									</ul>
								</li>
								<li>
									<h3 class="dept-name">International Association of Agricultural Students &amp; Related Sciences</h3>
									<ul>
										<li class="social-media-item"><a class="facebook" href="http://www.facebook.com/IAAS.TAMU">Facebook</a></li>
										<li class="social-media-item"><a class="twitter" href="http://www.twitter.com/IAAS.TAMU">Twitter</a></li>
									</ul>
								</li>
								<li>
									<h3 class="dept-name">Yo Mamma</h3>
									<ul>
										<li class="social-media-item"><a class="facebook" href="http://today.agrilife.org/agrilife-facebook/">Facebook</a></li>
										<li class="social-media-item"><a class="google" href="http://today.agrilife.org/agrilife-google-plus/">Google Plus</a></li>
										<li class="social-media-item"><a class="twitter" href="http://twitter.com/#!/agrilifetoday">Twitter</a></li>
										<li class="social-media-item"><a class="flickr" href="http://www.flickr.com/photos/agrilifetoday/">Flickr</a></li>
										<li class="social-media-item"><a class="youtube" href="http://www.youtube.com/user/agrilifetoday">YouTube</a></li>
										<li class="social-media-item"><a class="rss" href="http://feeds.feedburner.com/AgrilifeToday/">RSS</a></li>
									</ul>
								</li>
							</ul>
						</div>
			        </div>
			        <div class="simpleTabsContent">Content here to be called when "Tab 2" is clicked.</div>
			        <div class="simpleTabsContent">Content here to be called when "Tab 3" is clicked.</div>
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
