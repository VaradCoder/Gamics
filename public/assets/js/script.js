'use strict';

// Constants for elements
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const loginLink = document.getElementById('loginLink');
const signupLink = document.getElementById('signupLink');

// Toggle navigation menu
function toggleNavbar() {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

// Close navigation menu when a link is clicked
function closeNavbarOnClick() {
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      navbarToggler.classList.remove("active");
    });
  });
}

// Toggle search box
function toggleSearchBox() {
  searchTogglers.forEach((toggler) => {
    toggler.addEventListener("click", () => {
      searchBox.classList.toggle("active");
    });
  });
}

// Initialize event listeners
function setupEventListeners() {
  if (navbarToggler) {
    navbarToggler.addEventListener("click", toggleNavbar);
  }

  closeNavbarOnClick();
  toggleSearchBox();

  // Open Login Popup when "Login" link is clicked
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    openLoginPopup();
  });

  // Open Signup Popup when "Sign Up" button is clicked
  signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    openSignupPopup();
  });
}

// Open Login Popup
function openLoginPopup() {
  document.getElementById('loginPopup').style.display = 'block';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
}

// Open Signup Popup
function openSignupPopup() {
  document.getElementById('loginPopup').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}

// Close Popup
function closePopup() {
  document.getElementById('loginPopup').style.display = 'none';
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
});

// Add a scroll event listener for header
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Run the setup when the document is ready
document.addEventListener("DOMContentLoaded", setupEventListeners);
