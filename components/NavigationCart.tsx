"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { BiSearchAlt } from "react-icons/bi";
import Link from "next/link";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface NavigationCartProps {
  showSearch: boolean;
  showSearchHandler: () => void;
}

const NavigationCart: React.FC<NavigationCartProps> = ({
  showSearch,
  showSearchHandler,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return <div className="w-[190px]"></div>
  }

  return (
      <>
      <div className='flex space-x space-x-6 items-center'>
        <BiSearchAlt
          className={`lg:hidden w-6 h-6 lg:w-7 lg:h-7 ${showSearch ? 'hidden' : ''}`}
          onClick={showSearchHandler}
        />
        <Link href='/account'>
          <div className='hover-text-[#f7b32b] transition-all duration-500 linear'>
            <RiUser3Line className='w-6 h-6 lg:w-7 lg:h-5 flex justify-center mx-auto' />
            <p className='hidden lg:inline font-semibold md:text-xs font-titilliumWeb link capitalize text-center'>
              my account
            </p>
          </div>
        </Link>
      </div>

      <div
        onClick={() => router.push("/cart")}
        className='link flex items-center relative'
      >
        <span className='absolute -top-1 -right-1 lg-right-10 h-4 text-xs w-4 bg-yellow-400 rounded-full text-center font-semibold items-center font-titilliumWeb transition-all duration-500 linear animate-pingOnce'>
          {cart.items.length}
        </span>
        <AiOutlineShoppingCart className='w-6 h-6 lg:w-7 lg:h-7' />
        <p className='hidden lg:inline font-semibold md:text-sm font-titilliumWeb'>
          Cart
        </p>
      </div>
      </>
  );
};

export default NavigationCart;
