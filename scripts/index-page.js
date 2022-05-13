// set up variables for things I'm gonna need
const form = document.querySelector('form');
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
        text: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    },
    {
        img: "",
        name: " ",
        timestamp: 123,
        text: " ",
    }
];

// should the parameter here be the submission event? or a comment?
// should this all be inside the event listener?
let displayComment = (ev) => {
    for (let i = 0; i < commentArray.length; i++) {
    // making the div that holds a single comment
    let singleCommentContainer = document.createElement("div");
    singleCommentContainer.classList.add("comment__container");
    commentsWrapper.appendChild(singleCommentContainer);

// making the empty image circle for each comment
    let noImage = document.createElement("img");
    noImage.classList.add("comment__image--none");
    singleCommentContainer.appendChild(noImage);

// making the name of the commenter
    let commenterName = document.createElement("p");
    commenterName.classList.add("commenter__name");
    commenterName.innerText = ev.target.name.value;
    singleCommentContainer.appendChild(commenterName);

// making the date stamp
    let date = document.createElement("p");
    date.classList.add("comment__date");
    // date.innerText = ???????;
    singleCommentContainer.appendChild(date);


// make the comment text
    let commentText = document.createElement("p");
    commentText.classList.add("comment__text");
    commentText.innerText = ev.target.comment.value;
    singleCommentContainer.appendChild(commentText);
    }
}

// look at third line of all these ^ where I'm trying to target the name or text or date from each object within the array
// should it be like that or try to do event.target.name.value for when the new comments are posted?

// when I call the function here should I be passing in the form submission?
displayComment();


// making event listener for submit
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    displayComment ();
    });




// from pavel's pod demo
    // const handlePostComment = (event) => {
    //     event.preventDefault();
    
    //     // create the comment name
    //     const commentName = document.createElement('h3');
    //     commentName.innerText = event.target.name.value;
        
    //     // create the comment text
    //     const commentText = document.createElement('p');
    //     commentText.innerText = event.target.textarea.value;
    
    //     // create wrapper for comment
    //     const commentWrapper = document.createElement('div');
        
    //     // append text and name of the comment to the wrapper
    //     commentWrapper.appendChild(commentName);
    //     commentWrapper.appendChild(commentText);
        
    //     // add comment to comment wrapper
    //     commentContainer.prepend(commentWrapper);
    
    //     name.value = "";
    //     comment.value = "";
    
    // }



// from lauren's form demo
    // form.addEventListener('submit', (e) => {
    //     // console.log(e);
    //     const name = e.target.name.value;
    //     const comment = e.target.email.value;
    //     const password = e.target.password.value;
    //     const confirmPassword = e.target.confirmPassword.value;
    //     e.preventDefault();
    //     if (confirmPassword.value === password.value) {
    //         alert("Please make sure passwords match");
    //         return;
    //     }
    //     });