"use client";

import Image from "next/image";
import { useCartStore } from "@/lib/cartStore";
import { Button } from "@/components/ui/button";

export default function ProductClient({ product }: { product: any }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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

        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {product.name}
          </h1>
          <p className="mt-2 text-2xl text-primary font-semibold">
            €{product.price}
          </p>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            {product.description || "No description available."}
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Highlights</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.highlights?.map((highlight: string, idx: number) => (
                <li key={`${highlight}-${idx}`}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t pt-6 text-gray-700 text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Details</h2>
            <p>{product.details}</p>
          </div>

          <Button
            className="mt-10 w-full"
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.name,
                price: Number(product.price),
                quantity: 1,
              })
            }
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
