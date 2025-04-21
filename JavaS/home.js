const loggin = JSON.parse(localStorage.getItem("loggin"));

if (!loggin){
    alert ("You need to log in");
    window.location.href ="index.html";
}