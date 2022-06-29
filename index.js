// STEP 1: Grab the HTML element
const movie = document.createElement("li")
const inputField = document.querySelector("input");
const movieTitle = document.createElement("span");

// STEP 2: Write out your function
function addMovie(event) {
    event.preventDefault()
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    document.querySelector("ul").appendChild(movie)
    inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove();
}


// STEP 3: Combine STEP 1 and STEP 2 using addEventListener
document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);  