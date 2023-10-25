"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { TbCurrencyNaira } from "react-icons/tb";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }

  return ( 
    <>
    {/* <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
      >
      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
         <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
        Checkout
      </Button>
    </div> */}
    <div className="">
  
            <div className="flex justify-between px-8 pt-6 lg:pt-6  ">
            <p > Products:</p>
            <p className="flex items-center font-changa">{items.length}</p>
            </div>
            <div className="flex justify-between px-8 py-4  ">
            <p >Subtotal:</p>
            <p className="flex items-center"><TbCurrencyNaira  className="w-5 h-5"/><p className="font-changa">{totalPrice.toLocaleString()}</p></p>
            </div>
          <div className="hidden  px-8 shadow-xl w-full    pb-2 overflow-hiddentext-gray-500  lg:block">
      <button className="capitalize w-full h-[48px] rounded-md text-white  text-sm bg-yellow-500  mb-2 flex items-center justify-center m-auto hover:bg-yellow-400 transition-all delay-100 ease-in font-changa" 
      onClick={onCheckout}>Go To Checkout | <TbCurrencyNaira  className="w-5 h-5"/> {totalPrice.toLocaleString()}
      </button>
          </div>
          </div>

          <div className=" px-3 shadow-xl w-full  text-lg  pt-4 pb-2 overflow-hiddentext-gray-500 lg:hidden ">
      <Button className="capitalize w-[90%] h-[48px] rounded-md text-white  text-sm bg-yellow-500  mb-2 flex items-center justify-center m-auto font-changa" 
      onClick={onCheckout}>Go To Checkout | <TbCurrencyNaira  className="w-5 h-5"/>{totalPrice.toLocaleString()}
      </Button>
          </div>
      </>
  );
}
 
export default Summary;
