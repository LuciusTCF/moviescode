const users = JSON.parse(localStorage.getItem("users")) || [];

// let nombre = document.querySelector("#input1");
let emailReg = document.querySelector("#emailReg");
let usernameReg = document.querySelector("#userReg");
let passwordReg = document.querySelector("#passwordReg");
let countryReg = document.querySelector("#countryReg");
let profileReg = document.querySelector("#profileReg");
let passConfirm1 = document.querySelector("#passwordReg");
let passConfirm2 = document.querySelector("#passwordConfirm");
let messageConfirm2 = document.querySelector("#message");

class User {
  constructor(
    // nombre,
    emailReg,
    usernameReg,
    passwordReg,
    countryReg = "",
    profileReg
  ) {
    // this.nombre = nombre;
    this.emailReg = emailReg;
    this.usernameReg = usernameReg;
    this.passwordReg = passwordReg;
    this.countryReg = countryReg;
    this.profileReg = profileReg;
  }
}

const registerUser = (event) => {
  event.preventDefault();
  const user = new User(
    // nombre.value,
    emailReg.value,
    usernameReg.value,
    passwordReg.value,
    countryReg.value,
    profileReg.value
  );
  localStorage.removeItem("auth");
  users.splice(0);
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  location.assign("http://127.0.0.1:5502/index.html");
};

const check = () => {
  if (passConfirm1.value == passConfirm2.value) {
    messageConfirm2.style.color = "green";
    messageConfirm2.innerHTML = "La contraseña coincide";
  } else {
    messageConfirm2.style.color = "red";
    messageConfirm2.innerHTML = "La contraseña no coincide";
  }
};

const userAdmin = {
  usernameAdmin: "Admin",
  emailAdmin: "admin@admin.com",
  passwordAdmin: "12345678",
  avatarAdmin:
    "https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_man_people_person_profile_user_icon_123377.png",
};

const logIn = (event) => {
  event.preventDefault();

  let emailLog = document.querySelector("#emailLog").value;
  let PasswordLog = document.querySelector("#passwordLog").value;

  if (
    emailLog == userAdmin.emailAdmin &&
    PasswordLog == userAdmin.passwordAdmin
  ) {
    localStorage.removeItem("users");
    localStorage.setItem(
      "auth",
      JSON.stringify({
        user: userAdmin.usernameAdmin,
        email: userAdmin.emailAdmin,
        avatar: userAdmin.avatarAdmin,
      })
    );

    location.replace("/pages/table.html");
  } else if (
    emailLog == users[0].emailReg &&
    PasswordLog == users[0].passwordReg
  ) {
    localStorage.removeItem("auth");
    location.replace("http://127.0.0.1:5502/index.html");
  } else {
    alert("El correo o la contraseña no son correctos");
  }
};
