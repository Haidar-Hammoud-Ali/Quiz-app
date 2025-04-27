let quizId = localStorage.getItem("currentQuizId");

let loggindata = localStorage.getItem("loggin");
loggindata = JSON.parse (loggindata);

if (loggindata===null) {
  alert("You must log in first");
  window.location.href = "index.html";
}

let quizzes = localStorage.getItem("quizzes");
quizzes = JSON.parse (quizzes)|| [];


const quiz = quizzes.find(q => q.id === quizId);

if (!quiz) {
    document.getElementById("quizTitle").innerText = "Quiz not found.";
  } else {
    document.getElementById("quizTitle").innerText = quiz.title;
    const form = document.getElementById("quizForm");

    quiz.questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
  
      questionDiv.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;
  
      q.options.forEach(option => {
        questionDiv.innerHTML += `
          <label>
            <input type="radio" name="q${index}" value="${option}"> ${option}
          </label><br>`;
      });
      form.appendChild(questionDiv);
      form.appendChild(document.createElement("hr"));
    });
  }
    
  function submitQuiz() {
    const form = document.getElementById("quizForm");
    let score = 0;
  
    quiz.questions.forEach((q, index) => {
      const selected = form.querySelector(`input[name="q${index}"]:checked`);
      if (selected && selected.value === q.answer) {
        score++;
      }
    });

    document.getElementById("result").innerHTML = `<h3>Your score: ${score}/${quiz.questions.length}</h3>`;

    const users = JSON.parse(localStorage.getItem("users"));
  const currentUser = users.find(u => u.email === loggin.email);
  if (!currentUser.scores) currentUser.scores = {};
  currentUser.scores[quizId] = score;

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggin", JSON.stringify(currentUser));
}