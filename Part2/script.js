function $(selector) {
    return document.querySelector(selector);
}

function processEntry() {
    var cents = parseInt($('#cents').value);

    // Validate the input
    if (isNaN(cents) || cents < 0 || cents > 99) {
        alert('Please enter a valid number between 0 and 99.');
    } else {
        makeChange(cents);
    }
}

function makeChange(cents) {
    var quarters = parseInt(cents / 25);
    cents = cents % 25;

    var dimes = parseInt(cents / 10);
    cents = cents % 10;

    var nickels = parseInt(cents / 5);
    cents = cents % 5;

    var pennies = cents;

    // Display the results
    $('#quarters').value = quarters;
    $('#dimes').value = dimes;
    $('#nickels').value = nickels;
    $('#pennies').value = pennies;
}

document.addEventListener('DOMContentLoaded', function() {
    $('#calculate').addEventListener('click', processEntry);
});
