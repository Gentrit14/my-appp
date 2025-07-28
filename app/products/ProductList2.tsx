// app/products/page.tsx
import Link from "next/link";
import Image from "next/image";
import { products } from "./[id]/data";

export default function ProductList2() {
  return (
    <div className="bg-white mb-40 mt-30">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl pb-15 tracking-tight text-gray-900 sm:text-5xl">
          Some of Our Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 text-left gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <Image
                alt={product.imageAlt}
                src={product.imageSrc}
                // me StaticImport width/height s’janë të detyrueshme, po mund t’i japim për siguri
                width={600}
                height={600}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}€</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
