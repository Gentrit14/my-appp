

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      Person1,
  },
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      Person2,
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl:
      Person3,
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
     Person1,
  },
  {
    name: 'Courtney Henry',
    role: 'Designer',
    imageUrl:
      Person2,
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    imageUrl:
      Person3,
  },
]

import Image from "next/image"
import Person1 from '@/public/img/profile1.png'
import Person2 from '@/public/img/profile2.png'
import Person3 from '@/public/img/profile3.png'


export default function TeamSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-primary">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
