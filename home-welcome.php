<div class="welcome">

	<?php if ( get_field( 'show_page_title' ) ) : ?>
		<h2 class="page-title"><?php echo the_title(); ?></h2>
	<?php endif; ?>

	<p class="welcome-text"><?php echo the_field( 'welcome_text' ); ?></p>
</div>
