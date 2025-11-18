const users = [];

const button = document.querySelector("button");
const form = document.querySelector("form");
const c = document.querySelector("input[type=checkbox]");
const err = document.querySelector(".err");

// disable button at start
button.disabled = true;

// toggle button enable/disable when checkbox changes
c.addEventListener("change", () => {
  button.disabled = !c.checked; // enable only if checked
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  const user = {};
  user.name = document.querySelector("input[type=text]").value.trim();
  user.phone = document.querySelector("input[type=number]").value.trim();
  user.gender = document.querySelector("input[name=gender]:checked")?.value;
  user.consent = c.checked;
  user.city = document.querySelector("#city").value;


  // Reset previous error
  err.textContent = "";
  err.style.backgroundColor = "transparent";

  // Validation checks
  if (!user.name) {
    err.textContent = "Insert Name";
    button.disabled = true;
  } else if (!user.gender) {
    err.textContent = "Pick a Gender";
    button.disabled = true;
  } else if (!user.city) {
    err.textContent = "Choose a City";
    button.disabled = true;
  } else if (!user.phone) {
    err.textContent = "Enter Phone";
    button.disabled = true;
  } 
  if (err.textContent) {
    err.style.backgroundColor = "pink";
    err.style.color = "red";
    return;
  }

  users.push(user);
    console.log({ users });
  // err.textContent = "✅ Form submitted successfully!";
  err.style.color = "green";
  form.reset();
  button.disabled = true; // disable again after reset
});
