"use client"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Thumbs } from "swiper/modules";
import Image from 'next/legacy/image';

function DesktopBanner() {
  const [banner, setBanners] = useState<string[]>([]);
  const banners: string[] = [
    "https://res.cloudinary.com/dxc8mersm/image/upload/v1693670612/pexels-fomstock-com-1115804.jpg.webp",
    "https://res.cloudinary.com/dxc8mersm/image/upload/v1693670690/palor.jpg.webp",
    "https://res.cloudinary.com/dxc8mersm/image/upload/v1693670711/living.jpg.webp"
  ];
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const page = 1;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 400);
  }, []);

  return (
    <div className='w-full h-[300px] md:h-[400px] lg:h-[500px]  px-[10px]  lg:px-0 m-auto  mt-2 lg:mt-0 transition-all duration-700 ease-out'>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Thumbs]}
        className="mySwiper"
      >
        <div className="relative w-full h-full  overflow-hidden m-auto  lg:m-0 rounded-md lg:rounded-none">
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className='relative  w-full h-[300px] md:h-[400px] lg:h-[calc(100vh-70px)]  rounded-md lg:rounded-none '>
                <Image src={banner} alt={banner} priority className="rounded-md lg:rounded-none " layout="fill" objectFit="cover" />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default DesktopBanner;
