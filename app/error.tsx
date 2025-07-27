'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">An error occurred!</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Faild to fetch data.
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href='/'>
          <Button>
              Go back home
            </Button>
            </Link>
            <Link href="/" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
