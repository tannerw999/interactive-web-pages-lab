// STEP 1: Grab the HTML element
const message = document.querySelector('#message')
// STEP 2: Write out your function
function addMovie(event) {
    const movie = document.createElement("li")
    const inputField = document.querySelector("input");
    const movieTitle = document.createElement("span");
    event.preventDefault()
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    movieTitle.addEventListener("click", crossOffMovie);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    document.querySelector("ul")
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);  
    const list = document.querySelector("ul");
    list.appendChild(movie);
    
    inputField.value = ''
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!"
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
          if (event.target.classList.contains('checked') === true) {
            message.textContent = 'Movie watched!'
        } else {
            message.textContent = 'Movie added back!'
        }
}


// STEP 3: Combine STEP 1 and STEP 2 using addEventListener
document.querySelector("form").addEventListener("submit", addMovie);

