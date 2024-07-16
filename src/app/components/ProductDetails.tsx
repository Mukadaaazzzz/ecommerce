import React from "react";

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

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0"
      />
      <div className="md:ml-8">
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-blue-600 font-bold text-2xl mb-4">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
