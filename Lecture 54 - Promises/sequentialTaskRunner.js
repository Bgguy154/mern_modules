// A sequential task runner:
// -runs async tasks one after another
// -next task starts only if previous succeeds
// -stops immediately on error

const user = {
  email: "t@gmail.com",
  password: "12345",
  age: 22
};

function validateEmail(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user.email.includes("@")) {
        reject("Invalid email");
      } else {
        resolve(user);
      }
    }, 500);
  });
}

function validatePassword(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.password.length < 6) {
        reject("Password too short");
      } else {
        resolve(user);
      }
    }, 500);
  });
}

function validateAge(user) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
         if(age<18){
            reject("U are small");
         }
         else{
            resolve(user);
         }
    },500)
  })
}


// validateEmail(user)
// .then(validatePassword)
// .then(validateAge)
// .then((data)=>{
//     console.log("All validations passed");
//     console.log("Saving data to db");
// })
// .catch((err)=>{
//     console.log("Validation failed:", err);
// })


// .then(fn) → Promise passes result into fn automatically
// .then(fn()) → fn runs immediately (WRONG)



// Alternate Method 

function runSequential(tasks,input){
    return tasks.reduce((prev,task)=>{
        return prev.then(task);
    },Promise.resolve(input));
}

// 1. `Promise.resolve(input)` creates the first resolved Promise to start the chain.
// 2. `reduce` builds a chain by doing `prev.then(task)` so each task runs **after** the previous one finishes.
// 3. The function returns one Promise that resolves to the final result or rejects if any task fails.




const tasks = [
  validateEmail,
  validatePassword,
  validateAge
];

runSequential(tasks, user)
  .then(() => {
    console.log("All validations passed");
  })
  .catch((err) => {
    console.log("Error:", err);
  });


//   This pattern is used in:
// -form validation pipelines
// -middleware systems
// -job queues
// -build tools
