const users = JSON.parse(localStorage.getItem("users")) || [];

let emailReg = document.querySelector("#emailReg");
let usernameReg = document.querySelector("#userReg");
let passwordReg = document.querySelector("#passwordReg");
let passwordConfirm = document.querySelector("#passwordConfirm");
let profileReg = document.querySelector("#profileReg");
let passConfirm1 = document.querySelector("#passwordReg");
let passConfirm2 = document.querySelector("#passwordConfirm");
let messageConfirm2 = document.querySelector("#message");

class User {
  constructor(emailReg, usernameReg, passwordReg, profileReg) {
    this.emailReg = emailReg;
    this.usernameReg = usernameReg;
    this.passwordReg = passwordReg;
    this.profileReg = profileReg;
  }
}

const registerUser = (event) => {
  event.preventDefault();
  if (
    passConfirm1.value == passConfirm2.value &&
    emailReg.value != "" &&
    usernameReg.value != "" &&
    passwordReg.value != "" &&
    profileReg.value != ""
  ) {
    const user = new User(
      emailReg.value,
      usernameReg.value,
      passwordReg.value,
      profileReg.value
    );
    localStorage.removeItem("auth");
    users.splice(0);
    users.push(user);
    sendMail();
    localStorage.setItem("users", JSON.stringify(users));
    location.assign("http://127.0.0.1:5502/index.html");
  }
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
  let passwordLog = document.querySelector("#passwordLog").value;

  if (
    emailLog == userAdmin.emailAdmin &&
    passwordLog == userAdmin.passwordAdmin
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

    location.replace("/pages/admin.html");
  } else if (
    emailLog == users[0].emailReg &&
    passwordLog == users[0].passwordReg
  ) {
    localStorage.removeItem("auth");
    location.replace("/pages/user.html");
  } else {
    alert("El correo o la contraseña no son correctos");
  }
};

const sendMail = () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "lucaschcobarferreyra@gmail.com",
    Password: "BCB1933977393C8B3360A50698B1D118FEB9",
    To: emailReg.value,
    From: "lucaschcobarferreyra@gmail.com",
    Subject: "Gracias por registrarte",
    Body: "Estamos contentos de que formes parte de nuestra comunidad.",
  }).then((message = "Se ha registrado su cuenta") => alert(message));
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
