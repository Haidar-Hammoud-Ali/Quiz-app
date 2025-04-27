function regist () {
let email = document.getElementById("remail").value.trim();
let password = document.getElementById("rpass").value;

  let users = localStorage.getItem("users");
  users = JSON.parse (users) || [];

  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].email === email) {
      alert("Already registered");
      return;
    }
  }

  users.push({email:email, password:password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("success!");
}

function login (){
  const email = document.getElementById("lemail").value.trim();
  const password = document.getElementById("lpass").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggin", JSON.stringify(user));
    alert(`Welcome, ${email.split('@')[0]}!`);

    if (email === "admin@q.com" && password === "admin") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "home.html";
    }


  } else {
    alert("Incorrect email or password.");
  }
}

