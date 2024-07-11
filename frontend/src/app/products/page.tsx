"use client";
import { useQuery } from "@tanstack/react-query";
import { getSearchedProducts } from '@/services';
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/products/Card";

const Products = (props: any) => {
  const { q: keyword } = props.searchParams;

  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getSearchedProducts(keyword as string),
  });

  return (
    <div className="font-sans bg-[#202124] text-[#e8eaed] flex flex-col">
      <div className="flex items-center justify-center px-4">
        <div className="container max-w-[584px] w-full p-5 flex flex-col">
          <div className="flex">
            <Link href={'/'}>
              <Image src="/assets/back.svg" alt={'back'} width={30} height={30} className='mr-5' />
            </Link>
            <h1 className='text-3xl'>
              Products {!isLoading && !error && `(${!!data && data.length})`}
            </h1>
          </div>
          <p className="text-[#a3a2a2] text-sm">Your search keyword was <span className="text-[#e74e3a]">{keyword} </span></p>
          {!isLoading ? (
            <div className='w-full'>
              {!!data?.length && data.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
          ) : <p className='text-[#e74e3a]'>Loading...</p>
          }

          {!isLoading && !error && keyword && !data?.length && (
            <div className="mt-5">
              <p className="text-[#e74e3a]">No product found!</p>
            </div>
          )}
          {!isLoading && error && (
            <div className="mt-5">
              <p className="text-[#e74e3a]">{error.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
