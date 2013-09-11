<div class="programs">
	<h2 class="program-header">Our Programs</h2>

	<div class="program-list">
		<?php $i = 1; ?>
		<?php $programs = array_chunk( get_field( 'coals_program_units' ), 3 );
			foreach ( $programs as $chunk ) {
				echo '<div class="program-row">';
				echo agriflex_display_programs( $chunk );
				echo '</div><!-- .program-row -->';
			}
		?>
	</div>
</div>


<?php

function agriflex_display_programs( $chunk ) {

	foreach ( $chunk as $program ) : ?>

		<div class="single-program">
			<a href="<?php $program['program_page']; ?>">
				<?php	$image = $program['program_image']; ?>
				<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="program-image" />
				<h3 class="program-name">
					<?php echo $program['program_name']; ?>
				</h3>
			</a>
			<p class="program-desc">
				<?php echo $program['program_description']; ?>
			</p>
		</div>

	<?php endforeach;
	
}
