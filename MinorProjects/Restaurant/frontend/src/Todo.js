import React, { useState, useEffect } from "react";

const SIZES = ["S", "M", "L", "XL"];
const COLORS = ["Black", "White", "Blue"];

function Todo() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleOptionChange = (id, field, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const addToCart = (product) => {
    const options = selectedOptions[product.id];
    if (!options?.size || !options?.color) {
      alert("Enter size and color");
      return;
    }

    const existing = cart.find(
      (item) =>
        item.id == product.id &&
        item.size == options.size &&
        item.color == options.color,
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item == existing ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          size: options.size,
          color: options.color,
          qty: 1,
        },
      ]);
    }
  };

  const updateQty = (index, delta) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === index ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

const total=cart.reduce((sum,item)=>sum+item.qty*item.price,0);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* PRODUCTS */}
      <div style={{ flex: 3 }}>
        <h2>🛍️Products</h2>

        {products.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}
          >
            <img src={item.image} alt={item.name} width="120" />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            {/* SIZE */}
            <select
              onChange={(e) => {
                handleOptionChange(item.id, "size", e.target.value);
              }}
            >
              <option value="">Select Size</option>
              {SIZES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            {/* COLOR */}
            <select
              onChange={(e) =>
                handleOptionChange(item.id, "color", e.target.value)
              }
            >
              <option value="">Select Color</option>
              {COLORS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <br />
            <br />
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* CART SIDEBAR */}
      <div style={{ flex: 1, borderLeft: "2px solid #eee", paddingLeft: 20 }}>
        <h2>🛒 Cart</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <strong>{item.name}</strong>
            <p>
              {item.size} | {item.color}
            </p>
            <p>
              ₹{item.price} × {item.qty}
            </p>

            <button onClick={() => updateQty(index, -1)}>-</button>
            <button onClick={() => updateQty(index, 1)}>+</button>
          </div>
        ))}
        <hr />
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
}

export default Todo;
