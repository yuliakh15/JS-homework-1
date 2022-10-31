function needAction() {
  const fullName = "Anonym";
  const age = 20;
  const weight = 100;
  const height = 170;

  if (age < 18 && age > 60) {
    console.log("Sorry, you are not eligible for the program");
  } else if (weight < 60 && weight > 120) {
    console.log("Sorry, you are not eligible for the program");
  } else if (height < 160 && height > 195) {
    console.log("Sorry, you are not eligible for the program");
  } else {
    console.log("Congrats! Your registration form has been submitted");
  }
}

function submit() {
  const fullNameEl = document.getElementById("fullName");
  const fullName = fullNameEl.value;
}
