// let movies = JSON.parse(localStorage.getItem("movies"));
// let highlights = JSON.parse(localStorage.getItem("highlights"));
// let wishlists = JSON.parse(localStorage.getItem("wishlists"));
import { movies } from "./data.js";

let position = location.search.split("?v=")[1];

document.querySelector("#title").innerText = movies[position].movieName;
document.querySelector("#description").innerText = movies[position].description;
document.querySelector("#published").innerText = movies[position].published;
document.querySelector("#iframe").src = movies[position].movieVideo;
