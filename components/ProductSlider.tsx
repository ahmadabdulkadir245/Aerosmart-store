"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SlidesWithDiscount from './SlidesWithDiscount';
import SliderHeading from './SliderHeading';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/legacy/image';
import { TbCurrencyNaira } from 'react-icons/tb';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Product } from '@/types';

interface ProductSliderProps {
  sectionTitle: string;
  products: Product[]; 
  path: string;
  bgColor?: string;
  discount: boolean;
}

function ProductSlider({ sectionTitle, products, path, bgColor, discount }: ProductSliderProps) {
  const [loading, setLoading] = useState(true);
  const loadingContent = [1, 2, 3, 4, 5, 5, 7];
  const slideCounts = {
    sm: 2,
    md: 4,
    lg: 6,
  };
  const [slideCount, setSlideCount] = useState(slideCounts.sm);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newSlideCount = slideCounts.sm;

      if (innerWidth >= 768 && innerWidth < 1024) {
        newSlideCount = slideCounts.md;
      } else if (innerWidth >= 1024) {
        newSlideCount = slideCounts.lg;
      }

      setSlideCount(newSlideCount);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slideCounts.lg, slideCounts.sm, slideCounts.md]);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  // if (!isMounted) {
  //   return null
  // }
  return (
    <div className='my-5 '>
      <div className={`flex items-center  justify-between  p-2 px-3 ${bgColor ? bgColor : 'bg-white'} text-gray-700 shadow-sm`}>
        <p className="font-bold uppercase ">{sectionTitle}</p>
        <Link href={path} className="capitalize text-xs">
          show all
        </Link>
      </div>
      <div className='relative w-full overflow-hidden px-3 pt-2 bg-white'>
      <Swiper watchSlidesProgress={true} slidesPerView={slideCount} spaceBetween={10} className="mySwiper overflow-x-scroll">
        {products.map((product) => (
      <SwiperSlide key={product.id} onClick={() => router.push(`/product/${product.id}`)} className='cursor-pointer'>
        <SlidesWithDiscount key={product.id} product={product} discount={product?.discount} />
              </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
