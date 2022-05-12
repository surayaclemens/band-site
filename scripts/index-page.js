// set up variables for things I'm gonna need
// const form = document.querySelector('form');
// const postContainer = document.querySelector('.posts');
// const commenterName = document.querySelector('input');
// const comment = document.querySelector('textarea');

// creating array of objects for default comments
let comments = [
    {
        name: "Connor Walton", 
        timestamp: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach", 
        timestamp: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta", 
        timestamp: "12/20/2020",
        text: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    },
];

function displayComment(comment) {

// Loop through the array
    for (let i = 0; i < comments.length; i++) {
        // create a container for each comment
        let commentContainer = document.createElement("section");
        // We can add classes for styles that we've written in our CSS or SCSS files, or we can use the .style property along with any CSS property (for example: CommentContainer.style.backgroundColor = "red")
        commentContainer.classList.add("comment__container");
        // We then use appendChild to add a child element to a container element. Syntax: parentElement.appendChilid(childElement)
        posts.appendChild(commentContainer);
    
        // Create the element
        let commenterName = document.createElement("h3");
        // Add any classes or styles
        commenterName.classList.add("comment__name");
        // Append the element to a parent
        commentContainer.appendChild(commenterName);
    
        // Create the element
        let commentText = document.createElement("p");
        // Add any classes or styles
        commentText.classList.add("comment__text");
        // Append the element to a parent
        commentContainer.appendChild(commentText);

    }
}
  
// this is how it would be called...but needs an argument?
displayComment(comments[0]);

// add event listener to submit?
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
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