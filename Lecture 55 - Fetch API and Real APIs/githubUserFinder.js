const result=document.getElementById("result");

async function getUser(){
  const username=document.getElementById("username").value;
  if(!username){
    result.innerHTML=`<p>Enter Username</p>`;
    return result;
  }
  try{
    const response=await fetch(`https://api.github.com/users/${username}`);
    if(!response.ok){
        throw new Error("User not found");
    }
    const data=await response.json();

    result.innerHTML=`
    <div class="card">
     <img src="${data.avatar_url}"/>
     <h2>${data.name || data.login}</h2>
     <p>${data.bio || "No bio available"}</p>

     <div class="stats">
      <span>👥 ${data.followers}</span>
      <span>➡️ ${data.following}</span>
      <span>📦 ${data.public_repos}</span>
     </div>

     <a href="${data.html_url}" target="_blank">View Profile</a>
     </div>
    `
  }
  catch(err){
    result.innerHTML=`<p>${err.message}</p>`
  }
}