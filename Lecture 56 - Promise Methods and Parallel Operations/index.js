/*
Promises 4 Methods:All takes array of promises and  return a Promise
-Promise.all(p1,p2,p3)->
  -if all promises are resolved then this is resolved.else it is rejected
  -if any of them is failed,it gets rejected
  -if any of them fails then the rest of promises still goes on but is ignored by .all
  eg.1.Dashboard data and then chart filling through it
     2.Individual registration before group registration in hackathon


-Promise.allSettled(p1,p2,p3)->
  -implemented after every promise is being implemented
  and returns in array form the implementations
  -no catch block required
  -fulfilled-value
  -rejected-reason
  resolve or reject
   eg.1.bulk emailing 
      2.report generation of success and failure

-Promise.race(p1,p2,p3)->
  -returns 1st settled promise
  -if no promise is resolved,it returns 1st rejected promise
  in this case rest are being implemented but ignored by javascript
  eg.1.setTimeOut for a time period for any promise to be resolved 
     2.getting 1st country server of many 
     3.setTimeOut for CDN to access data else going for server's data


-Promise.any(p1,p2,p3)->
  -return 1st resolved promise
  -rest are been implemented in background ignored by javascript
  -if all rejected,gives aggregated error of all promises
  eg.1.getting 1st country server of many 
     2.Trying multiple approaches for a problem,whichever returns 1st gets returned


     bodyUsed IMP
*/

function p1(){
    return new Promise((resolve,reject)=>{
        fetch("https://fakestoreapi.com/products/1")
        .then((response)=>{
            console.log("fakeStore API",response);
            return response.json();
        })
        .then((data)=>{resolve(data)})
        .catch(err=>reject(err))
    })
}

function p2(){
    return new Promise((resolve,reject)=>{
        fetch("https://dummyjson.com/products/1")
        .then((response)=>{
            if(!response.ok)reject("Failed to call the API")
            console.log("dummyJSON API",response);
            return response.json();
        })
        .then((data)=>{resolve(data)})
        .catch(err=>reject(err))
    })
}

Promise.all([p1(),p2()])
    .then((response)=>console.log("Promise.all",response))
    .catch(err=>console.log(err))


function p3(){
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
}

const p4=Promise.reject("Dummy API");
const p5=Promise.reject("Dummy API");
const p6=Promise.reject("Dummy API");
const p7=Promise.reject("Dummy API");
const p8=new Promise((resolve)=>{
    (setTimeout(()=>{
        resolve("Resolve after 5 sec delay")
    },5000))
})


Promise.race([p1(),p2(),p3(),p4])
    .then((response)=>console.log(response))
    .catch((err)=>console.log("Promise race",err))


// Promise.any([p1(),p2(),p3(),p4])
// .then((response)=>console.log("Promise.any",response))
// .catch((err)=>console.log(err))

Promise.any([p4,p5,p6,p7])
.then((response)=>console.log("Promise.any",response))
.catch((err)=>console.log(err.errors))


const fulfilled=[];
const rejected=[];
Promise.allSettled([p1(),p2(),p3(),p4,p5,p6,p7,p8])
.then((results)=>{
    console.log("ResultsPromise AllSettled",results);
    results.forEach((result)=>{
      if(result.status=="fulfilled"){
        fulfilled.push(result.value);
      }
      else{
        rejected.push(result.reason)
      }
    })
})
.finally(()=>{
    console.log({fulfilled});
    console.log({rejected})
})



function fetchFromAsiaServer(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         resolve("Resolved in Asia after 3 sec")
        },3000)
    })
}


function fetchFromEUServer(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         resolve("Resolved in EU after 1 sec")
        },1000)
    })
}


function fetchFromUSServer(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
         resolve("Resolved in US after 2 sec")
        },2000)
    })
}

function fastestFromServer(){
    return Promise.any(
      fetchFromAsiaServer(),
      fetchFromEUServer(),
      fetchFromUSServer(),
    )
}

fastestFromServer()
.then((response)=>{
    console.log("Promise.any()",response)
})
.catch((error)=>{
    console.log("Promise.any() errros",error.errors)
})



function timeout(ms){
    return new Promise((_,reject)=>{
        setTimeout(()=>{
            reject(`More than ${ms} seconds for implementation`);
        },ms)
    })
}

function fetchPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts?_delay=2000")
}

function fetchPostsWithTimeOut(ms){
    return Promise.race([fetchPosts(),timeout(ms)]);
}

fetchPostsWithTimeOut(150)
.then((response)=>{
    console.log("fetchPostsWithTimeOut",response);
})
.catch((err)=>console.log(err.errors))
