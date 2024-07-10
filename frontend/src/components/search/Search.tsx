"use client";
import { ISearchProps } from "@/types";
import { FC } from "react";

const Search: FC<ISearchProps> = ({ searchProducts, }) => {
    return (
        <div className="flex items-center space-x-3 justify-center mt-3">
            <button
                className="bg-[#303134] text-[#e8eaed] px-5 py-2.5 text-[14px] rounded-md hover:bg-[#3c4043] cursor-pointer"
                onClick={() => searchProducts()}
            >
                Google Search
            </button>
            <button className="bg-[#303134] text-[#e8eaed] px-5 py-2.5 text-[14px] rounded-md hover:bg-[#3c4043] cursor-pointer">
                I&apos;m Feeling Lucky
            </button>
        </div>
    );
};

export default Search;
