
import Features from '@/components/FeatureSection/feature'
import CardContent1 from '@/components/CardContent/Cardcontent'
import Stats from '@/components/StatsComponent/Stats'
import { Button } from '@/components/ui/button'
import LogoClouds from '@/components/LogoClouds/LogoClouds'
import ProductList from '@/components/ProductLists/ProductLists'
import PromoSection from '@/components/PromoSection/PromoSection'
import Newsletter from '@/components/NewsletterSection/Newsletter'



export default async function Home() {

  return (
    <main>
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Ujë i Pastër nga Zemra e Dukatit
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Ne besojmë që uji i pastër nuk është vetëm nevojë, është jetë. Me burime natyrore të freskëta dhe përkushtim për cilësi, Ujë Dukati ofron ujë të pasur me minerale për çdo familje që kujdeset për shëndetin.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button>
                Get started
              </Button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >

        </div>
      </div>
      <LogoClouds />
      <Features />
      <ProductList />
      <CardContent1 />
      <PromoSection />
      <Stats />
      <Newsletter />
    </div>
    </main>
  )
}
