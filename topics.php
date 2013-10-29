<div class="topics">
	<h2 class="topic-header"><?php the_field( 'topics-header' ); ?></h2>

	<div class="topic-list">
		<?php $i = 1; ?>
		<?php $topics = array_chunk( get_field( 'page-topics' ), 3 );
			foreach ( $topics as $chunk ) {
				printf( '<div class="topic-row">%s</div><!-- .topic-row -->',
						agriflex_display_topics( $chunk )
				);
			}
		?>
	</div>
</div>


<?php

function agriflex_display_topics( $chunk ) {

	foreach ( $chunk as $topic ) : ?>

		<div class="single-topic">
			<a href="<?php echo $topic['topic-link']; ?>">
				<?php	$image = $topic['topic-image']; ?>
				<img src="<?php echo $image['sizes']['program-img']; ?>" alt="<?php echo $image['alt']; ?>" class="topic-image" />
				<h3 class="topic-name">
					<?php echo $topic['topic-name']; ?>
				</h3>
			</a>
			<p class="topic-desc">
				<?php echo $topic['topic-description']; ?>
			</p>
		</div>

	<?php endforeach;
	
}
