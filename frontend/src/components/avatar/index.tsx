"use client";
import Image from "next/image";

type AvatarProps = {
	firstName?: string;
	lastName?: string;
	image?: string;
	customClasses?: string
};

const Avatar: React.FC<AvatarProps> = ({
	firstName = "",
	lastName = "",
	image,
	customClasses
}) => {
	const initials = `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`;

	return (
		<div className={`flex ${customClasses ? customClasses : 'h-10 w-10'} rounded-full bg-slate-500 items-center justify-center`}>
			{image ? (
				<Image
					src={image}
					alt="Avatar"
					className="h-8 w-8 rounded-full"
					width={40}
					height={40}
				/>
			) : (
				<span className="font-medium text-white dark:text-white">
					{initials}
				</span>
			)}
		</div>
	);
};

export default Avatar;
