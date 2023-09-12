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
