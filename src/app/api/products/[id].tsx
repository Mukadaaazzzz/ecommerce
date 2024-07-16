import { NextApiRequest, NextApiResponse } from "next";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: 100,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: 200,
    image: "/images/product2.jpg",
  },
  // Add more products as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = products.find((p) => p.id === parseInt(id as string));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}
