"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AccountOptionsCard from '../components/AccountOptionsCard';
import ProductSlider from '@/components/ProductSlider';
import AccountAddressSection from '../components/AccountAddressSection';
import Loading from '../../loading'
import Header from '@/components/Header';
import Footer from '@/components/footer';


interface OrdersProps {
  user_id: number;
  authToken: string;
}

function Address() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
 const products: string[] = []
 const user_id = 1
 const authToken = 'token'

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  if (loading) {
    return (
      <>
      {/* <Header/> */}
        <Loading />
        {/* <Footer/> */}
      </>
    );
  }

  return (
      <div className="px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        <AccountOptionsCard selected={'address'} setSelected={true} />
        <AccountAddressSection user_id={user_id} authToken={authToken} setLoading={setLoading} />
      </div>
    //   <div className="max-w-7xl mx-auto">
    //     <ProductSlider sectionTitle={'recently viewed'} products={products.slice(3, 12)} path={'/'} discount={false} />
    //     <ProductSlider sectionTitle={'top selling'} products={products.slice(0, 9).reverse()} path={'/'} discount={true} />
    //   </div>
  );
}

export default Address;

