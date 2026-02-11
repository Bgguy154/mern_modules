import { Link } from "react-router-dom"

function Products({ products, loading }) {
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          fontSize: "24px",
          fontWeight: "600"
        }}
      >
        Loading Products...
      </div>
    )

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "30px"
      }}
    >
      {products.map(product => (
        <div
          key={product.id}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            transition: "0.3s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              height: "160px",
              objectFit: "contain",
              marginBottom: "15px"
            }}
          />

          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "center",
              marginBottom: "10px",
              height: "50px",
              overflow: "hidden"
            }}
          >
            {product.title}
          </h3>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#111827"
            }}
          >
            ₹ {product.price}
          </p>

          <Link
            to={`/products/${product.id}`}
            style={{
              textDecoration: "none",
              backgroundColor: "#111827",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "500"
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products
