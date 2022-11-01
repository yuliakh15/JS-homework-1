const fullNameEl = document.getElementById("fullName");
const ageEl = document.getElementById("age");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");

function needAction() {
  const age = ageEl.value;
  const height = heightEl.value;
  const weight = weightEl.value;
  const fullName = fullNameEl.value;

  if (age < 18 || age > 60) {
    alert("Sorry, you are not eligible for the program by your age");
  } else if (weight < 60 || weight > 120) {
    alert("Sorry, you are not eligible for the program be your weight");
  } else if (height < 160 || height > 195) {
    alert("Sorry, you are not eligible for the program by your height");
  } else {
    alert(fullName + " Congrats! Your registration form has been submitted");
    clearData();
  }
}

function clearData() {
  fullNameEl.value = "";
  ageEl.value = "";
  weightEl.value = "";
  heightEl.value = "";
}
