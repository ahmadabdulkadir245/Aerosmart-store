import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const productQty = 0
  const minusOneItemFromCart  = () => {

  }
  const addOneItemToCart  = () => {

  }
  const handleRemoveFromCart  = () => {

  }

  return ( 
    <>
    {/* <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          objectFit="contain"
          loading="lazy"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">
              {data.name}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li> */}
     <div className='flex justify-between  space-x-5 my-5 text-xs px-[12px]'>
        <div className='relative w-[150px] lg:w-[200px] lh-full g:h-[150px] text-gray-600 '>
        <Image src={data.images[0].url} alt={'image'} layout='fill' objectFit="contain" placeholder="blur" />
        </div>
        <div className='flex-1'>
            <h3 className='text-sm capitalize font-poppins mb-1'>{data.name}</h3>
            <p className="lowercase leading-4 line-clamp-4 text-xs h-[60px] "> {data.category.name } 
    </p>
            <div className='  font-primary flex items-center space-x-1 text-xs  mt-[6px] text-gray-800 font-semibold'>
            <TbCurrencyNaira  className="w-4 h-4 text-gray-600"/>{(data.price)?.toLocaleString()}
          </div>
                    <p className='mb-1'>Qauntity</p>
            <div className="flex justify-between items-center">
                <div className='flex space-x-3 items-center'>
                <div className={`flex justify-center items-center p-[6px] px-[10px] bg-yellow-400 transition duration-200 linear rounded-sm ${
            productQty < 2 ? " opacity-50" : "cursor-pointer"
          }`} onClick={minusOneItemFromCart} >
                 <AiOutlineMinus className='text-white' />
                </div>
                <p className='font-changa'>
                {productQty}
                </p>
                <div className='flex justify-center items-center p-[6px] px-[10px] bg-yellow-400 rounded-sm cursor-pointer'  onClick={addOneItemToCart}>
                 <AiOutlinePlus className='text-white' />
                </div>
                </div>

                <div>
                <button className="hidden capitalize px-5 h-[38px] rounded-sm  border-[1px]  bg-transparent  m-auto tracking-wide cursor-pointer hover:bg-red-600 active:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"  onClick={handleRemoveFromCart}>REMOVE
                </button>
                </div>
                <div
          className='flex space-x-3 items-center  bg-red-500  py-2 px-3 text-white rounded-md hover:bg-red-600 cursor-pointer transition duration-200 ease-in'
          onClick={handleRemoveFromCart}
        >
          <AiOutlineDelete className='' /> 
             </div>
            </div>
        </div>

    </div>
        <div className="w-full h-[1px] bg-gray-300 col-span-full"></div>

    </>
  );
}
 
export default CartItem;
