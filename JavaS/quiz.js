const quizId = localStorage.getItem("currentQuizId");

const loggin = JSON.parse(localStorage.getItem("loggin"));
if (!loggin) {
  alert("You must log in first.");
  window.location.href = "index.html";
}

const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const quiz = quizzes.find(q => q.id === quizId);