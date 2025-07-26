import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Button } from "../ui/button"

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32 mt-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-900">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-black/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-gray-900" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900">Weekly articles</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-gray-900" />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-900">No spam</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
