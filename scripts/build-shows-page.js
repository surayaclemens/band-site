let showsArray = []

const showsURL = 'https://project-1-api.herokuapp.com/showdates?api_key=5d6f2ec7-e2a3-4c9d-87a5-128edda8a24a';
axios.get(showsURL)
        .then(result => {
        let showsArray = result.data;
        // console.log(showsArray);

// // making js variable for body to attach shows section to
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
        // formatting the date
            let unixTime = showsArray[i].date;
            let eventDate = (parseInt(unixTime));
            // console.log(eventDate);
            // console.log(typeof eventDate);
            let formattedDate = new Date(eventDate).toDateString();
            detailBodyDate.innerText=formattedDate;
            details.appendChild(detailBodyDate);

    let detailHeadVenue = document.createElement("p");
        detailHeadVenue.classList.add("details__head");
        detailHeadVenue.innerText="Venue";
        details.appendChild(detailHeadVenue);

    let detailBodyVenue = document.createElement("p");
        detailBodyVenue.classList.add("details__body");
        detailBodyVenue.innerText=showsArray[i].place;
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

})
.catch(error => {
    alert("Looks like an error");
});


// trying unsuccessfully to add click event listener to show event
const clickedShow = document.querySelectorAll(".shows__event");
console.log(clickedShow);
clickedShow[i].addEventListener("click", changeBackground);
function changeBackground() {
    clickedShow[i].classList.add("shows__event--active");
}
