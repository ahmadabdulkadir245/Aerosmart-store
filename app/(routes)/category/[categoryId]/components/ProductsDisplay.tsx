"use client"
import  { useState } from 'react';
import ColumnProducts from './ColumnProducts';
import Products from '@/components/Products';

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string | null | undefined; 
  images: { url: string }[];
}

interface ProductsDisplayProps {
  searchProducts: any;
}

const ProductsDisplay: React.FC<ProductsDisplayProps> = ({ searchProducts }) => {
  const [grid, setGrid] = useState(true);

  const gridHandler = () => {
    setGrid(!grid);
  };

  return (
    <>
      {grid ? (
        <div className='grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto m-2 gap-2  md:px-4 pt-2 lg:hidden'>
          {searchProducts.map(({ id, title, price, category, description, images }: Product) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              category={category}
              description={description}
              images={images}
            />
          ))}
        </div>
      ) : (
        <div className="mt-2 ">
          {searchProducts.map(({ id, title, price, category, description, images }: Product) => (
            <ColumnProducts
              key={id}
              id={id}
              title={title}
              price={price}
              category={category}
              description={description}
              images={images}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsDisplay;
