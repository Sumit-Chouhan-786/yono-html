// active routes
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});


// active tabs
function myFun(a) {
  let tabs = document.querySelectorAll(".tab");
  let tabButtons = document.querySelectorAll(".myTab");

  // Hide all tab contents
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  // Remove active class from all tabs
  tabButtons.forEach((tab) => {
    tab.classList.remove("active_tab");
  });

  // Show the selected tab content
  document.getElementById("Tab" + a).style.display = "block";

  // Add active class to the clicked tab
  document.getElementById("myTab" + a).classList.add("active_tab");
}
