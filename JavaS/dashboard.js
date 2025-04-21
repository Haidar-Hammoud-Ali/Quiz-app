const loggin = JSON.parse(localStorage.getItem("loggin"));

if (!loggin || loggin.email !== "admin@q.com") {
  alert("Access to admin only.");
  window.location.href = "index.html";
}