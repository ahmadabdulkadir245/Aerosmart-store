"use client"
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/legacy/image';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useRouter } from 'next/navigation';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import ProductCardSlider from "@/components/ProductCardSlider";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import { useEffect, useState } from 'react';

interface FeaturedProductsProps {
  title: string;
  items: Product[]
}


const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  items
}) => {
  const router = useRouter()
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
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="relative w-full m-auto rounded-md overflow-hidden">
      <Swiper watchSlidesProgress={true} slidesPerView={slides} spaceBetween={10} className="mySwiper overflow-x-scroll">
        {items.map((item) => (
            <SwiperSlide key={item.id} onClick={() => router.push(`/products/${item.id}`)}>
          <ProductCardSlider key={item.id} data={item} />
        </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
   );
}
 
export default FeaturedProducts;
