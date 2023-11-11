"use client"
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TbCurrencyNaira } from "react-icons/tb";
import axios from "axios";


interface ProductsProps {
  id: string;
  key: string;
  title: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
}

const Products: React.FC<ProductsProps> = ({
  id,
  key,
  title,
  price,
  description,
  image_url,
  category,
}) => {
  const [loading, setLoading] = useState(false);
  const user_id = '1'
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 300);
  }, [loading]);

  const handleAddToCart = async () => {
    if (user_id == null) {
      const Product = {
        id,
        title,
        price,
        description,
        image_url,
        cart_quantity: 1,
      };
      return;
    }

    const Product = {
      id,
      title,
      price,
      description,
      image_url,
    };

    try {
      setLoading(true);
      const response = await axios.post('/api/addToCart', {
        id: id,
        user_id: user_id,
        quantity: 1,
      });
      const result = response.data;
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <div className='relative flex flex-col bg-white z-30 shadow-xl rounded-sm text-gray-500 overflow-hidden transition delay-100 ease-in-out'>
          <Link href={`/products/${id}`}>
            <div className='relative w-full h-[160px]'>
              <Image src={image_url} alt={image_url} layout="fill" objectFit="cover" />
            </div>
          </Link>
          <p className='my-1 lg:mt-2 px-2 uppercase text-sm font-poppins line-clamp-1 text-gray-700'>{title}</p>
          <div className='font-primary line-clamp-2 lg:line-clamp-3 px-2 text-xs h-[30px] lg:h-[50px] text-gray-800'>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className='font-changa px-2 flex items-center space-x-1 text-xs mt-[2px] text-gray-800'>
            <TbCurrencyNaira className="w-4 h-4 text-gray-600" />{price.toLocaleString()}
          </div>
          <button
            className='mt-1 lg:mt-2 mx-auto bg-yellow-500 hover:bg-yellow-400 p-2 w-[90%] text-white rounded-sm uppercase mb-2 text-xs font-poppins transition-all delay-100 ease-in'
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      ) : (
        <div className='relative flex flex-col bg-white z-30 shadow-xl transition-all duration-500 linear animate-pulse h-[280px]'>
          <div className='absolute h-full w-10 bg-white pulse overflow-hidden z-[40] rounded-sm'></div>
          <div className='absolute top-2 right-2 w-12 h-2 rounded-md z-20 bg-gray-200'></div>
          <div className='relative w-full h-[160px] bg-gray-300  overflow-hidden '></div>
          <div className='my-1 ml-2 h-4 w-[85%] bg-gray-300 rounded-md'></div>
          <div className='ml-2 h-3 w-[60%] bg-gray-300 rounded-md'></div>
          <div className='my-2 ml-2 h-8 w-[95%] bg-gray-300 rounded-md'></div>
          <div className='ml-2 h-3 w-[40%] bg-gray-300 rounded-md'></div>
          <button className='my-2 mx-auto p-2 w-[90%] h-[40px]  bg-gray-300 rounded-md'></button>
        </div>
      )}
    </>
  );
};

export default Products;
