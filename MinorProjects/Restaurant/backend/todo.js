const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());


// product gallery with image selection
const products = [
  // 👟 SHOES (5)
  {
    id: 1,
    name: "Running Shoes",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    price: 2499
  },
  {
    id: 2,
    name: "Casual Sneakers",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    price: 2999
  },
  {
    id: 3,
    name: "Leather Shoes",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4",
    price: 3499
  },
  {
    id: 4,
    name: "Sports Shoes",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    price: 2799
  },
  {
    id: 5,
    name: "White Sneakers",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
    price: 3199
  },

  // 🩴 SANDALS (5)
  {
    id: 6,
    name: "Men Sandals",
    category: "sandals",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306",
    price: 999
  },
  {
    id: 7,
    name: "Women Sandals",
    category: "sandals",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    price: 1199
  },
  {
    id: 8,
    name: "Leather Sandals",
    category: "sandals",
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61",
    price: 1499
  },
  {
    id: 9,
    name: "Flat Sandals",
    category: "sandals",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
    price: 899
  },
  {
    id: 10,
    name: "Strap Sandals",
    category: "sandals",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
    price: 1099
  },

  // 🩱 CHAPPALS (5)
  {
    id: 11,
    name: "Rubber Chappal",
    category: "chappals",
    image: "https://images.unsplash.com/photo-1624006389438-c03488175975",
    price: 399
  },
  {
    id: 12,
    name: "Daily Wear Chappal",
    category: "chappals",
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
    price: 349
  },
  {
    id: 13,
    name: "Men Flip Flops",
    category: "chappals",
    image: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece3d",
    price: 499
  },
  {
    id: 14,
    name: "Women Chappal",
    category: "chappals",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    price: 459
  },
  {
    id: 15,
    name: "Comfort Chappal",
    category: "chappals",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
    price: 399
  },

  // ☂️ UMBRELLA (5)
  {
    id: 16,
    name: "Black Umbrella",
    category: "umbrella",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    price: 699
  },
  {
    id: 17,
    name: "Rain Umbrella",
    category: "umbrella",
    image: "https://images.unsplash.com/photo-1527766833261-b09c3163a791",
    price: 799
  },
  {
    id: 18,
    name: "Compact Umbrella",
    category: "umbrella",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    price: 649
  },
  {
    id: 19,
    name: "Color Umbrella",
    category: "umbrella",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    price: 899
  },
  {
    id: 20,
    name: "Windproof Umbrella",
    category: "umbrella",
    image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c",
    price: 999
  },

  // 🌧️ RAINCOAT (5)
  {
    id: 21,
    name: "Yellow Raincoat",
    category: "raincoat",
    image: "https://images.unsplash.com/photo-1503455637927-730bce8583c0",
    price: 1999
  },
  {
    id: 22,
    name: "Men Raincoat",
    category: "raincoat",
    image: "https://images.unsplash.com/photo-1520975922284-9a1c8f32b4f4",
    price: 2199
  },
  {
    id: 23,
    name: "Women Raincoat",
    category: "raincoat",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    price: 2299
  },
  {
    id: 24,
    name: "Hooded Raincoat",
    category: "raincoat",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    price: 2499
  },
  {
    id: 25,
    name: "Waterproof Jacket",
    category: "raincoat",
    image: "https://images.unsplash.com/photo-1516822003754-cca485356ecb",
    price: 2799
  }
];

app.get("/products",(req,res)=>res.json(products));

const PORT=5001;
app.listen(PORT,()=>console.log(`🚀 Server running at http://localhost:${PORT}`))