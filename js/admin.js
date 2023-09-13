const users = JSON.parse(localStorage.getItem("users")) || null;
let content = document.querySelector("#main");
let button2 = document.querySelector("#logOut");

if (!users) {
  button2.classList = "d-none";
  content.innerHTML = "";
  let message = document.createElement("div");
  message.classList = "alert alert-danger";
  message.role = "alert";
  message.innerText = "Acceda a su cuenta para ver su perfil";
  content.append(message);
}

const closeSession = () => {
  localStorage.removeItem("users");
  location.replace("/");
};

button2.addEventListener("click", closeSession);
