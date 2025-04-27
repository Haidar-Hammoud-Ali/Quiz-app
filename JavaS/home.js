let loggin = localStorage.getItem("loggin");
loggin = JSON.parse(loggin);

if (loggin= null){
    alert ("You need to log in");
    window.location.href ="index.html";
}

let welcomtxt = document.getElementById("welcoming");
let namebefrat = loggin.email.split('@')[0];
welcomtxt.innerText = "welcome," + namebefrat + "!";

let quizzes = localStorage.getItem("quizzes");
quizzes = json.parse (quizzes);


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

for (let i=0; i<quizzes.length; i=i+1){
  let quiz = quizzes[i];

  let quizButton = document.createElement("button");
  quizButton.innerText = quiz.title;

    quizButton.onclick = function() {
      
      localStorage.setItem("currentQuizId", quiz.id);
      window.location.href = "quiz.html";
    };
    quizList.appendChild(quizButton);
  };
