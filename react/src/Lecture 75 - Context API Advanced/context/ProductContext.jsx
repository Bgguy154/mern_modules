import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(productId) {
    const cartProductIdx = cart.findIndex(
      (product) => product.id === productId
    );

    if (cartProductIdx !== -1) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const product = products.find((p) => p.id === productId);

      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: 1 },
      ]);
    }
  }

  function removeFromCart(productId){
    setCart((prevCart)=>
    prevCart
.map((item)=>item.id==productId?{...item,quantity:item.quantity-1}:item)
.filter((item)=>item.quantity>0));
  }

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); // important
    }

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, addToCart, cart ,removeFromCart}}>
      {children}
    </ProductContext.Provider>
  );
}
