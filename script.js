// const annual_income = document.getElementById("annual_income");
// const extra_income = document.getElementById("extra_income");
// const deductions = document.getElementById("deductions");
// const age = document.getElementById("age");
// const submit = document.getElementById("submit");
// const form = document.getElementById("form");

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("form");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const annual_income_value = document.getElementById("annual_income").value;
//     const extra_income_value = document.getElementById("extra_income").value;
//     const deductions_value = document.getElementById("deductions").value;
//     const age_value = document.querySelector(".age").value;

//     console.log("annual_income_value", annual_income_value);
//     console.log("extra_income_value", extra_income_value);
//     console.log("deductions_value", deductions_value);
//     console.log("age_value", age_value);
//   });
// });

// const tooltipTriggerList = [].slice.call(
//   document.querySelectorAll('[data-bs-toggle="tooltip"]')
// );

// const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl);
// });

$(document).ready(function() {
  const $form = $("#form");
  const $annual_income = $("#annual_income");
  const $extra_income = $("#extra_income");
  const $deductions = $("#deductions");
  const $age = $("#age");

  $form.submit(function(event) {
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

  $('[data-bs-toggle="tooltip"]').tooltip();
});
