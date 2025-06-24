function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  if (username === "user1" && password === "user1") {
    window.location.href = "user1.html";
  } else if (username === "user2" && password === "user2") {
    window.location.href = "user2.html";
  } else if (username === "admin" && password === "admin") {
    window.location.href = "admin.html";
  }else {
    errorDiv.textContent = "Credenziali non valide.";
  }
}
