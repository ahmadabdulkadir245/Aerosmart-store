import Image from 'next/legacy/image';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { TbCurrencyNaira } from 'react-icons/tb';

interface ColumnProductsProps {
  id: string;
  images: { url: string }[];
  title: string;
  price: number;
  category: string;
  description: string | null | undefined; 
}

const ColumnProducts: React.FC<ColumnProductsProps> = ({ id, images, title, price, category, description }) => {
  return (
    <div className='bg-white p-2 pb-0 my-2'>
      <div className="flex space-x-3" key={id}>
        <div className='h-[100px] w-[150px] bg-gray-200'>
          <div className='relative h-[100px] w-[150px]'>
            <Image
               src={images[0].url}
                alt={images[0].url}
                 layout="fill"
                placeholder="blur"
                  objectFit='contain' />
          </div>
        </div>

        <div className=''>
          <p className="uppercase font-poppins line-clamp-1">{title}</p>
          <p className='text-xs line-clamp-2'>{description}</p>

          <p className="flex items-center space-x-2 text-sm">
            <BsStarFill className='h-6 text-yellow-500' />
            <BsStarFill className='h-6 text-yellow-500' />
            <BsStarFill className='h-6 text-yellow-500' />
            <BsStarFill className='h-6 text-yellow-500' />
          </p>
          <div className="flex justify-between items-center">
            <p className="flex items-center text-sm"><TbCurrencyNaira className="w-4 h-4" />{price.toLocaleString()}</p>
            <div className="flex items-center space-x-2 cursor-pointer">
              <AiFillHeart className="w-6 h-6 rounded-full border  bg-gray-400 text-white p-1 hover:bg-red-500 transition-all delay-100" />
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gray-400  mt-3" />
    </div>
  );
};

export default ColumnProducts;
