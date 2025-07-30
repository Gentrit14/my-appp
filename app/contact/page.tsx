'use client'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from "sonner";

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  company: yup.string().required('Company is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  message: yup.string().required('Message is required'),
  agree: yup.boolean().oneOf([true], 'You must agree to the privacy policy')
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Faleminderit për kontaktin tuaj!");
    reset();
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Ketu mundesh ti me na kontaktu neve.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm/6 font-semibold text-gray-900">First name</label>
            <input
              {...register("firstName")}
              className="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 outline-gray-300"
            />
            <p className="text-red-500 text-sm mt-1">{errors.firstName?.message}</p>
          </div>

          <div>
            <label className="block text-sm/6 font-semibold text-gray-900">Last name</label>
            <input
              {...register("lastName")}
              className="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 outline-gray-300"
            />
            <p className="text-red-500 text-sm mt-1">{errors.lastName?.message}</p>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold text-gray-900">Company</label>
            <input
              {...register("company")}
              className="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 outline-gray-300"
            />
            <p className="text-red-500 text-sm mt-1">{errors.company?.message}</p>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold text-gray-900">Email</label>
            <input
              {...register("email")}
              type="email"
              className="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 outline-gray-300"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold text-gray-900">Phone number</label>
            <div className="flex rounded-md bg-white outline outline-1 outline-gray-300">
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500" />
              </div>
              <input
                {...register("phone")}
                placeholder="123-456-7890"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900"
              />
            </div>
            <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm/6 font-semibold text-gray-900">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              className="block w-full rounded-md px-3.5 py-2 text-base outline outline-1 outline-gray-300"
            />
            <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
            <input
              type="checkbox"
              {...register("agree")}
              id="agree"
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-primary">privacy policy</a>.
            </label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm sm:col-span-2">{errors.agree.message}</p>}
        </div>

        <div className="mt-10">
          <Button type="submit">Let`s talk</Button>
        </div>
      </form>
      <Toaster richColors position="top-center" />
    </div>
  );
}
