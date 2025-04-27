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
  let email = document.getElementById("lemail").value.trim();
  let password = document.getElementById("lpass").value;

  let users = localStorage.getItem("users");
   users = JSON.parse (users)|| [];

    for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      foundUser = users[i];
      break;
    }
  }

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

