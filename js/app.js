const movies = [
  { name: "Movie A" },
  { name: "Movie B" },
  { name: "Movie C" },
  { name: "Movie D" },
  { name: "Movie E" },
  { name: "Movie F" },
  { name: "Movie G" },
  { name: "Movie H" },
  { name: "Movie I" },
  { name: "Movie J" },
  { name: "Movie K" },
  { name: "Movie L" },
  { name: "Movie M" },
  { name: "Movie N" },
  { name: "Movie O" },
  { name: "Movie P" },
  { name: "Movie Q" },
  { name: "Movie R" },
  { name: "Movie S" },
  { name: "Movie T" },
  { name: "Movie U" },
  { name: "Movie V" },
  { name: "Movie W" },
  { name: "Movie X" },
  { name: "Movie Y" },
  { name: "Movie Z" },
];
let searchInput = document.querySelector("#search");
let listContainer = document.querySelector("#list");

const search = (event) => {
  event.preventDefault();

  if (searchInput.value) {
    let results = [];
    for (let index = 0; index < movies.length; index++) {
      results = movies.filter((result) => {
        return result.name
          .toLowerCase()
          .includes(searchInput.value.toLowerCase());
      });
    }
    let list = "<ul>";
    for (let i = 0; i < results.length; i++) {
      list +=
        "<li class='list-group-item'><b><a class='text-decoration-none text-light' href='./pages/error404.html'>" +
        results[i].name +
        "</a></b><br>";
    }
    list += "</ul>";
    return (listContainer.innerHTML = list);
  } else {
    return (listContainer.innerHTML = "");
  }
};

searchInput.addEventListener("keyup", search);
