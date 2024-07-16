import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductDetails from "../../components/ProductDetails";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductDetailsProps {
  product: Product;
}

const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`http://localhost:3001/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
};

const ProductPage: React.FC<ProductDetailsProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3001/products");
  const products: Product[] = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  return {
    props: { product },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

export default ProductPage;
