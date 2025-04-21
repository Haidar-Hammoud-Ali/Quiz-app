const loggin = JSON.parse(localStorage.getItem("loggin"));

if (!loggin || loggin.email !== "admin@q.com") {
  alert("Access to admin only.");
  window.location.href = "index.html";
}

const users = JSON.parse(localStorage.getItem("users")) || [];
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

const tableDiv = document.getElementById("userTable");