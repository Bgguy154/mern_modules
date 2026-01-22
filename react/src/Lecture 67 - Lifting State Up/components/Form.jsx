import React, { useState } from "react";
import "../css/form.css";
import Product from "./Products";

function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);

  function handleForm(e) {
    e.preventDefault();

    if (!name || !price || !qty || !desc) {
      alert("Enter all details");
      return;
    }

    if (price <= 0) {
      alert("Price should be greater than 0");
      return;
    }

    if (qty <= 0) {
      alert("Quantity should be greater than 0");
      return;
    }

    setData((prev) => [
      ...prev,
      {
        name,
        price: Number(price),
        qty: Number(qty),
        desc,
      },
    ]);

    setName("");
    setPrice("");
    setQty("");
    setDesc("");
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Quantity</label>
        <input
          type="number"
          placeholder="Enter quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <Product data={data} setData={setData}/>
    </>
  );
}

export default Form;
