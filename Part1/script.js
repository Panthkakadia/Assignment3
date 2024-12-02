function $(selector) {
    return document.querySelector(selector);
}

function processEntries() {
    // Get user entries
    var subtotal = parseFloat($('#subtotal').value);
    var taxRate = parseFloat($('#tax_rate').value);

    // Data validation
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert('Subtotal must be > 0 and < 10000');
        $('#subtotal').focus();
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert('Tax Rate must be > 0 and < 12');
        $('#tax_rate').focus();
        return;
    }

    // Calculate sales tax and total
    var salesTax = subtotal * (taxRate / 100);
    salesTax = parseFloat(salesTax.toFixed(2));
    var total = subtotal + salesTax;
    total = parseFloat(total.toFixed(2));

    // Display results
    $('#sales_tax').value = salesTax;
    $('#total').value = total;

    // Move cursor to Subtotal field
    $('#subtotal').focus();
}

function clearSubtotal() {
    $('#subtotal').value = '';
}

function clearTaxRate() {
    $('#tax_rate').value = '';
}

function clearForm() {
    clearSubtotal();
    clearTaxRate();
    $('#sales_tax').value = '';
    $('#total').value = '';
    $('#subtotal').focus();
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach event handlers
    $('#calculate').addEventListener('click', processEntries);
    $('#clear').addEventListener('click', clearForm);
    $('#subtotal').addEventListener('click', clearSubtotal);
    $('#tax_rate').addEventListener('click', clearTaxRate);

    // Move cursor to Subtotal field on startup
    $('#subtotal').focus();
});
