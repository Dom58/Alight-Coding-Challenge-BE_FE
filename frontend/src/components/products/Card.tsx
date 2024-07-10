"use client";
import { IProductType, Item } from "@/types";
import Image from "next/image";
import { FC } from "react";

const Card: FC<IProductType> = ({ item }) => {
    const { id, name, description, category, price } = item;
    return (
        <div className="card border border-gray-600 shadow-lg shadow-gray-500/50 rounded-lg m-6 p-4 hover:bg-[#c0bebe] hover:text-black hover:cursor-pointer" key={id}>
            <Image src="/assets/cart.svg" alt={name} width={200} height={200} className='mr-5' />
            <div className="px-4">
                <div>
                    <h1 className="text-2xl">{name}</h1>
                    <p className="text-sm">{description}</p>
                    <p className="text-xl text-[#e74e3a]">${price}</p>
                </div>
                <div className="flex justify-end">
                    <div className="flex w-1/3">
                        <Image src="/assets/tags.svg" alt={name} width={20} height={20} className='mr-1' />
                        <span className="text-[#e74e3a] hover:text-[#000000]">{category}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
