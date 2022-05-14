// set up variables for things I'm gonna need
let form = document.querySelector('form');
let commentsWrapper = document.querySelector('.comments__wrapper');


// creating array of objects for comments
let commentArray = [
    {
        img: "",
        name: "Connor Walton", 
        timestamp: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        img: "",
        name: "Emilie Beach", 
        timestamp: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        img: "",
        name: "Miles Acosta", 
        timestamp: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

// here I'm defining the funtion for displaying a comment
// start at the beginning of the commentArray, loop through as long as there are comments

let displayComment = () => {
    for (let i = 0; i < commentArray.length; i++) {
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
    commenterName.innerText = commentArray[i].name;
    commentContentTop.appendChild(commenterName);

// making the date stamp
    let date = document.createElement("p");
    date.classList.add("comment__date");
    date.innerText = commentArray[i].timestamp;
    commentContentTop.appendChild(date);


// make the comment text
    let commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerText = commentArray[i].text;
    commentContent.appendChild(commentText);
    }
}

// here I'm calling the function so they show up in the first place, then the event listener below will deal with new ones from form
displayComment();


// making event listener for submit that pulls values from the form
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let newCommentName = ev.target.name.value
    let newCommentText = ev.target.comment.value
    let newCommentDate = "12/12/12"
    let newCommentObject = {
        img: "",
        name: newCommentName,
        text: newCommentText, 
        timestamp: newCommentDate  
    }
    // this push of the new comment object has to be inside the event listener, so it gets added to the array on submit
    commentArray.push(newCommentObject);
    // this null thing resets them each time so they don't duplicate on every submission
    commentsWrapper.innerHTML = null;
    // then you call display comment within the event listener so your new comments get displayed
    displayComment();
    form.reset();
    });


