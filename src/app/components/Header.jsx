"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = ({ title, returnButton }) => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-default h-14 grid place-items-center px-2 border-b border-slate-15">
      {returnButton && (
        <button
          className="absolute transition-colors left-3 w-8 h-8 grid place-items-center rounded-full hover:bg-grey-cold-20 focus-visible:bg-grey-cold-20 group"
          onClick={() => router.back()}
        >
          <Image
            className="transition-[filter] group-hover:brightness-50"
            src="/icons/chevron-left.svg"
            alt="Go back"
            width={6}
            height={12}
          />
          <span className="sr-only">Go back</span>
        </button>
      )}
      <h3 className="text-center text-lg font-extrabold">{title}</h3>
    </header>
  );
};

export default Header;
