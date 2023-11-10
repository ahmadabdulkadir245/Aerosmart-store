"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiHeart, BiMap, BiStore } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { useRouter } from 'next/navigation'; 
import Header from '@/components/Header';
import Loading from '../loading';
import ProductSlider from '@/components/ProductSlider';
import AccountOptionsCard from './components/AccountOptionsCard';
import AccountDetails from './components/AccountDetails';
import Footer from '@/components/footer';

function Account() {
  const router = useRouter();
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState('account');

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  let user = {
    first_name: 'ahmad',
    last_name: 'abdulkadir',
    email: 'abdulkadir@gmail.com',
  };

  let user_id = 1;

  return (
    <>
      <div className="bg-white my-2 rounded-md mx-2 shadow-sm lg:hidden">
        <div className="flex items-center space-x-5 p-4 uppercase">
          <div className="rounded-full p-2 bg-gray-200">
            <CiUser className="text-gray-600 h-10 w-10" />
          </div>
          <p className="font-poppins">
            {user?.first_name ? user?.first_name + ' ' + user?.last_name : 'user name'}
          </p>
        </div>
        <div className="p-4 flex items-center justify-between capitalize">
          <div className="hover:text-gray-400 text-gray-600" onClick={() => router.push('/account/orders')}>
            <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
              <BiStore className="h-5 w-5" />
            </div>
            <p className="font-poppins text-xs mt-1">orders</p>
          </div>
          <div className="hover:text-gray-400 text-gray-600" onClick={() => router.push('/account/wishlist')}>
            <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
              <BiHeart className="h-5 w-5" />
            </div>
            <p className="font-poppins text-xs mt-1">saved products</p>
          </div>
          <div className="hover:text-gray-400 text-gray-600" onClick={() => router.push('/account/address')}>
            <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
              <BiMap className="h-5 w-5" />
            </div>
            <p className="font-poppins text-xs mt-1">address section</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        <AccountOptionsCard selected={selected} setSelected={true} />
        <AccountDetails user_id={user_id} setLoading={false} />
      </div>
      <Footer/>
    </>
  );
}

export default Account;
