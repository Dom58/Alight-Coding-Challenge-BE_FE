"use client";
import { useQuery } from "@tanstack/react-query";
import { getSearchedProducts } from '@/services';
import Image from "next/image";
import Link from "next/link";

const Products = (props: any) => {
  const { q: keyword } = props.searchParams;

  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getSearchedProducts(keyword as string),
  });

  return (
    <div className="font-sans bg-[#202124] text-[#e8eaed] flex flex-col">
      <div className="flex items-center justify-center px-4">
        <div className="container max-w-[584px] w-full p-5 flex flex-col">
          <div className="flex">
            <Link href={'/'}>
              <Image src="/back.svg" alt={'back'} width={30} height={30} className='mr-5' />
            </Link>
            <h1 className='text-3xl'>
              Products {!isLoading && `(${!!data && data.length})`}
            </h1>
          </div>
          {!isLoading ? (
            <div className='w-full'>
              {!!data?.length && data.map(({ id, name, category, price, description }) => (
                <div className="card border border-gray-600 shadow-lg shadow-gray-500/50 rounded-lg m-6 p-4 hover:bg-[#c0bebe] hover:text-black hover:cursor-pointer" key={id}>
                  <Image src="/cart.svg" alt={name} width={200} height={200} className='mr-5' />
                  <h1 className="text-2xl">{name}</h1>
                  <p>{description}</p>
                  <p className="price">${price}</p>
                  <p className="text-[#e74e3a]"><button>{category}</button></p>
                </div>
              ))}
            </div>
          ) : <p className='text-[#e74e3a]'>Loading...</p>
          }

          {!isLoading && keyword && !data?.length && (
            <div className="mt-5">
              <p className="text-[#e74e3a]">No product found!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
