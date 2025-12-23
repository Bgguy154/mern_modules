const ulEle=document.querySelector("ul");

const cards=document.querySelector(".cards");
const spinner=document.querySelector(".spinner");


function fetchProduct(productId){
  return  fetch(`https://dummyjson.com/products/${productId}`)
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

const promises=[];
for(let i=0;i<30;i++){
    promises.push(fetchProduct(i+1));
}

Promise.all(promises)
.then(()=>{ console.log("All posts loaded");})
.catch(err=>console.log(err))
.finally(()=>{
   spinner.style.display="none";
})

//“We show the loader before the async operation and hide it in finally because it runs regardless of success or failure.”