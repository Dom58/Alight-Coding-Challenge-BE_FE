"use client";
import { FC } from "react";

const Search: FC = () => {
    return (
        <div>
            <div className="flex items-center space-x-2 justify-center text-[#bdc1c6] text-[13px] mt-6">
                <span className="mr-1">Google offered in:</span>
                <a href="#" className="text-[#8ab4f8] hover:text-[#c5d9fc]">
                    Français
                </a>
                <a href="#" className="text-[#8ab4f8] hover:text-[#c5d9fc]">
                    Kiswahili
                </a>
                <a href="#" className="text-[#8ab4f8] hover:text-[#c5d9fc]">
                    Ikinyarwanda
                </a>
            </div>
        </div>
    );
};

export default Search;
