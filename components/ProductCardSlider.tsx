"use client"
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { TbCurrencyNaira } from 'react-icons/tb';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency  from "@/components/ui/currency";
import IconButton  from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  
  return ( 
    <div onClick={handleClick} className="group cursor-pointer">
      {/* Image & actions */}
      
      <div className="aspect-square  overflow-hidden shadow-sm bg-gray-100 relative">
      {/* <div className="relative h-[150px] w-[200px] m-auto rounded-md overflow-hidden shadow-sm"> */}
      <div className='relative h-[120px] w-full m-auto overflow-hidden shadow-sm'>
        <Image 
          src={data.images?.[0]?.url} 
          alt="" 
          width={120}
          height={80}
          objectFit="cover"
          placeholder='blur'
          loading="lazy"
        />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="capitalize text-xs pt-1 text-center w-[90%] ">
                <p className="line-clamp-1">{data.name}</p>
                <p className="">
                  <Currency value={data?.price} />
                </p>
              </div>

    </div>
  );
}

export default ProductCard;
