"use client"
import { CiShoppingCart } from 'react-icons/ci';

const SingleProductBtn: React.FC = () => {
  const handleAddToCart = () => {
    // Add your logic for handling addToCart
  };

  return (
    <div className="flex justify-between space-x-5">
      <div
        className="capitalize w-[15%] lg:w-[200px] h-[48px] lg rounded-md border-[1px] border-gray-300 flex items-center justify-center mt-4 m-auto cursor-pointer space-x-3 hover:bg-yellow-500 hover:border-white hover:text-white transition-all delay-100 ease-in"
        onClick={handleAddToCart}
      >
        <CiShoppingCart className="w-7 h-7 flex justify-between" />
        <div className="hidden lg:flex">add to cart</div>
      </div>
      <button
        className="capitalize w-[80%] h-[48px] lg:w-[200px] rounded-md text-white border-[1px] border-yellow-500 bg-yellow-500 block mt-4 m-auto hover:bg-green-500 hover:border-none transition-all delay-100 ease-in"
        onClick={handleAddToCart}
      >
        Buy Now
      </button>
    </div>
  );
};

export default SingleProductBtn;
