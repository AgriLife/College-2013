<!-- <form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
    <div><label class="screen-reader-text" for="s">Search for:</label>
        <input type="text" value="Search" name="s" id="s" onfocus="if (this.value == 'Search') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Search';}" />
        <input type="submit" id="searchsubmit" value="Search" />
    </div>
</form>
-->
<form method="get" class="searchform" action="<?php echo home_url( '/' ); ?>" >
     <input type="text" value="" name="s" class="s" onfocus="" onblur="" />
     <input type="submit" class="searchsubmit" value="Go" />
</form>