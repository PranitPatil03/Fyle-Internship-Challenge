$(document).ready(function () {
  const $form = $("#form");
  const $annualIncome = $("#annual_income");
  const $extraIncome = $("#extra_income");
  const $deductions = $("#deductions");
  const $age = $("#age");

  function calculateTax(annualIncome, extraIncome, deductions, age) {
    const taxRates = {
      1: 0.3,
      2: 0.4,
      3: 0.1,
    };

    let overallIncome = annualIncome + extraIncome - deductions;
    let taxPercentage = taxRates[age];

    let tax = 0;

    if (overallIncome > 800000) {
      tax = taxPercentage * (overallIncome - 8);
      return {
        overallIncome: overallIncome - tax,
        tax: tax,
      };
    } else {
      return {
        overallIncome: overallIncome,
        tax: tax,
      };
    }
  }

  $form.submit(function (event) {
    event.preventDefault();

    const annualIncome = parseFloat($annualIncome.val());
    const extraIncome = parseFloat($extraIncome.val());
    const deductions = parseFloat($deductions.val());
    const age = $age.val();

    let taxResult = calculateTax(annualIncome, extraIncome, deductions, age);

    const afterTaxIncome = taxResult.overallIncome;
    const tax = taxResult.tax;

    $("#result").text(afterTaxIncome.toFixed(2));
    $("#calTax").text(tax.toFixed(2));
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
