import { useEffect, useState } from "react";

const TAX_RATE = 0.05; // 5%

function App() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

const addToOrder=(item)=>{
    const existing=order.find(i=>i.id==item.id);

    if(existing){
        setOrder(order.map(i=>{
            i.id===item.id?{...i,qty:i.qty+1}:i
        }))
    }
    else{
        setOrder([...order,{qty:1}])
    }
}

const updateQty=(id,delta)=>{
    setOrder(order.map(item.id===id?{...item,qty:item.qty+delta}:item)
    .filter(item=>item.qty>0))
}

const subtotal=order.reduce(
    (sum,item)=>sum+item.price*item.qty,0
)
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div style={{ padding: 20 }}>
      <h2>🍽 Restaurant Menu</h2>

      <h3>Menu</h3>
      {menu.map(item=>{
        <div key={item.id}>
            {item.name} - ₹{item.price}
            <button onClick={()=>addToOrder(item)}></button>
        </div>
      })}

      <hr />

      <h3>🛒 Order Summary</h3>
      {order.length === 0 && <p>No items added</p>}

      {order.map(item=>{
        <div>
            {item.name} (₹{item.price})
            <button onClick={()=>updateQty(item.id,-1)}>-</button>
            {item.qty}
            <button onClick={()=>updateQty(item.id,1)}>+</button>
        </div>
      })}

      <hr />

      <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
      <p>Tax (5%): ₹{tax.toFixed(2)}</p>
      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

export default App;
