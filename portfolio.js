// Simple example: form submission alert
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});