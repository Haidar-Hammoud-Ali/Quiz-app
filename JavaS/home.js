const loggin = JSON.parse(localStorage.getItem("loggin"));

if (!loggin){
    alert ("You need to log in");
    window.location.href ="index.html";
}

document.getElementById("welcoming").innerText = `Welcome, ${loggin.email.split('@')[0]}!`;

let quizzes = JSON.parse(localStorage.getItem("quizzes"));

if (!quizzes || quizzes.length === 0) {
  document.getElementById("quizList").innerText = "No quizzes yest.";
}



const quizList = document.getElementById("quizbdg");

quizzes.forEach(quiz => {
  const quizl = document.createElement("button");
  quizl.innerText = quiz.title;
  quizl.onclick = () => {
    window.location.href = `quiz.html?quizId=${quiz.id}`;
  };
  quizList.appendChild(quizl);
});