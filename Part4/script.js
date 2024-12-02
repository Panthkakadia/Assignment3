document.addEventListener("DOMContentLoaded", () => {

    // Move focus to the "Arrival Date" text box
    document.querySelector("#input-arrival-date").focus();

    // Add submit event listener for the form
    document.querySelector("#form-reservation").addEventListener("submit", (event) => {
        let isValid = true; // To track overall form validity
        let errorMessage = ""; // To store error messages

        // Get and trim user input
        const arrivalDate = document.querySelector("#input-arrival-date").value.trim();
        const nights = document.querySelector("#input-nights").value.trim();
        const adults = document.querySelector("#input-adults").value.trim();
        const children = document.querySelector("#input-childrens").value.trim();
        const email = document.querySelector("#input-email").value.trim();
        const name = document.querySelector("#input-name").value.trim();
        const phone = document.querySelector("#input-phone").value.trim();

        // Put trimmed values back into the controls
        document.querySelector("#input-arrival-date").value = arrivalDate;
        document.querySelector("#input-nights").value = nights;
        document.querySelector("#input-adults").value = adults;
        document.querySelector("#input-childrens").value = children;
        document.querySelector("#input-email").value = email;
        document.querySelector("#input-name").value = name;
        document.querySelector("#input-phone").value = phone;

        // Validate each field and add errors to errorMessage
        if (arrivalDate === "") {
            errorMessage += "Arrival date is required.\n";
            isValid = false;
        }
 if (nights === "" || isNaN(nights)) {
            errorMessage += "Nights must be numeric.\n";
            isValid = false;
        }
         if (adults === "" || isNaN(adults)) {
            errorMessage += "Adults must be numeric.\n";
            isValid = false;
        }
          if (children === "" || isNaN(children)) {
            errorMessage += "Children must be numeric.\n";
            isValid = false;
        }
        if (name === "") {
            errorMessage += "Name is required.\n";
            isValid = false;
        }
          if (email === "" || !email.includes("@") || !email.includes(".")) {
            errorMessage += "Email must be a valid email address.\n";
            isValid = false;
        }
         if (phone === "") {
            errorMessage += "Phone is required.\n";
            isValid = false;
        }

        // If invalid, prevent form submission and alert error messages
        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    });
});
