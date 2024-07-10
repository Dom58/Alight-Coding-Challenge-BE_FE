"use client";
import { FC } from "react";

const Languages: FC = () => {
    return (
        <div>
            <div className="flex items-center space-x-3 justify-center mt-3">
                <button className="bg-[#303134] text-[#e8eaed] px-5 py-2.5 text-[14px] rounded-md hover:bg-[#3c4043] cursor-pointer">
                    Google Search
                </button>
                <button className="bg-[#303134] text-[#e8eaed] px-5 py-2.5 text-[14px] rounded-md hover:bg-[#3c4043] cursor-pointer">
                    I&apos;m Feeling Lucky
                </button>
            </div>

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

export default Languages;
