console.log("loading javascript");

const filmButtons = document.querySelectorAll(".film-card button");
const programmeCount = document.querySelector("#programme-count");

console.log("found buttons", filmButtons);

filmButtons.forEach(function (button) {
  // Give this button the click behaviour
  button.addEventListener("click", function () {
    const filmCard = button.closest(".film-card");
    filmCard.classList.toggle("film-card--selected");
    if (filmCard.classList.contains("film-card--selected")) {
      button.textContent = "Remove from programme";
    } else {
      button.textContent = "Add to programme";
    }

    const selectedFilms = document.querySelectorAll(".film-card--selected");
    programmeCount.textContent = selectedFilms.length + " films selected";
  });
});

// filmButton.addEventListener("click", function () {
//   filmButton.textContent = "Added";
//   const filmCard = filmButton.closest(".film-card");
//   filmCard.classList.add("film-card--selected");
// });

const topBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.onscroll = function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Smoothly scroll to top when clicked
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ... All your existing portfolio JavaScript code is up here ...

function playVideo() {
    console.log("Playing trailer...");
}

// ==========================================
//    SCROLL TO TOP CODE (PASTE AT THE END)   
// ==========================================
//const topBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.onscroll = function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Smoothly scroll to top when clicked
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Find the arrow button on the page
//const topBtn = document.getElementById("scrollTopBtn");

// Tell the button what to do when someone clicks it
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,             // Go all the way to the top (pixel 0)
    behavior: "smooth"  // Glide smoothly instead of jumping instantly!
  });
});

