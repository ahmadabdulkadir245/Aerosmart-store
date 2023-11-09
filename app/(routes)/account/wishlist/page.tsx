"use client"
import { useEffect, useState } from 'react';
import { BiHeart, BiMap, BiStore } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import Loading from '../../loading';
import AccountOptionsCard from '../components/AccountOptionsCard';
import SavedProducts from '../components/SavedProducts';


interface WishlistProps {
  user_id: string | null;
  authToken: string;
}

function Wishlist() {
  const [selected, setSelected] = useState('account');
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const wishlists: any = []
  const products = [] 
  const user_id = 1

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, [loading]);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <div className="px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        <AccountOptionsCard selected={'wishlist'} setSelected={true} />

        <SavedProducts user_id={user_id} setLoading={setLoading} products={wishlists} />
      </div>
      {/* <div className="max-w-7xl mx-auto">
        <ProductSlider sectionTitle={'recently viewed'} products={products.slice(3, 12)} path={'/'} discount={false} />
        <ProductSlider sectionTitle={'top selling'} products={products.slice(0, 9).reverse()} path={'/'} discount={true} />
      </div> */}
    </>
  );
}

export default Wishlist;

