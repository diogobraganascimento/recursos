$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/remove solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('.solid');
            $('.back-to-top').removeClass('visible');
        }
    });
});

$(document).ready(function () {
    // Add smoth scrolling to all links
    $("a").on('click', function (event) {
        if (this.hash != "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});