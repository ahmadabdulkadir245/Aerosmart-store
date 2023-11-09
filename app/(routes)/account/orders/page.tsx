"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../../loading';
import AccountOptionsCard from '../components/AccountOptionsCard';
import ProductSlider from '@/components/ProductSlider';
import AccountOrders from '../components/AccountOrders';
import { Product } from "@/types";


interface OrdersProps {
  user_id: string;
}

function Orders() {
  const [selected, setSelected] = useState('orders');
  const router = useRouter();
  const orders = []
  const products = []


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
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
        <AccountOptionsCard selected={'orders'} setSelected={true} />
        <AccountOrders  />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* <ProductSlider sectionTitle={'recently viewed'} products={products.slice(3, 12)} path={'/'} discount={false} />
        <ProductSlider sectionTitle={'top selling'} products={products.slice(0, 9).reverse()} path={'/'} discount={true} /> */}
      </div>
    </>
  );
}

export default Orders;


