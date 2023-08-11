document.addEventListener("DOMContentLoaded", function () {
    const applicationForm = document.getElementById("applicationForm");

    applicationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const resume = document.getElementById("resume").value;

        // You can perform further validation and submission here
        // For this example, we'll just display an alert
        alert("Application submitted:\n\nName: " + fullName + "\nEmail: " + email);
    });
});
