$(document).ready(function() {

    // Scrolls to form
    $("html, body").animate({
        scrollTop: $("#formStart").offset().top - 20
    }, 1500);

    $("#progress-bar-div").affix({
        offset: {
            top: $("#stickyAnchor").offset().top
        }
    });

});
