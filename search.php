<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package WordPress
 * @subpackage agrilifeorg
 * @since agrilifeorg 1.0
 */

get_header(); ?>

<div id="wrap">
	<div class="content">
		<?php $gets = $_GET['s']; ?>
		<iframe id="google-search" name="GoogleSearch" scrolling="no" frameborder="0" width="563px" height="1100px" src="http://search.tamu.edu/search?q=<?php if($gets) {echo $gets;} ?>&site=aglifesciences_collection&proxystylesheet=ag_frontend"></iframe>
	</div>
</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
