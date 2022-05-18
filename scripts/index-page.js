// set up variables for things I'm gonna need
let form = document.querySelector('form');
let commentsWrapper = document.querySelector('.comments__wrapper');

let apiKey = "5d6f2ec7-e2a3-4c9d-87a5-128edda8a24a";

const commentsURL = 'https://project-1-api.herokuapp.com/comments?api_key=5d6f2ec7-e2a3-4c9d-87a5-128edda8a24a';
axios.get(commentsURL)
 .then(result => {
    let dataArray = result.data;


//function for displaying a comment
let displayComment = () => {
    for (let i = 0; i < dataArray.length; i++) {
// making the div that holds a single comment
    let singleCommentContainer = document.createElement("div");
    singleCommentContainer.classList.add("comment__container");
    commentsWrapper.appendChild(singleCommentContainer);

// making the empty image circle for each comment
    let noImage = document.createElement("img");
    noImage.classList.add("comment__image--none");
    singleCommentContainer.appendChild(noImage);

// making the div for comment content (to separate from img)
    let commentContent = document.createElement("div");
    commentContent.classList.add("comment__content");
    singleCommentContainer.appendChild(commentContent);

// making the div for top content (to style name & date away from text)
    let commentContentTop = document.createElement("div");
    commentContentTop.classList.add("comment__content-top");
    commentContent.appendChild(commentContentTop);

// making the name of the commenter
    let commenterName = document.createElement("p");
    commenterName.classList.add("commenter__name");
    commenterName.innerText = dataArray[i].name;
    commentContentTop.appendChild(commenterName);

// making the date stamp
    let date = document.createElement("p");
    date.classList.add("comment__date");   
    // date.innerText = dataArray[i].timestamp; 
    let unixTimestamp = dataArray[i].timestamp;

    // write a function that will convert the unix stamp from axios into normal format date
    function dateConverter(unixTimestamp) {
        let commentDate = new Date(unixTimestamp * 1000);
        let commentDay = commentDate.getDate ();
        let commentMonth = commentDate.getMonth ();
        let commentYear = commentDate.getFullYear ();
        let formattedDate = commentMonth + "/" + commentDay + "/" + commentYear;
        return formattedDate;
    }
    
    // call function to do the date formatting
    dateConverter(unixTimestamp);
    // append the result of the function
    commentContentTop.appendChild(formattedDate);


// make the comment text
    let commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerText = dataArray[i].comment;
    commentContent.appendChild(commentText);
    }
}
displayComment();



// making event listener for submit that pulls values from the form
form.addEventListener('submit', (ev) => {
// prevent default refresh on page with submission
    ev.preventDefault();
    let newCommentName = ev.target.name.value
    let newCommentText = ev.target.comment.value
// setting up the date function, then creating each part of the date, then putting them into a string to look right
    let newCommentDate = new Date ();
    let day = newCommentDate.getDate ();
    let month = newCommentDate.getMonth ();
    let year = newCommentDate.getFullYear ();
    let currentTimestamp = month + "/" + day + "/" + year;
// creating the new comment object to be added to the array
    let newCommentObject = {
        img: "",
        name: newCommentName,
        comment: newCommentText, 
        timestamp: currentTimestamp 
    }
// this unshift of the new comment object has to be inside the event listener, so it gets added to the array on submit, has to be unshift so it appears at beginning of array
    dataArray.unshift(newCommentObject);
// this null thing resets them each time so they don't duplicate on every submission
    commentsWrapper.innerHTML = null;
// then call display comment within the event listener so new comments get displayed
    displayComment();
    form.reset();
    });

})
.catch(error => {
    alert("Looks like an error");
});
