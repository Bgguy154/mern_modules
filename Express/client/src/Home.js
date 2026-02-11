import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000", { msg });
      alert("submitted");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <textarea
          placeholder="Enter msg"
          onChange={(e) => setMsg(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Home;
