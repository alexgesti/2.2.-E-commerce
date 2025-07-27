// Exercise 6
const validate = (event) => {
  event.preventDefault();
  let error = 0;

  const fields = [
    {
      input: document.getElementById("fName"),
      errorEl: document.getElementById("errorName"),
      regex: /^[A-Za-zÀ-ÿ\s]+$/,
      minLength: 3,
      msg: "Please enter a valid name (at least 3 letters).",
    },
    {
      input: document.getElementById("fLastN"),
      errorEl: document.getElementById("errorLastN"),
      regex: /^[A-Za-zÀ-ÿ\s]+$/,
      minLength: 3,
      msg: "Please enter a valid name (at least 3 letters).",
    },
    {
      input: document.getElementById("fAddress"),
      errorEl: document.getElementById("errorAddress"),
      minLength: 3,
      msg: "Please enter a valid address (at least 3 characters).",
    },
    {
      input: document.getElementById("fPhone"),
      errorEl: document.getElementById("errorPhone"),
      regex: /^[0-9]+$/,
      minLength: 3,
      msg: "Please enter a valid phone number (at least 3 digits).",
    },
    {
      input: document.getElementById("fPassword"),
      errorEl: document.getElementById("errorPassword"),
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      minLength: 3,
      msg: "Please enter a valid password (at least 3 characters, must contain letters and numbers).",
    },
    {
      input: document.getElementById("fEmail"),
      errorEl: document.getElementById("errorEmail"),
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      minLength: 3,
      msg: "Please enter a valid email address.",
    },
  ];

  fields.forEach(({ input, errorEl, regex, minLength, msg }) => {
    const value = input.value.trim();
    const isValidLenght = value.length >= (minLength || 0);
    const isValidRegex = regex ? regex.test(value) : true;

    if (!isValidLenght || !isValidRegex) {
      errorEl.textContent = msg;
      input.classList.add("is-invalid");
      error++;
    } else {
      errorEl.textContent = "";
      input.classList.remove("is-invalid");
    }
  });

  alert(
    error > 0
      ? "Please fill in all required fields."
      : "Form submitted successfully"
  );
};
