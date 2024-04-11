$(document).ready(function () {
  const $form = $("#form");
  const $annual_income = $("#annual_income");
  const $extra_income = $("#extra_income");
  const $deductions = $("#deductions");
  const $age = $("#age");

  $form.submit(function (event) {
    event.preventDefault();

    const annual_income_value = $annual_income.val();
    const extra_income_value = $extra_income.val();
    const deductions_value = $deductions.val();
    const age_value = $age.val();

    console.log("annual_income_value", annual_income_value);
    console.log("extra_income_value", extra_income_value);
    console.log("deductions_value", deductions_value);
    console.log("age_value", age_value);
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
