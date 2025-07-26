
import Link from 'next/link';
import Logo1 from '@/public/assets/img/logo.png'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (



    <footer className="main-footer p-10">
      <div className="footer-wrapper max-w-1800 m-auto p-2">
        <div className="footer-top flex flex-wrap justify-center items-center gap-4 pb-2 border-b-2 border-solid">
          <div className=" -m-1.5 p-1.5">
            <Image src={Logo1} className='h-20 w-auto' alt="LifeHub Logo" />
          </div>

          <nav className="footer-nav flex gap-4">
          <Link href="/" className='font-medium transition hover:underline text-gray-800 '>Home</Link>
          <Link href="/about" className='font-medium hover:underline text-gray-800'>About</Link>
          <Link href="/feauters" className='font-medium hover:underline text-gray-800'>Products</Link>
          <Link href="/programs" className='font-medium hover:underline text-gray-800'>Contact</Link>
          </nav>

          <div className="footer-socials flex gap-3">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className='text-xl '><FaFacebookF /></a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className='text-xl' ><FaInstagram /></a>
            <a href="https://linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer" className='text-xl'><FaLinkedinIn /></a>
            <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer" className='text-xl'><FaTiktok /></a>

          </div>
        </div>

        <div className="footer-bottom text-center text-base pt-4 font-medium tracking-tight text-pretty text-gray-400">
          <p>&copy; {new Date().getFullYear()} Uje Dukati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

