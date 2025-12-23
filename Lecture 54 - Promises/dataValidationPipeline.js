const user = {
  email: "test@gmail.com",
  password: "secret123",
  age: 22
};



function validateEmail(user, cb) {
  setTimeout(() => {
    if (!user.email.includes("@")) {
      cb("Invalid email");
    } else {
      cb(null, user);
    }
  }, 500);
}

function validatePassword(user, cb) {
  setTimeout(() => {
    if (user.password.length < 6) {
      cb("Password too short");
    } else {
      cb(null, user);
    }
  }, 500);
}

function validateAge(user,cb){
    setTimeout(()=>{
        if(user.age<18){
            cb("U are too small")
        }
        else{
            cb(null,user);
        }
    },500);
}

// validateEmail(user,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         validatePassword(user,(err,data)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 validateAge(user,(err,data)=>{
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         console.log("Data Validation done successfully");
//                         console.log("Saving user to DB...")
//                     }
//                 })
//             }
//         })
//     }
// })

// This creates callback hell



function onAgeValidated(err, data) {
  if (err) return console.log(err);
  console.log("All validations passed");
}

function onPasswordValidated(err, data) {
  if (err) return console.log(err);
  validateAge(data, onAgeValidated);
}

function onEmailValidated(err, data) {
  if(err) return console.log(err);
  validatePassword(data,onPasswordValidated);
}

validateEmail(user, onEmailValidated);



// “This code demonstrates a data validation pipeline using callbacks.
// Callback hell occurs when multiple async operations depend on each other, causing deeply nested callbacks.
// To reduce nesting, I used named callback functions, which flatten the structure but still rely on callbacks.
// This is one of the main reasons Promises and async/await were introduced.”