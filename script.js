script.js
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmationMessage").innerText = "Appointment booked! Thank you!";
});




