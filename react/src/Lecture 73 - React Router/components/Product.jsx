import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  if (!product)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          fontSize: "24px",
          fontWeight: "600",
          marginLeft:"20%"
        }}
      >
        Loading Product...
      </div>
    )

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        display: "flex",
        gap: "50px",
        alignItems: "center"
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "contain"
        }}
      />

      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#111827"
          }}
        >
          {product.title}
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "20px",
            color: "#4b5563"
          }}
        >
          {product.description}
        </p>

        <h3
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "25px",
            color: "#111827"
          }}
        >
          ₹ {product.price}
        </h3>

        <button
          style={{
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: "#111827",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product
