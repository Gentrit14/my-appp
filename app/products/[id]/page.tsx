import ProductClient from "./ProductClient";
import { notFound } from "next/navigation";
import { products } from "./data";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default function Page({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
