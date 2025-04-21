const loggin = JSON.parse(localStorage.getItem("loggin"));

if (!loggin || loggin.email !== "admin@q.com") {
  alert("Access to admin only.");
  window.location.href = "index.html";
}

const users = JSON.parse(localStorage.getItem("users")) || [];
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

const tableDiv = document.getElementById("userTable");

if (users.length === 0) {
    tableDiv.innerHTML = "<p>users not found.</p>";
  } else {
    let html = `<table border="1" cellpadding="10"><tr><th>User</th>`;
    quizzes.forEach(quiz => {
        html += `<th>${quiz.title}</th>`;
      });  

      html += "</tr>";

      users.forEach(user => {
        if (user.email === "admin@q.com") return;
    
        html += `<tr><td>${user.email}</td>`;
    
        quizzes.forEach(quiz => {
          const score = user.scores && user.scores[quiz.id] !== undefined
            ? user.scores[quiz.id]
            : "Not taken";
          html += `<td>${score}</td>`;
        });
    
        html += "</tr>";
      });
    
      html += "</table>";
      tableDiv.innerHTML = html;
    }