// const id=setInterval(()=>{
//    const date=Date.now();
//    let diff=Date.now()-date;
//    console.log("start")
//    while(diff<100){
//         diff=Date.now()-date;
//    }
//    console.log("end");
// },1000)

// setTimeout(()=>{
//   clearInterval(id);
// },2000)


function setIntervalUsingSetTimeout(){
   const date=Date.now();
   let diff=Date.now()-date;
   console.log("start");
   while(diff<5000){
        diff=Date.now()-date;
   }
   console.log("end");

   setTimeout(setIntervalUsingSetTimeout,1000);
}


function saveForm(callback){
    //callback hell or pyramid of doom
    //this is design error and not technical error

    // callback();
    // //code to save personal details
    // setTimeout(()=>{
    //      //code to save educattional details
    //      setTimeout(()=>{
    //           //      //code to save work experience details
                  //submit form
    //      },1000)
    // },1000)

    //soultion separate components
    savePersonaldetails();
}

function callback(){

}

saveForm(callback);


function savePersonaldetails(){
        // //code to save personal details
    setTimeout(saveEducationalDetails,1000);
}

function saveEducationalDetails(){
      //      //code to save educattional details
    setTimeout(saveWorkExperience,1000);  
}

function saveWorkExperience(){
    //           //      //code to save work experience details
                  //submit form
}




//callbacks for error handling

function callbackAsAnErrorHandler(error,data){
   if(error)console.error(error);
   else console.log(data);
}

function fetchUser(){
    return {id:1,name:"Raji"};
}

function displayUser(errorCallbackFn){
    setTimeout(()=>{
       const userDetails=fetchUser();

       if(userDetails){
        errorCallbackFn(null,userDetails);
       }
       else{
        errorCallbackFn("User not found",null);
       }
    },1000)
}

displayUser(callbackAsAnErrorHandler);


//modules for avoiding callback hell hw
//callbacks,setinterval,settiemout mdn hw
//error checking in form hw


