// import { users } from "./register.js";
// import { movies } from "./table.js";
const users = JSON.parse(localStorage.getItem("users")) || null;
const movies = JSON.parse(localStorage.getItem("movies")) || null;

let searchInput = document.querySelector("#search");
let listContainer = document.querySelector("#list");

const search = (event) => {
  event.preventDefault();

  if (searchInput.value) {
    let results = [];
    for (let index = 0; index < movies.length; index++) {
      results = movies.filter((result) => {
        return result.movieName
          .toLowerCase()
          .includes(searchInput.value.toLowerCase());
      });
    }

    let list = "<ul>";
    for (let i = 0; i < results.length; i++) {
      list +=
        "<li class='list-group-item'><b><a class='text-decoration-none text-light text-break' href='./pages/error404.html'>" +
        results[i].movieName +
        "</a></b><hr><br>";
    }
    list += "</ul>";

    return (listContainer.innerHTML = list);
  } else {
    return (listContainer.innerHTML = "");
  }
};

searchInput.addEventListener("keyup", search);

let sectionStart = document.querySelector("#sectionStart");
let auth = JSON.parse(localStorage.getItem("auth")) || null;

if (auth) {
  sectionStart.innerHTML = "";
  sectionStart.classList = "row me-3 mb-0";

  let usernameP = document.createElement("p");
  let usernameText = `${auth.user}`;
  usernameP.classList = " text-white align-self-center mb-0 col-6";

  usernameP.append(usernameText);
  sectionStart.append(usernameP);

  let img = document.createElement("img");
  img.src = auth.avatar;
  img.alt = auth.user;
  img.classList = "bg-light rounded-1 user-avatar";

  let hiperlink = document.createElement("a");
  hiperlink.classList = "col-6";
  hiperlink.href = "/pages/table.html";

  hiperlink.appendChild(img);
  sectionStart.append(hiperlink);
} else if (users) {
  if (sectionStart) {
    sectionStart.innerHTML = "";
  }
  sectionStart.classList = "row me-3 mb-0";

  let usernameP = document.createElement("p");
  let usernameText = `${users[0].usernameReg}`;
  usernameP.classList = "text-white align-self-center mb-0 col-6";

  usernameP.append(usernameText);
  sectionStart.append(usernameP);

  let img = document.createElement("img");
  img.src = users[0].profileReg;
  img.alt = users[0].usernameReg;
  img.classList = "bg-light rounded-1 user-avatar";

  let hiperlink = document.createElement("a");
  hiperlink.classList = "col-6";
  hiperlink.href = "/pages/admin.html";

  hiperlink.appendChild(img);
  sectionStart.append(hiperlink);
} else {
}

const highlights = JSON.parse(localStorage.getItem("highlights"));
let highlightDiv = document.querySelector("#highlightDiv");

const highlightIndex = () => {
  let divContent = document.createElement("div");
  divContent.classList = "slide-content";
  let highlightTitle = document.createElement("h1");
  highlightTitle.classList = "movie-title d-flex mt-xl-0";
  highlightTitle.innerText = highlights[0].movieName;
  let highlightDesc = document.createElement("p");
  highlightDesc.classList = "movie-des d-none d-xl-flex";
  highlightDesc.innerText = highlights[0].description;
  let buttonMore = document.createElement("a");
  buttonMore.id = "boton";
  buttonMore.role = "button";
  buttonMore.href = `/pages/movie.html?v=${movies.findIndex(
    (movie) => movie.id == highlights[0].id
  )}`;
  buttonMore.classList = "btn btn-dark";
  buttonMore.innerText = "Ver más";
  let highlightImg = document.createElement("img");
  highlightImg.src = highlights[0].movieImage;
  highlightImg.alt = highlights[0].movieName;
  divContent.append(highlightTitle, highlightDesc, buttonMore);
  highlightDiv.append(divContent, highlightImg);
};

// d-flex row align-items-start
// movie-title  m-0 p-0 ps-3
//    movie-des m-0 p-0 ps-3

const wishlists = JSON.parse(localStorage.getItem("wishlists"));

let wishlistContainer = document.querySelector("#wishlistContainer");
const wishlistMovieList = () => {
  wishlistContainer.innerHTML = "";
  wishlists.map((wishlist, index) => {
    let wishlistCard = `<div class="card">
       <img
         src="${wishlist.movieImage}"
         class="card-img"
         alt="${wishlist.movieName}"
       />
       <div class="card-body">
         <a href="/pages/movie.html?v=${movies.findIndex(
           (movie) => movie.id == wishlists[index].id
         )}"><h2 class="name mt-0">${wishlist.movieName}</h2></a>
         <button class="watchlist-btn" onclick="unwishlistMovie(${index})">Quitar de Mi Lista</button>
       </div>
      </div>
      `;
    wishlistContainer.innerHTML += wishlistCard;
  });
};

let categories = document.querySelector("#categories");

let categoriesUnique = [];
let movieByCategory = [];
const removeDuplicates = () => {
  movies.forEach((movie) => {
    if (!categoriesUnique.includes(movie.category)) {
      categoriesUnique.push(movie.category);
    }
  });
  return categoriesUnique;
};

const categoriesList = () => {
  categoriesUnique.map((movieCategory) => {
    let categoryCard =
      `<h1 class="title">${movieCategory}</h1>
    <div class="movies-list">
      <button class="pre-btn"><img src="images/pre.png"/></button>
      <button class="nxt-btn"><img src="images/nxt.png"/></button>
      <div class="card-container">` +
      movies
        .map((movie, index) => {
          if (movie.category == movieCategory) {
            return `<div class="card">
           <img
             src="${movie.movieImage}"
             class="card-img"
             alt="${movie.movieName}"
           />
           <div class="card-body">
             <a href="/pages/movie.html?v=${index}"><h2 class="name mt-0">${movie.movieName}</h2></a>
             <button class="watchlist-btn" onclick="wishlistMovie(${index})">Añadir a Mi Lista</button>
           </div>
          </div>`;
          }
        })
        .join("") +
      `</div></div>`;
    categories.innerHTML += categoryCard;
  });
};

class Wishlist {
  constructor(
    id,
    movieName,
    category,
    description,
    published,
    movieImage,
    movieVideo
  ) {
    this.id = id;
    this.movieName = movieName;
    this.category = category;
    this.description = description;
    this.published = published;
    this.movieImage = movieImage;
    this.movieVideo = movieVideo;
  }
}

const wishlistMovie = (index) => {
  const wishlist = new Wishlist(
    movies[index].id,
    movies[index].movieName,
    movies[index].category,
    movies[index].description,
    movies[index].published,
    movies[index].movieImage,
    movies[index].movieVideo
  );
  if (!wishlists.includes(wishlist)) {
    wishlists.push(wishlist);
  }
  localStorage.setItem("wishlists", JSON.stringify(wishlists));
  wishlistMovieList();
};
const unwishlistMovie = (index) => {
  wishlists.splice(index, 1);
  localStorage.setItem("wishlists", JSON.stringify(wishlists));
  wishlistMovieList();
};

highlightIndex();
wishlistMovieList();
removeDuplicates();
categoriesList();
