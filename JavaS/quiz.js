const quizId = localStorage.getItem("currentQuizId");

const loggin = JSON.parse(localStorage.getItem("loggin"));
if (!loggin) {
  alert("You must log in first.");
  window.location.href = "index.html";
}

const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
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