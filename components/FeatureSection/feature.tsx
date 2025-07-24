import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Features1 from '@/assets/img/features1.jpg'

const features = [
  {
    name: '100% Natyral ',
    description:
      'Uji ynë buron nga natyra e paprekur dhe është i pasur me minerale esenciale për trupin tuaj.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Cilësi e Kontrolluar',
    description: 'Proces i filtrimit dhe paketimit me standarde të larta higjienike për çdo shishe ujë që konsumoni.',
    icon: LockClosedIcon,
  },
  {
    name: 'Shpërndarje e Shpejtë',
    description: 'Furnizim për familje, biznese dhe organizata në mbarë vendin – gjithmonë në kohë.',
    icon: ServerIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">Freski Natyrale</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
                Ujë nga malet e Dukatit
              </p>
              <p className="mt-6 text-lg/8 ">
                Uji është burimi i jetës – dhe ne sjellim më të mirën prej tij. "Ujë Dukati" ofron ujë të pastër e natyral nga burimet malore të Dukatit, duke garantuar cilësi dhe freski në çdo pikë.

              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7  lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold ">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-primary" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src={Features1}
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
