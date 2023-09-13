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
    location.replace("http://127.0.0.1:5502/index.html");
  } else {
    alert("El correo o la contraseña no son correctos");
  }
};
