"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = ({ title, returnButton }) => {
  const router = useRouter();

  return (
    /* Need to check this shadow fits mockups exactly */
    <header className="bg-white shadow h-14 grid place-items-center px-2">
      {returnButton && (
        <button className="absolute left-3 p-4" onClick={() => router.back()}>
          <Image
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
