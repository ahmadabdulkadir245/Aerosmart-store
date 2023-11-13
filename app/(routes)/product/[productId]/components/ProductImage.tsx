"use client"
import  { useState } from 'react';
import Image from 'next/image';

interface ProductImageProps {
  product: {
    name: string;
    images: { url: string }[];
  };
}

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
  const [displayImage, setDisplayImage] = useState(product?.images[0].url);

  const selectDisplayImageHandler = (image_url: string) => {
    setDisplayImage(image_url);
  };

  return (
    <div className="col-span-2 ">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex items-center space-x-2 my-3 w-full h-full lg:block lg:space-x-0 lg:space-y-2  lg:my-0 lg:w-[150px] lg:h-[350px]   lg:overflow-y-scroll scrollbar-hide">
          {product.images.map((image) => (
            <div
              key={image.url}
              className="relative w-[80px] h-[60px]  overflow-hidden rounded-md border-[3px]  cursor-pointer hover:border-blue-500 p-4"
              onClick={() => selectDisplayImageHandler(image.url)}
            >
              <Image src={image.url} alt={product.name} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
        <div className="relative w-full h-[250px] lg:w-full  lg:h-[350px] overflow-hidden rounded-md border-0 border-gray-900 lg:rounded-none">
          <Image src={displayImage} alt={product?.name} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
