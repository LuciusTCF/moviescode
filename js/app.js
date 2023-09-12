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

// if (users) {
//   if (sectionStart) {
//     sectionStart.innerHTML = "";
//   }
//   sectionStart.classList = "d-flex col mb-0";

//   let usernameP = document.createElement("p");
//   let usernameText = `${users[0].usernameReg}`;
//   usernameP.classList =
//     "text-white d-flex justify-content-end align-self-center mb-0 me-1 col-10";

//   usernameP.append(usernameText);
//   sectionStart.append(usernameP);

//   let img = document.createElement("img");
//   img.src = users[0].profileReg;
//   img.alt = users[0].usernameReg;
//   img.classList = "bg-light rounded-1 user-avatar";

//   let hiperlink = document.createElement("a");
//   hiperlink.classList = "col-2";
//   hiperlink.href = "/pages/admin.html";

//   hiperlink.appendChild(img);
//   sectionStart.append(hiperlink);
// }

// const carousel = document.querySelector(".carousel");
// let sliders = [];

// let slideIndex = 0; // to track current slide index.

// const createSlide = () => {
//   if (slideIndex >= movies.length) {
//     slideIndex = 0;
//   }

//   // creating DOM element
//   let slide = document.createElement("div");
//   let imgElement = document.createElement("img");
//   let content = document.createElement("div");
//   let h1 = document.createElement("h1");
//   let p = document.createElement("p");
// };

// {
//   // attaching all elements
//   imgElement.appendChild(document.createTextNode(""));
//   h1.appendChild(document.createTextNode(movies[slideIndex].name));
//   p.appendChild(document.createTextNode(movies[slideIndex].des));
//   content.appendChild(h1);
//   content.appendChild(p);
//   slide.appendChild(content);
//   slide.appendChild(imgElement);
//   carousel.appendChild(slide);
// }

// {
//   // setting up image
//   imgElement.src = movies[slideIndex].image;
//   slideIndex++;

//   // setting elements classname
//   slide.className = "slider";
//   content.className = "slide-content";
//   h1.className = "movie-title";
//   p.className = "movie-des";

//   sliders.push(slide);
// }

// {
//   if (sliders.length) {
//     sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
//       30 * (sliders.length - 2)
//     }px)`;
//   }
// }

// for (let i = 0; i < 3; i++) {
//   createSlide();
// }

// setInterval(() => {
//   createSlide();
// }, 3000);

// // card sliders

// let cardContainers = [...document.querySelectorAll(".card-container")];
// let preBtns = [...document.querySelectorAll(".pre-btn")];
// let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

// cardContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtns[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth - 200;
//   });

//   preBtns[i].addEventListener("click", () => {
//     item.scrollLeft -= containerWidth + 200;
//   });
// });

const highlights = JSON.parse(localStorage.getItem("highlights"));
// let highlightTitle = document.querySelector("#highlightTitle");
// let highlightDesc = document.querySelector("#highlightDesc");
// let highlightImg = document.querySelector("#highlightiMG");
let highlightDiv = document.querySelector("#highlightDiv");

const highlightIndex = () => {
  let divContent = document.createElement("div");
  divContent.classList = "slide-content";
  let highlightTitle = document.createElement("h1");
  highlightTitle.classList = "movie-title";
  highlightTitle.innerText = highlights[0].movieName;
  let highlightDesc = document.createElement("p");
  highlightDesc.classList = "movie-des";
  highlightDesc.innerText = highlights[0].description;
  let buttonMore = document.createElement("button");
  buttonMore.id = "boton";
  buttonMore.type = "button";
  buttonMore.classList = "btn btn-dark";
  buttonMore.innerText = "Ver más";
  let highlightImg = document.createElement("img");
  highlightImg.src = highlights[0].movieImage;
  highlightImg.alt = highlights[0].movieName;
  divContent.append(highlightTitle, highlightDesc, buttonMore);
  highlightDiv.append(divContent, highlightImg);

  // highlightTitle.innerText = highlights[0].movieName;
  // highlightDesc.innerText = highlights[0].description;
  // highlightImg.src = highlights[0].movieImage;
  //   let divInner = `<div class="slide-content">
  //   <h1 class="movie-title">${highlights[0].movieName}</h1>
  //   <p class="movie-des">${highlights[0].description}</p>
  //   <button id="boton" type="button" class="btn btn-dark">
  //     Ver Más
  //   </button>
  // </div>
  // <img src="./assets/${highlights[0].movieImage}" alt="slider1" />`;
  //   highlightDiv.innerHTML = divInner;
};

// let categories =document.querySelector("#categories")
// const mainCategories =()=>{
// let listTitle = document.createElement("h1")
// listTitle.classList="title"
// let otherCategories=document.createAttribute("div")
// movies.map((movie,index)=>{
//   let categoryTitle=document.createElement("h1")
//   categoryTitle.classList="title"
//   categoryTitle.innerText=movie[index].category
//   let
// })
// }

const wishlists = JSON.parse(localStorage.getItem("wishlists"));

// let categories = document.querySelector("#categories");
// const mainCategories = () => {
//   // let listTitle = document.createElement("h1")
//   // listTitle.classList="title"
//   // let otherCategories=document.createAttribute("div")
//   // movies.map((movie,index)=>{
//   //   let categoryTitle=document.createElement("h1")
//   //   categoryTitle.classList="title"
//   //   categoryTitle.innerText=movie[index].category
//   //   let
//   // })
//   categories.innerHTML = "";
//   let wishlistTitle = document.createElement("h1");
//   wishlistTitle.classList = "title";
//   wishlistTitle.innerText = "Mi Lista";
//   let wishlistDiv = document.createElement("div");
//   wishlistDiv.classList = "movie-list";
//   let buttonPre = document.createElement("button");
//   buttonPre.classList = "pre-btn";
//   buttonPre.src = "images/pre.png";
//   let buttonNxt = document.createElement("button");
//   buttonNxt.classList = "nxt-btn";
//   buttonNxt.src = "images/nxt.png";
//   let conatinerWishlist = document.createElement("div");
//   conatinerWishlist.classList = "card-container";
//   wishlistDiv.append(buttonPre, buttonNxt, conatinerWishlist);
//   categories.append(wishlistTitle, wishlistDiv);
//   wishlists.map((wishlist, index) => {
//     let categoryWishlist = `
//       <div class="card">
//         <img
//           src="${wishlist.movieImage}"
//           class="card-img"
//           alt="${wishlist.movieName}"
//         />
//         <div class="card-body">
//           <h2 class="name">${wishlist.movieName}</h2>
//           <button class="watchlist-btn" onclick="unwishlistMovie(${index})">Quitar de mi lista</button>
//         </div>
//       </div>
//     `;
//     conatinerWishlist.append(categoryWishlist);
//   });

//   movies.map((movie) => {
//     let movieTitle = document.createElement("h1");
//     movieTitle.classList = "title";
//     movieTitle.innerText = movie.categories;
//     let movieDiv = document.createElement("div");
//     movieDiv.classList = "movie-list";
//     let movieButtonPre = document.createElement("button");
//     movieButtonPre.classList = "pre-btn";
//     movieButtonPre.src = "images/pre.png";
//     let movieButtonNxt = document.createElement("button");
//     movieButtonNxt.classList = "nxt-btn";
//     movieButtonNxt.src = "images/nxt.png";
//     let conatinerMovie = document.createElement("div");
//     conatinerMovie.classList = "card-container";
//     movieDiv.append(movieButtonPre, movieButtonNxt, conatinerMovie);
//     categories.append(movieTitle, movieDiv);
//     movies.map((movie, index) => {
//       let categoryMovie = `
//           <div class="card">
//             <img
//               src="${movie.movieImage}"
//               class="card-img"
//               alt="${movie.movieName}"
//             />
//             <div class="card-body">
//               <h2 class="name">${movie.movieName}</h2>
//               <button class="watchlist-btn" onclick="wishlistMovie(${index})">Añadir a mi lista</button>
//             </div>
//           </div>
//         `;
//       conatinerMovie.append(categoryMovie);
//     });
//   });
// };

let wishlistContainer = document.querySelector("#wishlistContainer");
const wishlistMovieList = () => {
  wishlistContainer.innerHTML = "";
  wishlists.map((wishlist, index) => {
    // let wishlistCard=document.createElement
    let wishlistCard = `<div class="card">
       <img
         src="${wishlist.movieImage}"
         class="card-img"
         alt="${wishlist.movieName}"
       />
       <div class="card-body">
         <h2 class="name">${wishlist.movieName}</h2>
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
  // for (let index = 0; index < movies.length; index++) {
  //   movieByCategory = movies.filter(
  //     (element) => element.category == movies[index].category
  //   );
  // }
  return categoriesUnique;

  // if (!categoriesUnique.includes(movie)){
  //   categoriesUnique.push(movie);
  // }
  // return categoriesUnique;
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
             <h2 class="name">${movie.movieName}</h2>
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

// const categoryMovieList = () => {
//   let categoryDiv = document.querySelector(`.card-${movieCategory}`);
//   movies.map((movie, index) => {
//     let movieCard = `<div class="card">
//        <img
//          src="${movie.movieImage}"
//          class="card-img"
//          alt="${movie.movieName}"
//        />
//        <div class="card-body">
//          <h2 class="name">${movie.movieName}</h2>
//          <button class="watchlist-btn" onclick="wishlistMovie(${index})">Añadir a Mi Lista</button>
//        </div>
//       </div>
//       `;
//     categoryDiv.innerHTML += movieCard;
//   });
// };

// let searchInput = document.querySelector("#search");
// let listContainer = document.querySelector("#list");

// const search = (event) => {
//   event.preventDefault();

//   if (searchInput.value) {
//     let results = [];
//     for (let index = 0; index < movies.length; index++) {
//       results = movies.filter((result) => {
//         return result.movieName
//           .toLowerCase()
//           .includes(searchInput.value.toLowerCase());
//       });
//     }

//     let list = "<ul>";
//     for (let i = 0; i < results.length; i++) {
//       list +=
//         "<li class='list-group-item'><b><a class='text-decoration-none text-light text-break' href='./pages/error404.html'>" +
//         results[i].movieName +
//         "</a></b><hr><br>";
//     }
//     list += "</ul>";

//     return (listContainer.innerHTML = list);
//   } else {
//     return (listContainer.innerHTML = "");
//   }
// };

// searchInput.addEventListener("keyup", search);

class Wishlist {
  constructor(id, movieName, category, description, published, movieImage) {
    this.id = id;
    this.movieName = movieName;
    this.category = category;
    this.description = description;
    this.published = published;
    this.movieImage = movieImage;
  }
}

const wishlistMovie = (index) => {
  const wishlist = new Wishlist(
    movies[index].id,
    movies[index].movieName,
    movies[index].category,
    movies[index].description,
    movies[index].published,
    movies[index].movieImage
  );
  wishlists.push(wishlist);
  localStorage.setItem("wishlists", JSON.stringify(wishlists));
  wishlistMovieList();
};
const unwishlistMovie = (index) => {
  // wishlistContainer.innerHTML=""
  wishlists.splice(index, 1);
  localStorage.setItem("wishlists", JSON.stringify(wishlists));
  wishlistMovieList();
};

highlightIndex();
wishlistMovieList();
removeDuplicates();
categoriesList();
// categoryMovieList();
// mainCategories();
