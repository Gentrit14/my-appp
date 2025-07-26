import Link from "next/link"
import Image from "next/image"
import Card1 from '@/public/assets/img/card1.jpg'
import Card2 from '@/public/assets/img/card2.jpg'
import Card3 from '@/public/assets/img/card3.jpg'
import Card4 from '@/public/assets/img/card4.jpg'
import Card5 from '@/public/assets/img/card5.jpg'
import Card6 from '@/public/assets/img/card6.jpg'
import Card7 from '@/public/assets/img/card7.jpg'
import { Button } from "../ui/button"

export default function PromoSection() {
  return (
    <div className="relative overflow-hidden bg-white ">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
              Freskia e natyrës në çdo pikë
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Ujë Dukati vjen nga burimet më të pastra natyrore, duke sjellë një shije të lehtë dhe të pastër që freskon trupin dhe shpirtin. Zgjedhja perfekte për hidratim cilësor dhe mirëqenie çdo ditë.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          alt=""
                          src={Card2}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          alt=""
                          src={Card3}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          alt=""
                          src={Card4}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          alt=""
                          src={Card5}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          alt=""
                          src={Card1}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          alt=""
                          src={Card6}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          alt=""
                          src={Card7}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/products"
              >
                <Button>
                        View All Products
                      </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
