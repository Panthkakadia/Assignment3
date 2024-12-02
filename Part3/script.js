function $(selector) {
    return document.querySelector(selector);
}

function processEntry() {
    var incomeInput = $('#income').value;
    var income = parseFloat(incomeInput);

    // Move focus to the first text box
    $('#income').focus();

    // Validate the input
    if (isNaN(income) || income <= 0) {
        alert('Please enter a valid income amount greater than zero.');
        return;
    }

    // Calculate tax
    var tax = calculateTax(income);

    // Display the tax amount rounded to two decimal places
    $('#tax').value = tax.toFixed(2);
}

function calculateTax(income) {
    var tax;

    // Convert income to integer for bracket comparisons
    income = parseFloat(income);

    // Calculate tax based on income brackets
    if (income <= 9875) {
        // 10% of income over $0
        tax = income * 0.10;
    } else if (income <= 40125) {
        // $987.50 plus 12% of income over $9,875
        tax = 987.50 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
        // $4,617.50 plus 22% of income over $40,125
        tax = 4617.50 + (income - 40125) * 0.22;
    } else if (income <= 163300) {
        // $14,605.50 plus 24% of income over $85,525
        tax = 14605.50 + (income - 85525) * 0.24;
    } else if (income <= 207350) {
        // $33,271.50 plus 32% of income over $163,300
        tax = 33271.50 + (income - 163300) * 0.32;
    } else if (income <= 518400) {
        // $47,367.50 plus 35% of income over $207,350
        tax = 47367.50 + (income - 207350) * 0.35;
    } else {
        // $156,235 plus 37% of income over $518,400
        tax = 156235 + (income - 518400) * 0.37;
    }

    return tax;
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach processEntry to the click event of the Calculate button
    $('#calculate').addEventListener('click', processEntry);

    // Move focus to the first text box on page load
    $('#income').focus();
});
