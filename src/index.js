let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


fetch('http://localhost:3000/toys') //Fetches the Data
.then(resp => resp.json()) //Parse data recieved
.then(data => data.forEach(toy => renderToys(toy)))


function renderToys (toy){
  const card = document.createElement('div') //Creates the div
  const toyHeader = document.createElement('h2') //Creates the header
  const toyLikes = document.createElement('p') //creates paragraph tag for the likes
  const likeButton = document.createElement('button') //creates the button
  const toyImage = document.createElement('img') //creates the image tag
  const collection = document.getElementById("toy-collection") //Grabs the div "toy-collection"
  const name = toy.name //Grabs toy name from db
  const image = toy.image //Grabs toy image
  const likes = toy.likes //Grabs toy likes
  likeButton.id = toy.id
  card.className = "card" //turns the div class name to "card"
  toyImage.className = "toy-avatar" //turns the img tag class name to "toy-avatar"
  likeButton.className = "like-btn" //turns the button class name to "like-btn"

collection.appendChild(card)//appends card to the div toy-collection
card.appendChild(toyImage).src = image //grabs the image from the db.json and makes it the img tag source
card.appendChild(toyHeader).textContent = name //grabs the name from the db.json and makes it the h2 header
card.appendChild(toyLikes).textContent = likes //grabs the likes and makes it the p tag text content
card.appendChild(likeButton).textContent = "Like ❤️"
}



// function placeNewToy(newtoy) {
//   console.log(JSON.stringify(newtoy))
//   // fetch('http://localhost:3000/toys', {
//   //   method: 'POST',
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //      Accept: "application/json"
//   //   }

//   // })


// Add a New Toy
// When a user submits the toy form, two things should happen:

// A POST request should be sent to http://localhost:3000/toys and the new toy added to Andy's Toy Collection.
// If the post is successful, the toy should be added to the DOM without reloading the page.
// In order to send a POST request via fetch(), give the fetch() a second argument of an object. This object should specify the method as POST and also provide the appropriate headers and the JSON data for the request. The headers and body should look something like this:

// headers:
// {
//   "Content-Type": "application/json",
//   Accept: "application/json"
// }

// body: JSON.stringify({
//   "name": "Jessie",
//   "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
//   "likes": 0
// })

// fetch('http://localhost:3000/toys',{
//   method: "POST", // or 'PUT'
//   headers:
// {
//   "Content-Type": "application/json",
//   Accept: "application/json"
// },

// body: JSON.stringify({
//   "name": "Jessie",
//   "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
//   "likes": 0
// })});












// function renderToys (toy) {
// const card = document.createElement('div') //Creates the div
//   const toyHeader = document.createElement('h2') //Creates the header
//   const toyLikes = document.createElement('p') //creates paragraph tag for the likes
//   const likeButton = document.createElement('button') //creates the button
//   const toyImage = document.createElement('img') //creates the image tag
//   const collection = document.getElementById("toy-collection") //Grabs the div "toy-collection"
//   const name = toy.name //Grabs toy name from db
//   const image = toy.image //Grabs toy image
//   const likes = toy.likes //Grabs toy likes
//   likeButton.id = toy.id
//   card.className = "card" //turns the div class name to "card"
//   toyImage.className = "toy-avatar" //turns the img tag class name to "toy-avatar"
//   likeButton.className = "like-btn" //turns the button class name to "like-btn"

// collection.appendChild(card)//appends card to the div toy-collection
// card.appendChild(toyImage).src = image //grabs the image from the db.json and makes it the img tag source
// card.appendChild(toyHeader).textContent = name //grabs the name from the db.json and makes it the h2 header
// card.appendChild(toyLikes).textContent = likes //grabs the likes and makes it the p tag text content
// card.appendChild(likeButton).textContent = "Like ❤️"
// }


