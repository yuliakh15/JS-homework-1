function needAction() {
  const fullNameEl = document.getElementById("fullName");
  const ageEl = document.getElementById("age");
  const weightEl = document.getElementById("weight");
  const heightEl = document.getElementById("height");

  const age = ageEl.value;
  const height = heightEl.value;
  const weight = weightEl.value;
  const fullName = fullNameEl.value;

  if (age < 18 || age > 60) {
    console.log("Sorry, you are not eligible for the program by your age");
  } else if (weight < 60 || weight > 120) {
    console.log("Sorry, you are not eligible for the program be your weight");
  } else if (height < 160 || height > 195) {
    console.log("Sorry, you are not eligible for the program by your height");
  } else {
    console.log("Congrats! Your registration form has been submitted");
    fullNameEl.value = "";
    ageEl.value = "";
    weightEl.value = "";
    heightEl.value = "";
  }
}

function submit() {
  const fullNameEl = document.getElementById("fullName");
  const fullName = fullNameEl.value;
}
