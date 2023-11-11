"use client"
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { TbCurrencyNaira } from "react-icons/tb";
import axios from "axios";

interface ProductProps {
  id: string;
  title: string;
  price: number;
  description: string | null | undefined; // Adjusted type
  images: { url: string }[];
  category: string;
  user_id?: string | null;
}

const Products: React.FC<ProductProps> = ({
  id,
  title,
  price,
  description,
  images,
  user_id,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 300);
  }, []); // Removed 'loading' from dependency array as it might lead to an infinite loop

  const handleAddToCart = async () => {
    if (user_id === null) {
      const product = {
        id,
        title,
        price,
        description,
        images,
        cart_quantity: 1,
      };
      // dispatch(addProductToCart(product));
      return;
    }

    const product = {
      id,
      title,
      price,
      description,
      images,
    };

    // dispatch(addProductToCart(product));

    try {
      setLoading(true);
      const response = await axios.post("/api/addToCart", {
        id,
        user_id,
        quantity: 1, // Fixed typo in 'quantity'
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
        <div className="relative flex flex-col bg-white z-30 shadow-xl rounded-sm text-gray-500 overflow-hidden transition delay-100 ease-in-out">
          <Link href={`/products/${id}`}>
            <div className="relative w-full h-[160px]">
              <Image
                src={images[0].url}
                alt={images[0].url}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </Link>
          <p className="my-1 lg:mt-2 px-2 uppercase text-sm font-poppins line-clamp-1 text-gray-700">
            {title}
          </p>
          <div className="font-primary line-clamp-2 lg:line-clamp-3 px-2 text-xs h-[30px] lg:h-[50px] text-gray-800">
            {description ? (
              description
            ) : (
              <p>
                this is the descripton of the product, it is strong, durable,
                and last long.
              </p>
            )}
          </div>
          <div className="font-changa px-2 flex items-center space-x-1 text-xs mt-[2px] text-gray-800">
            <TbCurrencyNaira className="w-4 h-4 text-gray-600" />
            {price.toLocaleString()}
          </div>
          <button
            className="mt-1 lg:mt-2 mx-auto bg-yellow-500 hover:bg-yellow-400 p-2 w-[90%] text-white rounded-sm uppercase mb-2 text-xs font-poppins transition-all delay-100 ease-in"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      ) : (
        <div className="relative flex flex-col bg-white z-30 shadow-xl transition-all duration-500 linear animate-pulse h-[280px]">
          <div className="absolute h-full w-10 bg-white pulse overflow-hidden z-[40] rounded-sm"></div>
          <div className="absolute top-2 right-2 w-12 h-2 rounded-md z-20 bg-gray-200"></div>
          <div className="relative w-full h-[160px] bg-gray-300  overflow-hidden "></div>
          <div className="my-1 ml-2 h-4 w-[85%] bg-gray-300 rounded-md"></div>
          <div className="ml-2 h-3 w-[60%] bg-gray-300 rounded-md"></div>
          <div className="my-2 ml-2 h-8 w-[95%] bg-gray-300 rounded-md"></div>
          <div className="ml-2 h-3 w-[40%] bg-gray-300 rounded-md"></div>
          <button className="my-2 mx-auto p-2 w-[90%] h-[40px]  bg-gray-300 rounded-md"></button>
        </div>
      )}
    </>
  );
};

export default Products;
