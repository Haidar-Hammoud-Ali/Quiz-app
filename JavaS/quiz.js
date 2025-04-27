let quizId = localStorage.getItem("currentQuizId");

let loggindata = localStorage.getItem("loggin");
loggindata = JSON.parse (loggindata);

if (loggindata===null) {
  alert("You must log in first");
  window.location.href = "index.html";
}

let quizzes = localStorage.getItem("quizzes");
quizzes = JSON.parse (quizzes)|| [];

let selectquiz = null;
for (let i=0; i<quizzes.length ; i=i+1){
  if (quizzes [i].id ===quizId){
    selectquiz = quizzes [i];
    break;
  }
}



let quizele = document.getElementById("quizTitle");
if (selectquiz===null){
quizele.innerText = "Not found";

}
   else {
    quizele.innerText = selectquiz.title;


    let quizform = document.getElementById("quizform");
    for (let i=0; i<selectquiz.length; i=i+1){
      let question =  selectquiz.questions[i];

      let questionDiv = document.createElement("div");
      questionDiv.innerHTML = "<p><strong>" +(i + 1)+ question.question + "</strong></p>";

      for (let j= 0; j< question.options.length; j=j+1){
        let option = question.options [j];
        questionDiv.innerHTML += `
          <label>
            <input type="radio" name="${i}" value="${option}"> ${option}
          </label><br>`;
      }
      quizform.appendChild(questionDiv);
      quizform.appendChild(document.createElement("hr"));

      }
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