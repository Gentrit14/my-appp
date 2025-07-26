import Card1 from '@/public/assets/img/card1.jpg'
import Card2 from '@/public/assets/img/card2.jpg'
import Card3 from '@/public/assets/img/card3.jpg'
import Card4 from '@/public/assets/img/card4.jpg'

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: Card1,
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: Card2,
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: Card3,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
    {
    id: 4,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: Card4,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  }
]

import Link from "next/link"
import Image from "next/image"
import { Button } from '../ui/button'

export default function ProductList() {
  return (
    <div className="bg-white mb-40 mt-30">
      
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl pb-15  tracking-tight text-balance text-gray-900 sm:text-5xl">
              Some of Our Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 text-left gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <Image
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))}
        </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <Link href="/products">
                      <Button>
                        View All Products
                      </Button>
                      </Link>
                    </div>
      </div>
    </div>
  )
}
