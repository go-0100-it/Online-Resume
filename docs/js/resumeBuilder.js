// This code requires jQuery.js, velocity.js, scrollMagic.js and the following plug-ins to function correctly.
// Plug-ins required are animation.gsap.js, animation.velocity.js, debug.addIndicators.js and jquery.ScrollMagic.js
// Setting last sections height to be twice the size of the map section.
$("#scroll-spacer").height($("#mapDiv").height() * 2);
var myEl2height = $("#header").height();
var elMarg = ($(window).height() - myEl2height) / 6;
var myEl = $("#header-container");
myEl.height($(window).height());
myEl.css('margin-top', elMarg + 'px');

// A function to check if an Object's property value or an Array's element value is an Array.
var isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};

// A function to check if an Object's property value or an Array's element value is an Object.
var isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

// An Object literal defining biographical details of the person
var bio = {
    "name": "Dave Waters",
    "role": "Android and Web Application Developer",
    "contacts": {
        "mobile": "519-771-3043",
        "email": "dave.waters89@gmail.com",
        "github": "https://github.com/go-0100-it",
        "location": "Brantford, Ontario, Canada"
    },
    "welcomeMessage": "Welcome to my on-line resume!",
    "skills": ["HTML", "CSS", "JavaScript", "JSON", "Python", "Java", "XML"],
    "biopic": "images/bio_image.jpg",
    "display": function() {
        prependHTML(this, HTMLprependHeader, $("#header"));
        appendHTML(this, HTMLappendHeader, $("#header"));
    }
};

// An Object literal defining the person's education.
var education = {
    "schools": [{
        "name": "Mohawk College",
        "location": "Hamilton, Ontario CAN",
        "degree": "Industrial Maintenance Mechanic",
        "majors": ["strings"],
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }, {
        "name": "Mohawk College",
        "location": "Hamilton, Ontario CAN",
        "degree": "PLC Programming",
        "majors": ["strings"],
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }, {
        "name": "Granton Institute of Technology",
        "location": "Toronto, Ontario CAN",
        "degree": "Industrial Electricity and Electronics",
        "majors": ["strings"],
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }],
    "onlineCourses": [{
        "title": "Android Basics NanoDegree",
        "school": "Udacity",
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
    }, {
        "title": "JavaScript (Understanding the Wierd Parts)",
        "school": "Udemy - Anthony Alicea",
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udemy.com/understand-javascript/learn/v4/overview"
    }, {
        "title": "Intro to Programming NanaDegree",
        "school": "Udacity",
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Front-End Web Developer NanoDegree",
        "school": "Udacity",
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }, {
        "title": "JavaScript (Understanding the Wierd Parts)",
        "school": "Udemy - Anthony Alicea",
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udemy.com/understand-javascript/learn/v4/overview"
    }, {
        "title": "Intro to Programming NanaDegree",
        "school": "Udacity",
        "dates": "string", //(works with a hyphen between them)  
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Front-End Web Developer NanoDegree",
        "school": "Udacity",
        "dates": "string", //(works with a hyphen between them)  
        "url": "string"
    }],
    "display": function() {
        appendHTML(this, HTMLeducation, $("#education"));
    }
};

// An Object literal defining the person's work history
var work = {
    "jobs": [{
        "employer": "Toyota Motor Manufacturing Canada",
        "title": "Multi-skilled Team Leader",
        "location": "Cambridge, Ontario",
        "dates": "2008 - Present", //(Can be 'in progress')  
        "description": "string"
    }, {
        "employer": "Oakrun Bakery",
        "title": "Millwright",
        "location": "Ancaster, Ontario",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }, {
        "employer": "Wrigley Canada",
        "title": "Tab Wrapping Mechanic",
        "location": "Toronto, Ontario",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }, {
        "employer": "Patheon Pharmacutical",
        "title": "Packaging Group Leader",
        "location": "Burlington, Ontario",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }, {
        "employer": "Speciality Coatings Ltd.",
        "title": "Chemical Formulation Specialist",
        "location": "Brantford, Ontario",
        "dates": "string", //(Can be 'in progress')  
        "description": "string"
    }],
    "display": function() {
        appendHTML(this, HTMLwork, $("#workExperience"));
    }
};

// An Object literal defining the person's project history
var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "March 2016", //(works with a hyphen between them)  
        "description": "This was my favorite project.",
        "images": ["images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg"] // urls
    }, {
        "title": "string",
        "dates": "string", //(works with a hyphen between them)  
        "description": "string",
        "images": ["images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg", "images/placeholder.jpg"] // urls
    }],
    "display": function() {
        appendHTML(this, HTMLprojects, $("#projects"));
    }
};

/**
 * A function to loop over an objects properties and prepend the htmlStrings string after 
 * replacing the %data% portion of the string with the corresponding contentData string.
 * @param {object} contentData - an object containing the resume details formatted to follow a specific schema.
 * @param {object} htmlStrings - an object containing the html elements as string values, the schema of this object
 *                               is to match the contentData object schema. This allows reuse of this code with any data matching 
 *                               the given schema.
 * @param {object} pendElement - the element to prepend the newly created strings (html elements) to.
 */
function prependHTML(contentData, htmlStrings, pendElement) {

    // Creating an array of the objects keys.
    var keysArray = Object.keys(htmlStrings);

    // Looping over the created array.
    for (var i = keysArray.length; i > -1; i--) {

        var key = keysArray[i];

        // Checking if contentData has the same property as the htmlStrings Object.  If it
        // does replace the string "%data%" with the corresponding contentData.  If not 
        // simply prepend the String as it is.
        if (contentData.hasOwnProperty(key)) {
            pendElement.prepend(htmlStrings[key].replace("%data%", contentData[key]));
        } else {
            pendElement.prepend(htmlStrings[key]);
        }
    }
}

/**
 * A function to loop over an objects properties and append the htmlStrings string after 
 * replacing the %data% portion of the string with the corresponding contentData string.
 * @param {object} contentData - an object containing the resume details as string values formatted to follow a specific schema.
 * @param {object} htmlStrings - an object containing the html elements as string values, the schema of this object
 *                               is to match the contentData object schema. This allows reuse of this code with any data matching 
 *                               the given schema.
 * @param {object} pendElement - the element to append the newly created strings (html elements) to.
 */
function objLoop(contentData, htmlStrings, pendElement) {

    // Creating an array of the objects keys.
    var keysArray = Object.keys(htmlStrings);

    // Looping over the created array.
    for (var i = 0; i < keysArray.length; i++) {

        var key = keysArray[i];

        // Checking if the contentData object has a property with the same name as the current key.
        if (contentData.hasOwnProperty(key)) {

            // Checking if the property's value is an array, if it is then call the arrayLoop function to loop the array
            if (isArray(contentData[key])) {
                if (htmlStrings === HTMLeducation && i === 1) {
                    pendElement.append(HTMLonlineClasses);
                }
                arrayLoop(contentData[key], htmlStrings[key], htmlStrings === HTMLappendHeader ? $("#skills") : pendElement);

                // Checking if the property's value is an object, if it is then call the appendHTML function to loop the object.
            } else if (isObject(contentData[key])) {
                appendHTML(contentData[key], htmlStrings[key], htmlStrings === HTMLappendHeader ? $("#topContacts") : pendElement);

                // If the property's value is neither an array nor an object then modify the htmlStrings string and append it to the pendElement.
            } else {
                pendElement.append(htmlStrings[key].replace("%data%", contentData[key]));
            }

            // If the contentData object does not have a property with the same name as the current key.
        } else {

            // If the contentData passed in is the bio object
            if (contentData === bio) {
                pendElement.append(htmlStrings[key]);

                // If the contentData passed in is not the bio object then call the createBulkEntry function to loop the object.
            } else {
                createBulkEntry(contentData, htmlStrings, pendElement);
            }
        }
    }
}

/**
 * A function to loop over an objects properties and append the htmlStrings string after 
 * replacing the %data% portion of the string with the corresponding contentData string.
 * @param {object} contentData - an object containing the resume details formatted to follow a specific schema.
 * @param {object} htmlStrings - an object containing the html elements as string values, the schema of this object
 *                               is to match the contentData object schema. This allows reuse of this code with any data matching 
 *                               the given schema.
 * @param {object} pendElement - the element to append the newly created strings (html elements) to.
 */
function appendHTML(contentData, htmlStrings, pendElement) {

    // Creating an array of the objects keys.
    var keysArray = Object.keys(htmlStrings);

    // Looping over the created array.
    for (var i = 0; i < keysArray.length; i++) {

        var key = keysArray[i];

        // Checking if the contentData object has a property with the same name as the current key.
        if (contentData.hasOwnProperty(key)) {

            // Checking if the property's value is an array, if it is then call the arrayLoop function to loop the array
            if (isArray(contentData[key])) {
                if (htmlStrings === HTMLeducation && i === 1) {
                    pendElement.append(HTMLonlineClasses);
                }
                arrayLoop(contentData[key], htmlStrings[key], htmlStrings === HTMLappendHeader ? $("#skills") : pendElement);

                // Checking if the property's value is an object, if it is then call the appendHTML function to loop the object.
            } else if (isObject(contentData[key])) {
                appendHTML(contentData[key], htmlStrings[key], htmlStrings === HTMLappendHeader ? $("#topContacts") : pendElement);

                // If the property's value is neither an array nor an object then modify the htmlStrings string and append it to the pendElement.
            } else {
                pendElement.append(htmlStrings[key].replace("%data%", contentData[key]));
            }

            // If the contentData object does not have a property with the same name as the current key.
        } else {

            // If the contentData passed in is the bio object
            if (contentData === bio) {
                pendElement.append(htmlStrings[key]);

                // If the contentData passed in is not the bio object then call the createBulkEntry function to loop the object.
            } else {
                createBulkEntry(contentData, htmlStrings, pendElement);
            }
        }
    }
}

/**
 * A function to loop over an array's elements and append the htmlStrings string after 
 * replacing the %data% portion of the string with the corresponding contentData string.
 * @param {object} contentData - an object containing the resume details formatted to follow a specific schema.
 * @param {object} htmlStrings - an object containing the html elements as string values, the schema of this object
 *                               is to match the contentData object schema. This allows reuse of this code with any data matching 
 *                               the given schema.
 * @param {object} pendElement - the element to append the newly created strings (html elements) to.
 */
function arrayLoop(contentData, htmlStrings, pendElement) {

    // Looping over the array.
    for (var i = 0; i < contentData.length; i++) {

        // Checking if the element's value is an object, if it is then call the createBulkEntry function to loop the object.
        if (isObject(htmlStrings[i]) || isObject(contentData[i])) {
            createBulkEntry(contentData[i], htmlStrings[0], pendElement);

            // If the elements value is not an object then modify the htmlStrings string and append it to the pendElement.
        } else {
            pendElement.append(htmlStrings.replace("%data%", contentData[i]));
        }
    }
}

/**
 * A function to loop over an objects properties and push the htmlStrings string to an array after 
 * replacing the %data% portion of the string with the corresponding contentData string.
 * @param {object} contentData - an object containing the resume details formatted to follow a specific schema.
 * @param {object} htmlStrings - an object containing the html elements as string values, the schema of this object
 *                               is to match the contentData object schema. This allows reuse of this code with any data matching 
 *                               the given schema.
 * @param {object} pendElement - the element to append the newly created strings (html elements) to.
 * @return {string} returns a string representation of a html link element.
 */
function splitLinkLoop(contentData, htmlStrings, pendElement) {

    // Creating an array of the objects keys.
    var keysArray = Object.keys(htmlStrings);

    // Creating a blank array to push .
    var arr = [];

    // Looping over the created array.
    for (var i = 0; i < keysArray.length; i++) {

        var key = keysArray[i];

        // replace the %data% string with the corresponding contentData string and push the incomplete string portions of 
        // the html link element to an array.
        arr.push(htmlStrings[key].replace("%data%", contentData[key]));
    }

    // join the array elements to create a complete string representation of the html link element.
    return (arr.join(""));
}

/**
 * A function to loop over an objects properties and push the htmlStrings strings to an array after, if necessary,
 * replacing the %data% portion of the string with the corresponding contentData string.  Next joining the array
 * and then appending the resulting string representation of a html div element to the pendElement.
 * @param {object} contentData - an object containing the resume details formatted to follow a specific schema.
 * @param {object} htmlStrings - an object containing the html elements as string values, the schema of this object
 *                               is to match the contentData object schema. This allows reuse of this code with any data matching 
 *                               the given schema.
 * @param {object} pendElement - the element to append the newly created strings (html elements) to.
 */
function createBulkEntry(contentData, htmlStrings, pendElement) {

    // Creating an array of the objects keys.
    var keysArray = Object.keys(htmlStrings);
    var tempArray = [htmlStrings[keysArray[0]].replace("</div>", "")];

    // Looping over the created array.
    for (var i = 1; i < keysArray.length; i++) {

        var key = keysArray[i];

        // Checking if the property's value is an array, if it is then call the bulkArrayLoop function to loop the array
        // and push returned string to the tempArray.
        if (isArray(contentData[key])) {
            tempArray.push(bulkArrayLoop(contentData[key], htmlStrings[key]));

            // Checking if the property's value is an object, if it is then call the splitLinkLoop function to loop the objects keys
            // and push returned string to the tempArray.
        } else if (isObject(htmlStrings[key])) {
            tempArray.push(splitLinkLoop(contentData, htmlStrings[key], pendElement));
            i++;

            // If the property's value is neither an array nor an object then modify the htmlStrings string and push the resulting string to
            // the tempArray.
        } else {
            tempArray.push(htmlStrings[key].replace("%data%", contentData[key]));
        }
    }

    // push the string representation of the div closing tag.
    tempArray.push("</div");

    // join the array elements (string representations of html elements) and append the resulting string to the pendElement.
    pendElement.append(tempArray.join(""));
}

/**
 * A function to loop over an objects properties and push the htmlStrings string to an array after 
 * replacing the %data% portion of the string with the corresponding contentData string.
 * @param {object} contentData - an object containing the resume details formatted to follow a specific schema.
 * @param {object} htmlStrings - an object containing the html elements as string values, the schema of this object
 *                               is to match the contentData object schema. This allows reuse of this code with any data matching 
 *                               the given schema.
 * @return {string} returns a string representation of a html element.
 */
function bulkArrayLoop(contentData, htmlString) {

    var arr = [];

    // Looping object properties
    for (var i = 0; i < Object.keys(contentData).length; i++) {

        // Replacing the %data% string with the corresponding contentData string and pushing to the arr array.
        arr.push(htmlString.replace("%data%", contentData[i]));
    }

    // Joining the arr array and returning the resulting string.
    return (arr.join(""));
}

// Calling functions to display the resume Content.
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

// init ScrollMagic Controller
var controller = new ScrollMagic.Controller({
    refreshInterval: 0.1
});
var halfWindow;
var nHeight;
var rHeight;
var tCHeight;
var scene2Height;
var scene3Height;
var scene4Height;

// A function to set height variables
function setHeights() {
    halfWindow = $(window).height() / 2;
    nHeight = $("#name").height() - 40;
    rHeight = $("#role").height() - 29;
    tCHeight = $("#topContacts").height() - 19;
    scene2Height = $("#workExperience").height() * 2.5;
    scene3Height = $("#projects").height() * 1.5;
    scene4Height = $("#education").height() * 2;
}

setHeights();

// Defining a new tween animation for ScrollMagic controller
var blockTween1 = new TweenMax.to('#header', 1.2, {
    backgroundColor: "#484848"
});

// A new ScrollMagic scene for blockTween1 and adding to controller
var containerScene1 = new ScrollMagic.Scene({
        triggerElement: "#header",
        triggerHook: 0 // don't trigger until #pinned-trigger1 hits the top of the viewport
    })
    .setTween(blockTween1)
    .addTo(controller);

// Defining a new tween animation for ScrollMagic controller
var blockTween2 = new TweenMax.to('#header-container', 1.2, {
    backgroundColor: "#fff"
});

// A new ScrollMagic scene handler for blockTween2 and adding to controller
var containerScene2 = new ScrollMagic.Scene({
        triggerElement: "#header",
        triggerHook: 0 // don't trigger until #pinned-trigger1 hits the top of the viewport
    })
    .setTween(blockTween2)
    .addTo(controller);

// Scene Handler
var scene = new ScrollMagic.Scene({
        triggerElement: "#header", // point of execution
        duration: 0,
        triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    })
    .setPin("#header") // the element we want to pin
    .addTo(controller);

// Scene2 Handler
var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: $("#workExperience").height() * 1.5,
        offset: halfWindow - 115 - nHeight - rHeight
    })
    .setPin("#workExperience")
    .addTo(controller);

// Scene3 Handler
var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: $("#projects").height() * 0.5,
        offset: scene2Height + halfWindow - 100 - nHeight - rHeight
    })
    .setPin("#projects")
    .addTo(controller);

//Scene4 Handler
var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: $("#education").height() + 300,
        offset: scene2Height + scene3Height + halfWindow - 95 - nHeight - rHeight
    })
    .setPin("#education")
    .addTo(controller);

// Scene5 Handler
var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: 0,
        offset: scene2Height + scene3Height + scene4Height + halfWindow - 100 - nHeight - rHeight - tCHeight + 300 + 4
    })
    .setPin("#mapDiv")
    .addTo(controller);

// Scene6 Handler
var scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        duration: 0,
        offset: scene2Height + scene3Height + scene4Height + halfWindow - 100 - nHeight - rHeight - tCHeight + 300
    })
    .setPin("#lets-connect")
    .addTo(controller);

// Recalculating scene values when viewport is resized. Then resetting scenes.
$(window).resize(function() {
    setHeights();
    scene.removePin("#header");
    scene.setPin("#header");
    scene2.duration($("#workExperience").height() * 1.5).offset(halfWindow - 110 - nHeight - rHeight);
    scene3.duration($("#projects").height() * 0.5).offset(scene2Height + halfWindow - 100 - nHeight - rHeight);
    scene4.duration($("#education").height() + 300).offset(scene2Height + scene3Height + halfWindow - 100 - nHeight - rHeight);
    scene5.duration(0).offset(scene2Height + scene3Height + scene4Height + halfWindow - 130 - nHeight - rHeight - tCHeight + 300);
    scene6.duration(0).offset(scene2Height + scene3Height + scene4Height + halfWindow - 130 - nHeight - rHeight - tCHeight + 300);
});
