//Module solution of Callback Hell

// | Scenario                 | Use                |
// | ------------------------ | ------------------ |
// | Modern JS / React / Node | **async / await**  |
// | Parallel async work      | **Promise.all**    |
// | Old callback APIs        | **util.promisify** |
// | Legacy codebases         | `async` library    |
// | Event-heavy apps         | `rxjs`             |



function autoSaveTimer() {
  console.log("⏱ autosave tick");

  setTimeout(autoSaveTimer, 1000);
}
autoSaveTimer();

function resultHandler(err, data) {
  if (err) {
    console.error("❌ Error:", err);
  } else {
    console.log("✅ Success:", data);
  }
}

function saveForm() {
  savePersonalDetails();
}

function savePersonalDetails() {
  console.log("Saving personal details...");
  setTimeout(saveEducationalDetails, 1000);
}

function saveEducationalDetails() {
  console.log("Saving educational details...");
  setTimeout(saveWorkExperience, 1000);
}

function saveWorkExperience() {
  console.log("Saving work experience...");
  setTimeout(submitForm, 1000);
}

function submitForm() {
  resultHandler(null, "Form submitted successfully");
}

function fetchUser() {
  return Math.random() > 0.5
    ? { id: 1, name: "Raji" }
    : null;
}

function displayUser(cb) {
  setTimeout(() => {
    const user = fetchUser();

    if (!user) {
      cb("User not found", null);
    } else {
      cb(null, user);
    }
  }, 1000);
}

saveForm();
displayUser(resultHandler);
//Working of line 70 workflow 👇
//1. Calls the displayUser function immediately.
//2. Passes resultHandler as a callback function (function reference, not execution).
//3. Allows displayUser to run asynchronous code (via setTimeout).
//4. Tells displayUser which function to call after async work completes.
//5. Ensures success or error is handled outside displayUser using resultHandler.
