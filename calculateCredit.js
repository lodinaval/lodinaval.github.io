function calculateCredit() {
    var optionFee = parseInt(document.getElementById('optionFee').value);
    var monthsPaid = parseInt(document.getElementById('monthsPaid').value);

    var monthlyPayment = 1695; // Monthly lease payment
    var paymentReduction = 300; // Payment reduction due to option fee
    var monthlyCreditPercentage = 10; // 10% credit per lease payment

    // Calculate monthly payment after option fee reduction
    var paymentAfterOptionFee = monthlyPayment - paymentReduction;

    // Calculate credit for each month paid
    var monthlyCredit = (paymentAfterOptionFee * (monthlyCreditPercentage / 100)) * monthsPaid;

    // Calculate total credit
    var totalCredit = optionFee + monthlyCredit;

    // Display the result
    document.getElementById('totalCredit').innerText = 'Total Credit: $' + totalCredit.toFixed(2);
}
