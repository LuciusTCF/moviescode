const users = JSON.parse(localStorage.getItem("users")) || null;
let content2 = document.querySelector("#main2");
let button2 = document.querySelector("#logOut2");
let profilePageName = document.querySelector("#profilePageName");

if (!users) {
  button2.classList = "d-none";
  content2.innerHTML = "";
  let message = document.createElement("div");
  message.classList = "alert alert-danger";
  message.role = "alert";
  message.innerText = "Acceda a su cuenta para ver su perfil";
  content2.append(message);
}

const closeSession2 = () => {
  localStorage.removeItem("users");
  location.replace("/");
};

const profileMain = () => {
  if (users) {
    profilePageName.innerText = users[0].usernameReg;
  }
};

button2.addEventListener("click", closeSession2);
profileMain();
