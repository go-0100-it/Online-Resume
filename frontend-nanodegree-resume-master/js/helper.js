/*
These are the HTML strings used to create the detail section of the resume page. Must follow same schema as the contentData found in the resumeBuilder.js file.
*/
var HTMLprependHeader = {
    name: '<h1 id="name">%data%</h1>',
    role: '<span id="role" class="small-block">%data%</span><hr>'
};

var HTMLappendHeader = {
    contacts: {
        mobile: '<li class="flex-item"><span class="orange-text small-block">mobile</span><span class="white-text small-block">%data%</span></li>',
        email: '<li class="flex-item"><span class="orange-text small-block">email</span><span class="white-text small-block">%data%</span></li>',
        github: '<li class="flex-item"><span class="orange-text small-block">github</span><span class="white-text small-block">%data%</span></li>',
        location: '<li class="flex-item"><span class="orange-text small-block">location</span><span class="white-text small-block">%data%</span></li>',
    },
    biopic: '<img src="%data%" class="biopic">',
    welcomeMessage: '<span class="welcome-message">%data%</span>',
    skillsStart: '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>',
    skills: '<li class="flex-item"><span class="white-text">%data%</span></li>'
};

var HTMLwork = {
    jobs: [{
        workStart: '<div class="work-entry"></div>',
        splitLink: {
            employer: '<a href="#">%data%',
            title: ' - %data%</a>'
        },
        dummy: 'dummy',
        dates: '<div class="date-text">%data%</div>',
        location: '<div class="location-text">%data%</div>',
        description: '<p><br>%data%</p>'
    }]
};

var HTMLprojects = {
    projects: [{
        projectStart: '<div class="project-entry"></div>',
        splitLink: {
            title: '<a href="#">%data%</a>',
            dates: '<div class="date-text">%data%</div>'
        },
        dummy: 'dummy',
        description: '<p><br>%data%</p>',
        images: '<img class="img-200x100" src="%data%">'
    }]
};

var HTMLonlineClasses = '<h3 id="classes-h3">Online Classes</h3>';
var HTMLeducation = {
    schools: [{
        schoolsStart: '<div class="education-entry"></div>',
        splitLink: {
            name: '<a href="#">%data%',
            degree: ' -- %data%</a>'
        },
        dummy: 'dummy',
        dates: '<div class="date-text">%data%</div>',
        location: '<div class="location-text">%data%</div>',
        majors: '<em><br>Major: %data%</em>'
    }],
    onlineCourses: [{
        schoolsStart: '<div class="education-entry"></div>',
        splitLink: {
            title: '<a href="#">%data%',
            school: ' - %data%</a>'
        },
        dummy: 'dummy',
        dates: '<div class="date-text">%data%</div>',
        url: '<br><a href="#">%data%</a>'
    }]
};

var googleMap = '<div id="map"></div>';

/*
This code generates the custom Google Map for the website.
*/
var map; // declares a global map variable

/*
InitializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
