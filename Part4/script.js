function $(selector) {
    return document.querySelector(selector);
}
document.addEventListener("DOMContentLoaded", () => {
    // Focus on the arrival date field
    $("#input-arrival-date").focus();

    // Add submit event listener for the form
    $("#form-reservation").addEventListener("submit", (event) => {
        let errorMessage = "";

        // Validate Arrival Date
        if ($("#input-arrival-date").value.trim() === "") {
            errorMessage += "Arrival Date is required.\n";
        }

        // Validate Nights
        if ($("#input-nights").value.trim() === "" || isNaN($("#input-nights").value.trim())) {
            errorMessage += "Nights must be numeric.\n";
        }

        // Validate Name
        if ($("#input-name").value.trim() === "") {
            errorMessage += "Name is required.\n";
        }

        // Validate Phone
        if ($("#input-phone").value.trim() === "") {
            errorMessage += "Phone is required.\n";
        }

        // Validate Email
        const email = $("#input-email").value.trim();
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/; // Regex for valid email
        if (email === "" || !emailPattern.test(email)) {
            errorMessage += "Email must be a valid email address.\n";
        }

        // If there are errors, prevent form submission
        if (errorMessage !== "") {
            alert(errorMessage);
            event.preventDefault(); // Stop the form submission
        }
    });

    // Add click event listener for the clear button
    $("#btn-clear-form").addEventListener("click", () => {
        $("#form-reservation").reset(); // Reset the form fields
        $("#input-arrival-date").focus(); // Set focus back to the arrival date field
    });
});