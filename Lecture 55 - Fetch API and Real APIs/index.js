const img=document.querySelector("img");


//by default get request
fetch("https://dog.ceo/api/breeds/image/random")
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((response)=>{
    console.log(response);
    if(response.status==="Error"){
        throw new Error(response.message);
    }
    img.src=response.message;
})
.catch((err)=>{
    console.log(err);
})

const dummyData={
    title:"I am tanmay",
    userId:5
}

fetch('https://dummyjson.com/posts/add',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(dummyData),
})
.then(res=>console.log(res))
.catch(err=>console.log(err));


const ulEle=document.querySelector("ul");

const cards=document.querySelector(".cards");


function fetchProduct(productId){
    fetch(`https://dummyjson.com/products/${productId}`)
.then(res=>res.json())

.then((response)=>{
    console.log(response)
    if(!response.title){
        throw new Error(response.message);
    }

  const divEle=document.createElement("div");
  divEle.classList.add("product");
  divEle.innerHTML=
  `<div>
  <p>${response.brand}</p>
  <p>${response.description}</p>
  <p>${response.price}</p>
  <img src=${response.images[0]}>
  <p>${response.title}</p>
  </div>`;
  cards.appendChild(divEle);
})
.catch(err=>console.log(err))
}

fetchProduct(1);
fetchProduct(2);
fetchProduct(3);
fetchProduct(4);
// fetchProduct(-1);
//Error: Post with id '-1' not found