import React, { useState } from 'react';

function ApiCall() {
  const [resp, setResp] = useState("");

  //easier way
//   function getData() {
//     setResp("https://picsum.photos/seed/picsum/450/300");
//   }

async function getData() {
     try {
      const response = await fetch("https://picsum.photos/id/77/450/300");
      setResp(response.url);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
}

  return (
    <div>
      <button onClick={getData}>Click me</button>
      {resp && <img src={resp} alt="Random" />}
    </div>
  );
}

export default ApiCall;
