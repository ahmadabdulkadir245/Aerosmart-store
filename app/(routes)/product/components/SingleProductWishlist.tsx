"use client"
import { AiFillHeart } from 'react-icons/ai';

const SingleProductWishlist: React.FC = () => {
  const handleAddToWishlist = () => {
    // Add your logic for handling addToWishlist
  };

  const handleRemoveFromWishlist = () => {
    // Add your logic for handling removeFromWishlist
  };

  const wishlistExist: boolean = false;

  return (
    <div
      className={`flex items-center justify-center text-white space-x-2 cursor-pointer ${
        wishlistExist ? 'bg-red-500' : 'bg-gray-400'
      } rounded-full w-[100px] h-[35px] lg:hover:bg-red-500 transition-all delay-100`}
      onClick={!wishlistExist ? handleAddToWishlist : handleRemoveFromWishlist}
    >
      <AiFillHeart className="w-5 h-5" />
      <p className="font-changa">1000</p>
    </div>
  );
};

export default SingleProductWishlist;
