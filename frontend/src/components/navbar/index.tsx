"use client";
import Image from "next/image";
import Link from "next/link";
import Avatar from "../avatar";

const NavBar: React.FC = () => {
	return (
		<div className="w-full py-4 flex justify-between items-center px-4 sm:px-10">
			<div className="flex justify-start"></div>
			<div className="flex justify-end space-x-0 sm:space-x-2 px-4">
				<div className='flex space-x-0 sm:space-x-5 mt-3'>
					<div className="space-x-5 -mt-2">
						<a href="#" className="text-[14px] hover:text-[#c5d9fc]">Gmail</a>
						<a href="#" className="text-[14px] hover:text-[#c5d9fc]">Images</a>
					</div>
					
					<Link href={'#'}>
						<Image src="/lab.svg" alt="Mic" width={22} height={22} className='-mt-1' />
					</Link>
					<Link href={'#'}>
						<Image src="/menu.svg" alt="Mic" width={15} height={15} className='mr-5' />
					</Link>
				</div>

				<div className="flex">
					<div className="items-center">
						<Avatar
							firstName={"Dom58"}
							lastName={""}
							customClasses="bg-teal-blue h-10 w-10 border-2 border-orange-600"
							image='/profile.jpg'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
