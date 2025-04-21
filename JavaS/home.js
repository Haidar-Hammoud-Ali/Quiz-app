const loggin = JSON.parse(localStorage.getItem("loggin"));

if (!loggin){
    alert ("You need to log in");
    window.location.href ="index.html";
}

document.getElementById("welcoming").innerText = `Welcome, ${loggin.email.split('@')[0]}!`;

let quizzes = JSON.parse(localStorage.getItem("quizzes"));
if (!quizzes || quizzes.length === 0) {
  quizzes = [
    {
      id: "quiz1",
      title: "Quiz Title ",
      questions: [
        {
          question: "Question 1",
          options: ["choice 1", "choice 2", "choice 3"],
          answer: "choice 2"
        },
        {
          question: "Question 2",
          options: ["choice 1", "choice 2", "choice 3"],
          answer: "choice 3"
        },
        {
          question: "Question 3",
          options: ["choice 1", "choice 2", "choice 3"],
          answer: "choice 1"
        }
      ]
    },
    {
      id: "quiz2",
      title: "Quiz 2 title",
      questions: [
        {
          question: "Question 1",
          options: ["choice 1", "choice 2", "choice 3"],
          answer: "choice 3"
        },
        {
          question: "Question 2",
          options: ["choice 1", "choice 2", "choice 3"],
          answer: "choice 3"
        },
        {
          question: "Question 3",
          options: ["choice 1", "choice 2", "choice 3"],
          answer: "choice 2"
        }
      ]
    }
  ];
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
}