/*
    texts
    animations
    attach links ---------done
    host   ----------------------done
    title 
    favicon
    alt text and name



*/


$(document).ready(function () {
    // Function to check if element is in view
    function isElementInView(elem) {
        var $elem = $(elem);
        if (!$elem) {
            return
        }
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop+100 >= docViewTop));
    }


    $(window).on('scroll', function () {
        if (isElementInView('#experience-container')) {
            $("#experience-container").css({
                gap: 0,
            })
            console.log('Element is in view!');
        }
        else if (isElementInView(".feature-list")) {
            $(".feature-list ").css({
                opacity: 1
            })
        }
        else if (isElementInView("#what-we-do-container")) {
            $("#what-we-do-container").css({
                gap: 0
            })
        }
        else if (isElementInView("#who-we-are-container")) {
            $("#who-we-are-container").css({
                gap: 0
            })
        }
        else if (isElementInView(".old-man-woman")) {
            $(".old-man-woman").css({
                left: 0
            })
        }
        else {
            console.log("not in view")
        }
    });
});

