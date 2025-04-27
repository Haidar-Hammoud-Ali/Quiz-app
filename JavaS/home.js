let loggin = localStorage.getItem("loggin");
loggin = JSON.parse(loggin);

if (loggin= null){
    alert ("You need to log in");
    window.location.href ="index.html";
}

document.getElementById("welcoming").innerText = `Welcome, ${loggin.email.split('@')[0]}!`;

let quizzes = JSON.parse(localStorage.getItem("quizzes"));


if (!quizzes || quizzes.length === 0) {
  quizzes = [
      {
          id: "quiz1",
          title: "First Quiz!",
          questions: [
              {
                  question: "Question 1",
                  options: ["choice 1", "choice 2", "choice 3", "choice 4"],
                  answer: "choice 3"
              },
              {
                  question: "Question 2",
                  options: ["choice 1", "choice 2", "choice 3", "choice 4"],
                  answer: "choice 2"
              },
              {
                  question: "question 3",
                  options: ["choice 1", "choice 2", "choice 3", "choice 4"],
                  answer: "choice 1"
              }
          ]
      }
  ];
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
}

const quizList = document.getElementById("quizbdg");

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