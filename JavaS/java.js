function regist () {
const email = document.getElementById("remail").value.trim();
const password = document.getElementById("rpass").value;

if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }
}

let users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(u => u.email === email && u.password === password);

if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert(`Welcome back, ${email.split('@')[0]}!`);
  

