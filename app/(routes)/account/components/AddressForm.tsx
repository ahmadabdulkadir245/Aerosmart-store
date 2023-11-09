"use client"
import React, { useState } from 'react';
// import { addUserAddress } from '../slices/addressAction';

interface AddressData {
  first_name?: string;
  last_name?: string;
  phone_number_1?: string;
  phone_number_2?: string;
  address_line_1?: string;
  address_line_2?: string;
  city?: string;
  state?: string;
}

interface AddressFormProps {
  user_id: number | string;
  authToken: string;
  setLoading: (loading: boolean) => void;
}

function AddressForm({ user_id, authToken, setLoading }: AddressFormProps) {
  const axios = require('axios');
  const [addressData, setAddressData] = useState<AddressData>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setAddressData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/addAddress', {
        user_id: Number(user_id),
        ...addressData,
      });

      const result = response.data;
      // const Address: AddressData = {
      //   user_id: Number(user_id),
      //   ...addressData,
      // };
      // dispatch(addUserAddress(Address));
    } catch (error) {
      console.error(error);
    }
  }; 
   return (
 
    <form onSubmit={handleAddToCart} className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs my-3">
    <div className="col-span-2 lg:col-span-1 w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='first_name' value={addressData.first_name || ''} onChange={handleChange} placeholder="First Name" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='last_name' value={addressData.last_name || ''} onChange={handleChange} placeholder="Last Name" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='phone_number_1' value={addressData.phone_number_1 || ''} onChange={handleChange} placeholder="Phone Number e.g 081" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='phone_number_2' value={addressData.phone_number_2 || ''} onChange={handleChange} placeholder="Additional Phone Number e.g 080" />
    </div>
    <div className="col-span-2 w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='address_line_1' value={addressData.address_line_1 || ''} onChange={handleChange} placeholder="Delivery Address" />
    </div>
    <div className="col-span-2 w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='address_line_2' value={addressData.address_line_2 || ''} onChange={handleChange} placeholder="Additional Address (optional)" />
    </div>
    <div className="col-span-1 w-full"> 
    <select  className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400 text-gray-400 cursor-pointer capitalize" name='state' value={addressData.state || ''} onChange={handleChange} placeholder="Additional Phone Number e.g 080">
      <option>Select State</option>
      <option>abuja</option>
      <option>kaduna</option>
      <option>lagos</option>
    </select>
    </div>
    <div className="col-span-1 w-full"> 
    <select  className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400 text-gray-400 cursor-pointer capitalize" name='city' value={addressData.city || ''} onChange={handleChange} placeholder="Additional Phone Number e.g 080">
      <option>Select Local Gov</option>
      <option>chikun</option>
    </select>
    </div>
    <div className="col-span-2 w-full flex justify-center text-xs"> 
    <button className=" w-[400px] bg-green-400 text-white  p-3 rounded-md capitalize hover:bg-green-500 transition-all delay-100 tracking-wide "
    type='submit'
       >
      save
    </button>
    </div>
  </form>

  )
}

export default AddressForm