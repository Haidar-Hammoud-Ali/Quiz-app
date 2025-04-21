function regist () {
const email = document.getElementById("remail").value.trim();
const password = document.getElementById("rpass").value;

if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }
}


const users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(u => u.email === email && u.password === password);

if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert(`Welcome back, ${email.split('@')[0]}!`);
   
    if (email === "log@admin.com" && password === "12345678") {
        window.location.href = "dashboard.html";
      } else {
        window.location.href = "home.html";
      }
    }
    else {
        alert("Retry another email or password.");
      }
      
function showTab(tab) {
  document.getElementById('Login').style.display = tab === 'Login' ? 'block' : 'none';
  document.getElementById('regist').style.display = tab === 'regist' ? 'block' : 'none';
   }
            
      
            
      