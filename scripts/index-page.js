// set up variables for things I'm gonna need
let form = document.querySelector('form');
let commentsWrapper = document.querySelector('.comments__wrapper');

let apiKey = "5d6f2ec7-e2a3-4c9d-87a5-128edda8a24a";

const commentsURL = 'https://project-1-api.herokuapp.com/comments?api_key=5d6f2ec7-e2a3-4c9d-87a5-128edda8a24a';

// put axios in a function for getting the comments from the API
// within the .then of what happens when you get the data, run the display comments function on comments(aka the results of the get)
// if the get isn't successful, catch it will an error in the console
function getComments() {
    axios.get(commentsURL)
        .then(result => {
            let comments = result.data;
            displayComment(comments);
            console.log(result.data);
        })
        .catch(error => {
            console.log(error);
        });
}

//function for displaying a comment in the browser, which will be passed an array of data to perform on
let displayComment = (dataArray) => {
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
    // formatting the date
        let commentTime = dataArray[i].timestamp;
        let commentDate = new Date(commentTime);
        let commentDay = commentDate.getDate ();
        let commentMonth = commentDate.getMonth ()+1;
        let commentYear = commentDate.getFullYear ();
        let formattedDate = commentMonth + "/" + commentDay + "/" + commentYear;
    date.innerText = formattedDate; 
    commentContentTop.appendChild(date);

// make the comment text
    let commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerText = dataArray[i].comment;
    commentContent.appendChild(commentText);
    }
}

// function for posting comments to API with axios post
function postComments(newCommentObject) {
    axios.post(commentsURL, newCommentObject)
            .then((result) => {
                form.reset();
                getComments();
            })
            .catch((error) => {
                console.log(error);
            });
    }

// invoking the function that displays the comments from the API
getComments();

// making event listener for submit that pulls values from the form
form.addEventListener('submit', (ev) => {
    ev.preventDefault();

// new comment object to be added to the array
    let newCommentObject = {
        name: ev.target.name.value,
        comment: ev.target.comment.value, 
    }

// 
    commentsWrapper.innerText = null;
    postComments(newCommentObject);

// these guys close off the event listener 
});
