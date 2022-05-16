// creating array of show info objects
let showsArray = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane", 
        location: "San Francisco, CA"
    },
    {
        date: "Tues Sept 21 2021",
        venue: "Pier 3 East", 
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge", 
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency", 
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center", 
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club", 
        location: "San Francisco, CA"
    },
];


// making js variable for body to attach shows section to
let main = document.querySelector('main');

// create section, call it shows, append it to body
let shows = document.createElement("section");
    shows.classList.add("shows");
    main.appendChild(shows);

// create h2, call it shows__title, append it to shows section
let showsTitle = document.createElement('h2');
    showsTitle.classList.add("shows__title");
    showsTitle.innerText="Shows";
    shows.appendChild(showsTitle);


// category subtitles for desktop and tablet shows table
let categoryWrapper = document.createElement('div');
    categoryWrapper.classList.add("shows__categories-wrapper")
    shows.appendChild(categoryWrapper);

let dateForTable = document.createElement('p');
    dateForTable.classList.add("shows__categories");
    dateForTable.innerText="Date";
    categoryWrapper.appendChild(dateForTable);
let venueForTable = document.createElement('p');
    venueForTable.classList.add("shows__categories");
    venueForTable.innerText="Venue";
    categoryWrapper.appendChild(venueForTable);
let locationForTable = document.createElement('p');
    locationForTable.classList.add("shows__categories");
    locationForTable.innerText="Location";
    categoryWrapper.appendChild(locationForTable);

// DEFINING THE LOOP - FOR EACH EVENT BOX
let displayShow = () => {
        for (let i = 0; i < showsArray.length; i++) {

// create div to hold a single event, append it to shows section
let showEvent = document.createElement("div");
    showEvent.classList.add("shows__event");
    shows.appendChild(showEvent);

// make a wrapper for details - includes a head line and a body line
let details = document.createElement("div");
    details.classList.add("details");
    showEvent.appendChild(details);

    // create p for detail__head and __body, append them to details
    let detailHeadDate = document.createElement("p");
        detailHeadDate.classList.add("details__head");
        detailHeadDate.innerText="Date";
        details.appendChild(detailHeadDate);
    let detailBodyDate = document.createElement("p");
        detailBodyDate.classList.add("details__body", "details__body--bold");
        detailBodyDate.innerText=showsArray[i].date;
        details.appendChild(detailBodyDate);
    
    let detailHeadVenue = document.createElement("p");
        detailHeadVenue.classList.add("details__head");
        detailHeadVenue.innerText="Venue";
        details.appendChild(detailHeadVenue);
    let detailBodyVenue = document.createElement("p");
        detailBodyVenue.classList.add("details__body");
        detailBodyVenue.innerText=showsArray[i].venue;
        details.appendChild(detailBodyVenue);
    
    let detailHeadLocation = document.createElement("p");
        detailHeadLocation.classList.add("details__head");
        detailHeadLocation.innerText="Location";
        details.appendChild(detailHeadLocation);
    let detailBodyLocation = document.createElement("p");
        detailBodyLocation.classList.add("details__body");
        detailBodyLocation.innerText=showsArray[i].location;
        details.appendChild(detailBodyLocation);

// create details__button, append it to event div
let detailsButton = document.createElement("button");
    detailsButton.classList.add("details__button");
    detailsButton.innerText="Buy Tickets";
    showEvent.appendChild(detailsButton);
}}


// INVOKE THE LOOP TO DISPLAY SHOW INFO ON PAGE
displayShow();


// adding click listener for active showEvent
let showEvent = document.querySelectorAll(".shows__event");
console.log (showEvent);

for (let i = 0; i < showEvent.length; i++) {
    showEvent[i].addEventListener ('click', (changeBackground) => {
        changeBackground.target.classList.add("shows__event--active");
        });

        for (let j = 0; j < showEvent.length; j++) {
            showEvent[j].addEventListener ('click', (changeBackground) => {
                showEvent[i].classList.remove("shows__event--active");
                changeBackground.target.classList.add("shows__event--active")
            });
        }
}