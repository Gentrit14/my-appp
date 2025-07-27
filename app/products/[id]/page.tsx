import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            width={800}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-2xl text-primary font-semibold">{product.price}</p>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">{product.description || "No description available."}</p>

          {/* Highlights */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Highlights</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.highlights?.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="mt-8 border-t pt-6 text-gray-700 text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Details</h2>
            <p>{product.details}</p>
          </div>

          {/* Add to Cart Button (shembull) */}
          <Link href="/error">
          <Button className="mt-15" 
            
          >
            Add to Cart
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
