"use client";

import { useEffect, useState } from 'react';

import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';

import Summary from './components/summary'
import CartItem from './components/cart-item';

export const revalidate = 0;

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
      <div className='pt-5 lg:pt-10 m-auto  lg:max-w-7xl max-h-[calc(100vh-132px)] lg:h-full transition-all duration-500 ease-in overflow-y-scroll scrollbar-hide'>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-6 ">
            <div className="lg:col-span-7">
              <div className="hidden lg:flex items-center uppercase bg-gray-200 py-2 px-5 text-gray-800 text-sm font-poppins tracking-wider text-center">
        <div className="">
          <p><span className='hidden lg:inline-block font-semibold'>PRODUCTS</span> </p>
        </div>
           </div>
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <div className='lg:col-span-5'>
            <div className="hidden lg:flex items-center uppercase bg-gray-200 py-2 px-5 text-gray-700 text-sm font-poppins tracking-wider text-center">
        <div className="text-sm">
          <p><span className='hidden lg:inline-block'>ORDER SUMMERY</span> </p>
        </div>
            </div>
            <Summary />
            </div>
          </div>
        </div>
        
        {/* <ProductList title="Featured Products" items={products} /> */}
      </Container>
    </div>
  )
};

export default CartPage;
