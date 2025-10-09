// Form validation and mock login
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const logoutBtn = document.getElementById('logoutBtn');
  const userEmailDisplay = document.getElementById('userEmail');

  // LOGIN PAGE
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!loginForm.checkValidity()) {
        event.stopPropagation();
      } else {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic mock authentication
        if (email === "user@example.com" && password === "123456") {
          localStorage.setItem('loggedInUser', email);
          window.location.href = "dashboard.html";
        } else {
          alert("Invalid email or password. Try 'user@example.com' and '123456'.");
        }
      }

      loginForm.classList.add('was-validated');
    });
  }
  
  // DASHBOARD PAGE
  if (userEmailDisplay) {
    const loggedUser = localStorage.getItem('loggedInUser');
    if (!loggedUser) {
      window.location.href = "login.html";
    } else {
      userEmailDisplay.textContent = loggedUser;
    }
  }

    // LOGOUT
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('loggedInUser');
      window.location.href = "login.html";
    });
  }
});

