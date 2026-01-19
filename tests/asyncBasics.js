// 1.
// A social media company, "SocialConnect", wants to implement a feature that allows users to upload multiple images at once. The system should first validate the images, then resize them, and finally upload them to the server. The validation process takes 2 seconds per image, resizing takes 1 second per image, and uploading takes 3 seconds per image. The company wants to ensure that these processes are executed in a sequential manner for each image.
// Write a JavaScript code snippet using Promise Chaining to achieve this functionality. Assume that you have three functions: validateImage(image), resizeImage(image), and uploadImage(image) which return promises that resolve when the respective operations are complete.
// You can use the following code stub as a starting point:
// const images = [...]; // array of image objects
// images.forEach((image) => {
//   // your implementation here
// });
// Note: You can assume that the validateImage, resizeImage, and uploadImage functions are already implemented and available for use.


// My answer:
// const images=[...];
// async function implement(){
// images.forEach((image)=>{
// 	await validateImage(image);
// 	await resizeImage(image);
// 	await uploadImage(image);
// })
// }
// function timeOut(ms){
// 	return setTimeOut((_,reject)=>{
//         reject("Image Validation not done till now")
// 	},ms)
// }
// Promise.race([validateImage(image),timeOut(2000)])
// .then((res)=>return res.json())
// .then(console.log(res));
// .catch(console.log(error));
// Promise.race([resizeImage(image),timeOut(1000)])
// .then((res)=>return res.json())
// .then (console.log(res));
// .catch(console.log(error));
// Promise.race([uploadImage(image),timeOut(3000)])
// .then((res)=>return res.json())
// .then(console.log(res));
// .catch(console.log(error));
//  implement();


// Correct Answer:
const images=[...image];
images.forEach((image)=>{
    validateImage(image)
    .then((validateImage)=>{
        console.log("Validating image for ",image);
        return validateImage(image);
    })
    .then((resizeImage)=>{
      console.log("resizing Image for",image);
      return resizeImage(image);
    })
    .then((uploadImage)=>{
      console.log("Uploading Image",image);
    })
    .catch((err)=>{
       console.log("error",err);
    })
})



// 2.
// Here is a social media company, “SocialBuzz”, that wants to handle spam posts automatically. You are given an array of posts:
// const posts = [
//   { id: 1, markedAsSpam: true },
//   { id: 2, markedAsSpam: false },
//   { id: 3, markedAsSpam: true }
// ];
// You also have two inbuilt functions:
// function DELETE(postId) {
//   console.log(`Post ${postId} deleted.`);
// }
// function SEND_EMAIL(postId) {
//   console.log(`Email sent: Post ${postId} will be deleted soon.`);
// }
// Your Task is to write a JavaScript code that loops through the posts array and checks if a post is marked as spam.
//  If a post is spam, schedule its deletion after 30 minutes using setTimeout. Every 10 minutes, send an email to notify the user
//  until the post is deleted. Once the post is deleted, stop sending emails.
// Write your JavaScript code to achieve this functionality.

//My Answer
// function timeout(id){
// 	let t=setTimeOut(()=>{
//       DELETE(id);
// 	},1800000)
// 	clearTimeOut(t);
// }
// function emailNotify(id){
// 	let time=0;
// 	while(time<3){
// 		time++;
// 		let t=setInterval(()=>{
//            SEND_EMAIL(id);
// 		},600000)
// 		clearInterval(t);
// 	}
// }
// for(let i=0;i<posts.length;i++){
// 	if(posts[i].markedSpam=="true"){
// 		timeout(posts[i]);
// 		emailNotify(posts[i]);
// 	}
// }

//Correct Answer
const posts = [
  { id: 1, markedAsSpam: true },
  { id: 2, markedAsSpam: false },
  { id: 3, markedAsSpam: true }
];
function DELETE(postId) {
  console.log(`Post ${postId} deleted.`);
}
function SEND_EMAIL(postId) {
  console.log(`Email sent: Post ${postId} will be deleted soon.`);
}

posts.forEach((post)=>{
    const emailInterval=setInterval(()=>{
      SEND_EMAIL(post.id);
    },10*60*1000);

    setTimeout(()=>{
      DELETE(post.id);
      clearInterval(emailInterval);
    },30*60*1000)
})


// 3.
// A social media company, "SocialConnect", wants to display the list of trending topics on its homepage.
//  The trending topics are fetched from a third-party API, "TrendyAPI", which provides a GET endpoint
//  to retrieve the list of trending topics. The API returns the data in JSON format. The company wants to display
//  the trending topics in a table on its homepage.
// The TrendyAPI GET endpoint is: https://trendyapi.com/topics
// The response from the API is in the following format:
// {
//   "topics": [
//     {
//       "id": 1,
//       "name": "Topic 1",
//       "description": "Description of Topic 1"
//     },
//     {
//       "id": 2,
//       "name": "Topic 2",
//       "description": "Description of Topic 2"
//     },
//     ...
//   ]
// }
// Write a JavaScript code snippet that fetches the data from the TrendyAPI using fetch and displays the list of trending topics
//  in an HTML table using DOM manipulation.
// Assume that you have an HTML file with a <table> element with an id trending-topics-table. You need to populate this table 
// with the data fetched from the API.
// Note: You can use any JavaScript library or framework to achieve this, but it should be compatible with modern browsers.

//My Answer
// const table=document.querySelector("#trending-topics-table");
// let response={};
// fetch(`https://trendyapi.com/topics`)
// .then((res)=>return res.json());
// .then(response=res);
// .catch((err)=>console.log(err.errors));
// const tableTitle=document.createElement("th");
// tableTitle.textContent="topics";
// table.appendChild(tableTitle);
// for(let i=0;i<response["topics"]length;i++){
//     let tr=document.createElement("tr");
// 	let td=document.createElement("td");
// 	td.innerHTML=`
// 	${response["topics[i].id]},
// 	${response["topics[i].name]},
// 	${response["topics[i].description]}
// 	`;
// 	tr.appendChild(td);
// 	table.appendChild(tr);
// }

//Correct Answer
const table = document.getElementById("trending-topics-table");
// Create table header
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
["ID", "Name", "Description"].forEach(text => {
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);
// Create table body
const tbody = document.createElement("tbody");
table.appendChild(tbody);

fetch("https://trendyapi.com/topics")
.then(response=>response.json())
.then(data=>{
    data.topics.forEach((topic)=>{
        const tr=document.createElement("tr");
        const tdID=document.createElement("td");
        tdID.textContent=topic.id;

        const tdName=document.createElement("td");
        tdName.textContent=topic.name;

        const tdDesc=document.createElement("td");
        tdDesc.textContent=topic.description;

        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tdDesc);

        tbody.appendChild(tr);
    })
})
.catch((error)=>{
    console.log("Error fetching data",error);
})