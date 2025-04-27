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
    let quizform = document.getElementById("quizform");
    let score = 0;
    for (let i=0; i<selectquiz.questions.length; i=i+1){
      
      let selected = quizform.querySelector(`input[name="q${i}"]:checked`);
      if (selected && selected.value === selectquiz.questions[i].answer) {
        score++;
            }
      
    }
document.getElementById ("result").innerHTML = "<h3>your score: " + score + "/" + selectquiz.questions.length + "</h3>";
  }