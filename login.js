let button = document.querySelector("button");
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");
let logout = document.getElementById("logout");

button.parentElement.parentElement.style.display = "none";
admin.parentElement.style.display = "none";
basic.parentElement.style.display = "none";
logout.style.display = "none";

function regis() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  localStorage.setItem("username", username.value);
  logout.style.display = "block";
  if (username.value == "admin" && password.value == "admin") {
    button.parentElement.parentElement.style.display = "none";
    admin.parentElement.style.display = "block";
    basic.parentElement.style.display = "none";
    localStorage.setItem("role", "admin");
  } else {
    basic.parentElement.style.display = "block";
    button.parentElement.parentElement.style.display = "none";
    admin.parentElement.style.display = "none";
    localStorage.setItem("role", "basic");
  }
}

// if (localStorage.getItem("username")) {
//   button.parentElement.parentElement.style.display = "none";
//   if (localStorage.getItem("role") == "admin") {
//     admin.parentElement.style.display = "block";
//     logout.style.display = "block";
//   } else {
//     basic.parentElement.style.display = "block";
//     logout.style.display = "block";
//   }
// }

let userSign = document.getElementById("usernameSign");
let userSignPass = document.getElementById("passwordSign");
let signBtn = document.getElementById("signIn");
function signIn() {
  if (userSign.value != localStorage.getItem("username")) {
    confirm("Daftar broo, itu Sign Up aja, Setelah itu refresh");
  } else if (localStorage.getItem("username")) {
    button.parentElement.parentElement.style.display = "none";
    if (localStorage.getItem("role") == "admin") {
      admin.parentElement.style.display = "block";
      logout.style.display = "block";
      signBtn.parentElement.parentElement.style.display = "none";
    } else {
      signBtn.parentElement.parentElement.style.display = "none";
      basic.parentElement.style.display = "block";
      logout.style.display = "block";
    }
  }
}

function pop() {
  button.parentElement.parentElement.style.display = "block";
  signBtn.parentElement.parentElement.style.display = "none";
}

function logOut() {
  localStorage.clear();
  location.reload();
}
