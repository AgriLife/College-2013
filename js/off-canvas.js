/*
*	This handles the body classes for off-canvas actions
*/

$('#menu-button').on('click', function() {
    $('body').toggleClass('active-sidebar');

    $('body.active-sidebar #content-wrap').on('click', function() {
        $('body').removeClass('active-sidebar');
        $('body.active-sidebar #content-wrap').off('click');
    });
    return false;
});

/*
*	This causes iOS Chrome, and Facebook in-app, Twitter in-app to close sidebar when clicking in search box
$(window).resize(function() {
    $('body').removeClass('active-sidebar');
    return false;
});
*/
