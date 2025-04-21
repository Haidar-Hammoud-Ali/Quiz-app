const loggin = JSON.parse(localStorage.getItem("loggin"));

if (!loggin){
    alert ("You need to log in");
    window.location.href ="index.html";
}

document.getElementById("welcoming").innerText = `Welcome, ${loggin.email.split('@')[0]}!`;

let quizzes = JSON.parse(localStorage.getItem("quizzes"));

if (!quizzes || quizzes.length === 0) {
  quizList.innerText = "No quizzes yet.";
} else {
  quizzes.forEach(quiz => {
    const quizButton = document.createElement("button");
    quizButton.innerText = quiz.title;
    quizButton.onclick = () => {
      
      localStorage.setItem("currentQuizId", quiz.id);
      window.location.href = "quiz.html";
    };
    quizList.appendChild(quizButton);
  });
}