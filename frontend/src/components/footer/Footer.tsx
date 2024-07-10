"use client";
import { FC } from "react";

const Footer: FC = () => {
    return (
        <div className="w-full bg-[#171717] divide-y divide-gray-800">
            <div className="py-4 flex justify-between items-center px-4 md:px-8">
                <h2>Rwanda</h2>
            </div>
            <div className="w-full bg-[#171717] py-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
                <div className="flex justify-start space-x-4 sm:space-x-6 mb-4 md:mb-0">
                    <a href="#" className="text-[14px] hover:text-[#c5d9fc]">About</a>
                    <a href="#" className="text-[14px] hover:text-[#c5d9fc]">Advertising</a>
                    <a href="#" className="text-[14px] hover:text-[#c5d9fc]">Business</a>
                    <a href="#" className="text-[14px] hover:text-[#c5d9fc]">How Search works</a>
                </div>
                <div className="flex justify-end space-x-4 sm:space-x-6">
                    <a href="#" className="text-[14px] hover:text-[#c5d9fc]">Privacy</a>
                    <a href="#" className="text-[14px] hover:text-[#c5d9fc]">Terms</a>
                    <a href="#" className="text-[14px] hover:text-[#c5d9fc]">Settings</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
