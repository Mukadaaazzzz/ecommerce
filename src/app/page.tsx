// src/app/page.tsx

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3001/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

const Home = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Welcome to Our Store
        </h1>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
