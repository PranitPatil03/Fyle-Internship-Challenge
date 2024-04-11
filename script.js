$(document).ready(function () {
  const $form = $("#form");
  const $annualIncome = $("#annual_income");
  const $extraIncome = $("#extra_income");
  const $deductions = $("#deductions");
  const $age = $("#age");

  function calculateTax(annualIncome, extraIncome, deductions, age) {
    const taxRates = {
      under40: 0.3,
      "40to60": 0.4,
      over60: 0.1,
    };

    const overallIncome = annualIncome + extraIncome - deductions;
    const taxPercentage = taxRates[age];

    if (overallIncome > 800000) {
      const tax = taxPercentage * (overallIncome - 8);
      return overallIncome - tax;
    } else {
      return overallIncome;
    }
  }

  $form.submit(function (event) {
    event.preventDefault();

    const annualIncome = parseFloat($annualIncome.val());
    const extraIncome = parseFloat($extraIncome.val());
    const deductions = parseFloat($deductions.val());
    const age = $age.val();

    const afterTaxIncome = calculateTax(
      annualIncome,
      extraIncome,
      deductions,
      age
    );

    $("#result").text(afterTaxIncome.toFixed(2));
  });

  function checkRequiredFields() {
    var isValid = true;
    $("#form :input[required]").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
  
    $("#submit").prop("disabled", !isValid);
  }
  
  checkRequiredFields();
  
  $("#form :input[required]").on("input", function () {
    checkRequiredFields();
  });
  
  $('[data-bs-toggle="tooltip"]').tooltip();
});
