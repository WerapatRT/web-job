document.addEventListener("DOMContentLoaded",function(){
    const applicationForm = document.getElementById("applicationForm");

    applicationForm.addEventListener("sumbit", function(event){
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const resume = document.getElementById("resume").value;

        alert("Application submitted:\n\nName: " + fullName + "\nEmail: " + email);
    });
});