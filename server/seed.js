// seed.js
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/innovist");

const products = [
  {
    name: "Vitamin C Serum",
    description: "Brightens and reduces pigmentation.",
    image: "https://innovist.com/cdn/shop/files/Brightening_Face_Serum_910301d7-de8c-44b0-8c15-f0b82de3fd64.jpg?v=1772107374&width=1800",
    price: 799
  },
  {
    name: "Sunscreen SPF 50",
    description: "Protects against harmful UV rays.",
    image: "https://innovist.com/cdn/shop/files/2_7_c4affcb3-d717-4637-b297-e0981cb6c0cc_1.jpg?v=1756711896&width=1080",
    price: 499
  },
  {
    name: "Rosemary & Rice Water Hair Growth Spray ",
    description: "Rosemary & Rice Water Hair Growth Spray for Hair Growth & Thickness - 200 ml",
    image: "https://innovist.com/cdn/shop/files/Rosemary_Hair_Spray_New_Catalog-07.jpg?v=1761743401&width=1080",
    price: 299
  },
  {
    name: "Retinol Night Cream",
    description: "Reduces fine lines and wrinkles.",
    image: "https://innovist.com/cdn/shop/files/RetinolCatalogueF_1.jpg?v=1766766583&width=1080",
    price: 999
  },
  {
    name: "Face Wash Foam",
    description: "Deep cleans pores and removes dirt.",
    image: "https://innovist.com/cdn/shop/files/0_1.jpg?v=1758871403&width=1080",
    price: 349
  },
  {
    name: "Hyaluronic Acid Serum",
    description: "Provides intense skin hydration.",
    image: "https://innovist.com/cdn/shop/files/Card_1_1.jpg?v=1772107339&width=1080",
    price: 899
  },
  {
    name: "Charcoal Face Mask",
    description: "Detoxifies and removes impurities.",
    image: "https://www.vilvahstore.com/cdn/shop/files/Charcoal-Facemask_1.jpg?v=1692544609&width=1000",
    price: 399
  },
  {
    name: "Under Eye Cream",
    description: "Reduces dark circles and puffiness.",
    image: "https://innovist.com/cdn/shop/files/1_4_643b95cd-b69a-4f28-b8a3-ce1ed4a5142b.jpg?v=1759828001&width=1080",
    price: 599
  },
  {
    name: "Moisturizing Lotion",
    description: "Keeps skin soft and nourished.",
    image: "https://innovist.com/cdn/shop/files/FM---hydrating-tube3.jpg?v=1756545213&width=1080",
    price: 449
  },
  {
    name: "Lip Balm SPF 15",
    description: "Hydrates lips and protects from sun damage.",
    image: "https://innovist.com/cdn/shop/files/Card5_1da63050-9cce-4909-91a7-bab25bf8f86c_1.jpg?v=1757676481&width=1080",
    price: 199
  }
];

async function seed() {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Products Seeded");
  process.exit();
}

seed();