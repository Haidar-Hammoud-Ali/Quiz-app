function regist () {
const email = document.getElementById("remail").value.trim();
const password = document.getElementById("rpass").value;

if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }
}

let user = JSON.parse(localStorage.getItem("users")) || [];
