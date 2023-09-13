let movies = JSON.parse(localStorage.getItem("movies")) || null;
let highlights = JSON.parse(localStorage.getItem("highlights")) || null;
let auth = JSON.parse(localStorage.getItem("auth")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let wishlists = JSON.parse(localStorage.getItem("wishlists")) || null;
const userAdmin = {
  usernameAdmin: "Admin",
  emailAdmin: "admin@admin.com",
  passwordAdmin: "12345678",
  avatarAdmin:
    "https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_man_people_person_profile_user_icon_123377.png",
};

export { movies, highlights, auth, users, wishlists, userAdmin };
