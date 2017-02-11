// This code displays the arrow animation after a set duration after user has scrolled.
// The following code requires jQuery to function correctly.
var obj = document.getElementById("svg");

// A timeout has not been set as the user has not yet scrolled so setting timeOutApplied to false.
obj.timeOutApplied = false;

/*
 * A funtion to show or hide the SVG animation element if the scroll event has been triggered.
 */
var hideShowSVG = function() {

    // If the setTimeOut function has not already been called, calling the setTimeOut function to display the svg element after the time value passed in has passed.
    if ($(window).scrollTop() + $(window).height() < $(document).height() - 600 && !obj.timeOutApplied) {
        obj.style.display = "none";

        // Setting timeOutApplied to true as the code below is calling setTimeOut.
        obj.timeOutApplied = true;

        // Calling the setTimeOut function
        setTimeout(function() {
            obj.style.display = "block";
            obj.timeOutApplied = false;
        }, 1500);

        // If the setTimeOut function has already been called, setting the display to "none to hide the animation."
    } else {
        obj.style.display = "none";
    }
};

//  Calling the hideShowSVG function at a scroll event.
window.addEventListener("scroll", hideShowSVG);
