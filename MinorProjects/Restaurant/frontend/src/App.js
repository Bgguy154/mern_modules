import { useEffect, useState, useMemo } from "react";
import Todo from "./Todo";

const TAX_RATE = 0.05; // 5%

function App() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch menu");
        return res.json();
      })
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    return ["All", ...new Set(menu.map((item) => item.category))];
  }, [menu]);

  // Filter menu based on selection
  const filteredMenu = useMemo(() => {
    return selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, menu]);

  const { subtotal, tax, total } = useMemo(() => {
    const sub = order.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tx = sub * TAX_RATE;
    return { subtotal: sub, tax: tx, total: sub + tx };
  }, [order]);

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existing = prevOrder.find((i) => i.id === item.id);
      if (existing) {
        return prevOrder.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prevOrder, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const styles = {
    container: {
      padding: 20,
      maxWidth: 500,
      margin: "auto",
      fontFamily: "sans-serif",
    },
    categoryBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "20px",
    },
    // Define the tab function correctly here
    tab: (isActive) => ({
      padding: "8px 16px",
      borderRadius: "20px",
      border: "1px solid #007bff",
      cursor: "pointer",
      backgroundColor: isActive ? "#007bff" : "white",
      color: isActive ? "white" : "#007bff",
      fontWeight: "bold",
      transition: "0.2s",
    }),
    card: {
      padding: "12px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
    },
    btn: {
      padding: "8px 16px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: "#28a745",
      color: "white",
      cursor: "pointer",
      fontWeight: "bold",
    },
    qtyBtn: {
      width: "32px",
      height: "32px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      cursor: "pointer",
    },
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        Loading delicious food...
      </div>
    );
  if (error)
    return (
      <div style={{ color: "red", textAlign: "center" }}>Error: {error}</div>
    );

  return (
    // <div style={styles.container}>
    //   <h2 style={{ textAlign: "center" }}>🍽 Restaurant Menu</h2>

    //   {/* Category Tabs */}
    //   <div style={styles.categoryBar}>
    //     {categories.map((cat) => (
    //       <button
    //         key={cat}
    //         onClick={() => setSelectedCategory(cat)}
    //         style={styles.tab(selectedCategory === cat)}
    //       >
    //         {cat}
    //       </button>
    //     ))}
    //   </div>

    //   <h3>{selectedCategory} Items</h3>
    //   {filteredMenu.map((item) => (
    //     <div key={item.id} style={styles.card}>
    //       <span>
    //         <strong>{item.name}</strong> – ₹{item.price}
    //       </span>
    //       <button style={styles.btn} onClick={() => addToOrder(item)}>
    //         Add
    //       </button>
    //     </div>
    //   ))}

    //   <hr style={{ margin: "30px 0" }} />

    //   <h3>🛒 Your Order</h3>
    //   {order.length === 0 ? (
    //     <p style={{ color: "#777", fontStyle: "italic" }}>
    //       Your cart is empty.
    //     </p>
    //   ) : (
    //     <>
    //       {order.map((item) => (
    //         <div key={item.id} style={styles.card}>
    //           <span>
    //             {item.name} (₹{item.price})
    //           </span>
    //           <div style={{ display: "flex", alignItems: "center" }}>
    //             <button
    //               style={styles.qtyBtn}
    //               onClick={() => updateQty(item.id, -1)}
    //             >
    //               -
    //             </button>
    //             <span style={{ margin: "0 12px", fontWeight: "bold" }}>
    //               {item.qty}
    //             </span>
    //             <button
    //               style={styles.qtyBtn}
    //               onClick={() => updateQty(item.id, 1)}
    //             >
    //               +
    //             </button>
    //           </div>
    //         </div>
    //       ))}

    //       <div
    //         style={{
    //           marginTop: 20,
    //           borderTop: "2px solid #eee",
    //           paddingTop: 10,
    //         }}
    //       >
    //         <div style={{ display: "flex", justifyContent: "space-between" }}>
    //           <span>Subtotal:</span> <span>₹{subtotal.toFixed(2)}</span>
    //         </div>
    //         <div style={{ display: "flex", justifyContent: "space-between" }}>
    //           <span>Tax (5%):</span> <span>₹{tax.toFixed(2)}</span>
    //         </div>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "space-between",
    //             fontSize: "1.2rem",
    //             fontWeight: "bold",
    //             marginTop: 10,
    //           }}
    //         >
    //           <span>Total:</span> <span>₹{total.toFixed(2)}</span>
    //         </div>
    //         <button
    //           style={{
    //             ...styles.btn,
    //             width: "100%",
    //             marginTop: 20,
    //             backgroundColor: "#007bff",
    //           }}
    //           onClick={() => alert("Order placed successfully!")}
    //         >
    //           Place Order
    //         </button>
    //       </div>
    //     </>
    //   )}
    // </div>
    <Todo />
  );
}

export default App;
