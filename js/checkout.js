// Exercise 6
const validate = (event) => {
  event.preventDefault();
  let error = 0;

  // Get the input fields
  const fName = document.getElementById("fName");
  const fEmail = document.getElementById("fEmail");
  const fAddress = document.getElementById("fAddress");
  const fLastName = document.getElementById("fLastN");
  const fPassword = document.getElementById("fPassword");
  const fPhone = document.getElementById("fPhone");

  // Get the error elements
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorAddress = document.getElementById("errorAddress");
  const errorLastName = document.getElementById("errorLastN");
  const errorPassword = document.getElementById("errorPassword");
  const errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  const onlyLetters = /^[A-Za-zÀ-ÿ\s]+$/;
  const onlyNumbers = /^[0-9]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Name
  if (fName.value.trim().length < 3 || !onlyLetters.test(fName.value.trim())) {
    error++;
    errorName.textContent = "Please enter a valid name (at least 3 letters).";
    fName.classList.add("is-invalid");
  } else {
    errorName.textContent = "";
    fName.classList.remove("is-invalid");
  }

  // Last Name
  if (
    fLastName.value.trim().length < 3 ||
    !onlyLetters.test(fLastName.value.trim())
  ) {
    error++;
    errorLastName.textContent =
      "Please enter a valid name (at least 3 letters).";
    fLastName.classList.add("is-invalid");
  } else {
    errorLastName.textContent = "";
    fLastName.classList.remove("is-invalid");
  }

  // Address
  if (fAddress.value.trim().length < 3) {
    error++;
    errorAddress.textContent =
      "Please enter a valid address (at least 3 characters).";
    fAddress.classList.add("is-invalid");
  } else {
    errorAddress.textContent = "";
    fAddress.classList.remove("is-invalid");
  }

  // Phone
  if (
    fPhone.value.trim().length < 3 ||
    !onlyNumbers.test(fPhone.value.trim())
  ) {
    error++;
    errorPhone.textContent =
      "Please enter a valid phone number (at least 3 digits).";
    fPhone.classList.add("is-invalid");
  } else {
    errorPhone.textContent = "";
    fPhone.classList.remove("is-invalid");
  }

  // Password
  if (
    fPassword.value.trim().length < 3 ||
    !passwordRegex.test(fPassword.value.trim())
  ) {
    error++;
    errorPassword.textContent =
      "Please enter a valid password (at least 3 characters, must contain letters and numbers).";
    fPassword.classList.add("is-invalid");
  } else {
    errorPassword.textContent = "";
    fPassword.classList.remove("is-invalid");
  }

  // Email
  if (fEmail.value.trim().length < 3 || !emailRegex.test(fEmail.value.trim())) {
    error++;
    errorEmail.textContent = "Please enter a valid email address.";
    fEmail.classList.add("is-invalid");
  } else {
    errorEmail.textContent = "";
    fEmail.classList.remove("is-invalid");
  }

  if (error > 0) {
    alert("Please fill in all required fields.");
  } else {
    alert("Form submitted successfully");
  }
};
