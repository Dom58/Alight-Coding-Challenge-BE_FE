"use client";
import Footer from '@/components/footer/Footer';
import Languages from '@/components/languages/Languages';
import Search from '@/components/search/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchProducts = async () => {
    if (searchTerm === '') {
      setError('Search keyword is required! You can search product by name/category or mix words.')
    } else {
      router.push(`/products?q=${searchTerm}`);
    }
  }

  return (
    <div className="font-sans bg-[#202124] text-[#e8eaed] flex flex-col h-screen">
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="container max-w-[584px] w-full p-5 flex flex-col">
          <div className="flex justify-center mb-5">
            <Image src="/assets/google-logo.png" alt="Google Logo" width={272} height={92} />
          </div>

          <div
            className={`w-full bg-transparent border-[1px] rounded-full flex items-center px-5 py-3 mb-5 ${!searchTerm && error ? 'border-[#e74e3a]' : 'border-gray-500'}`}
          >
            <svg className="w-5 h-5 fill-[#9aa0a6] mr-3.5" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input
              type="text"
              className="bg-transparent border-none outline-none text-[16px] text-[#e8eaed] flex-1"
              placeholder="Search product by name or category..."
              value={searchTerm}
              onChange={handleInputChange}
            />

            <Link href={'#'}>
              <Image src="/assets/mic.svg" alt="Mic" width={20} height={20} className='mr-5' />
            </Link>
            <Link href={'#'}>
              <Image src="/assets/camera.svg" alt="Camera" width={20} height={20} />
            </Link>
          </div>
          <div className="flex items-center justify-center text-sm text-[#e74e3a]">
            <p>{!searchTerm && error}</p>
          </div>
          <Search searchProducts={searchProducts} />
          <Languages />
        </div>
      </div>
      <Footer />
    </div>
  )
}
