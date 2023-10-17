"use client"

import { BiSearchAlt } from 'react-icons/bi';
import { RiUser3Line } from 'react-icons/ri';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdClear } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { useRecoilState } from 'recoil';
import { useDispatch, useSelector } from 'react-redux';
import MobileNav from './MobileNav';
import { navState } from '../atoms/navHandler';
import Link from 'next/link';
import { useState, useContext } from 'react';
import SideBar from './SideBar';
import { addSearchedWord } from '../slices/searchSlice';
import { selectCartItems } from '../slices/cartItemsSlice';
import SearchSuggesstions from './SearchSuggesstions';
import { selectedCartItems, selectedCartlength } from '../slices/cartItemSlice';
import { useRouter } from 'next/navigation';

interface NavigationProps {
  // Define any props you may need here
}

function Navigation(props: NavigationProps) {
  // const dispatch = useDispatch();
  // const [openSideBar, setOpenSideBar] = useRecoilState(navState);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [searchWord, setSearchWord] = useState<string>('');
  const sideBarHandler = () => {
    setOpenSideBar(true);
  };
  const closeNavHandler = () => {
    setOpenSideBar(false);
  };
  const [showSearch, setShowSearch] = useState(false);

  const showSearchHandler = () => {
    setShowSearch(!showSearch);
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    setSearchWord(word.toLowerCase());
  };

  const searchIconHandler = () => {
    if (searchWord) {
      // Implement your logic for searchIconHandler
    }
  };

  const pressToSearchHandler = (suggesstion: string) => {
    if (suggesstion) {
      setSearchWord('');
      // Implement your logic for pressToSearchHandler
    }
  };

  // dispatch(addSearchedWord(searchWord));

  // const productInCart = useSelector(selectedCartItems);
  // const cartlength = useSelector(selectedCartlength) || 0

  const productInCart = []
  const cartlength =  0

  const router = useRouter();

  const logoutHandler = () => {
    router.replace('/login');
  };

  return (
    <div>
      {/* sidebar menu */}
      {/* <SideBar openSideBar={openSideBar} showSearch={showSearch} /> */}
      {/* navigation */}
      <nav className={`flex items-center justify-between flex-wrap bg-gray-50 py-4 ${showSearch ? '' : 'shadow-lg'}  lg:shadow-lg px-[10px] lg:px-[50px] `}>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="">
            {openSideBar ? (
              <MdClear
                className='w-6 h-6 text-gray-500 lg:hidden transition-transform duration-500 ease-in-out cursor-pointer'
                onClick={closeNavHandler}
              />
            ) : (
              <HiOutlineMenuAlt3 className='w-6 h-6 text-gray-500 lg:hidden cursor-pointer' onClick={sideBarHandler} />
            )}

          </div>
          <div className="text-xl lg:text-2xl font-changa text-gray-500 cursor-pointer" onClick={() => router.push("/")}>
            AERO<span className='text-yellow-500'>SMART</span>
          </div>
        </div>

        {/* search for Desktop */}
        <div className='hidden lg:flex items-center  h-10 rounded-md max-w-3xl flex-grow cursor-pointer bg-yellow-500  hover-bg-[#f7b32b] transition-all duration-500 linear mx-5'>
          <input
            type='text'
            className='py-5 px-4 h-full w-6 flex-grow  flex-shrink rounded-l-sm focus:outline-none bg-gray-300 font-play text-gray-700 text-xs'
            placeholder='search on Aerosmart'
            value={searchWord}
            onChange={searchHandler}
          />
          <BiSearchAlt className='h-12 w-12 p-3  text-gray-500 transition duration-200 ease-in' 
            onClick={searchIconHandler}
          />
        </div>

        {/*  Right*/}
        <div className='flex text-gray-500 text-xs  space-x-5 lg:space-x-12  whitespace-nowrap px-4 lg:px-'>
          <div className='flex space-x space-x-6 items-center'>
            <BiSearchAlt
              className={`lg:hidden w-6 h-6 lg:w-7 lg:h-7 ${showSearch ? 'hidden' : ''}`}
              onClick={showSearchHandler}
            />
            <Link href='/account'>
              <div className='hover-text-[#f7b32b] transition-all duration-500 linear'>
                <RiUser3Line className='w-6 h-6 lg:w-7 lg:h-5 flex justify-center mx-auto' />
                <p className='hidden lg:inline font-semiold md:text-xs font-titilliumWeb link capitalize text-center'>
                  my account
                </p>
              </div>
            </Link>
          </div>

          <div
            onClick={() => router.push("/cart")}
            className='link flex items-center relative'
          >
            <span className='absolute -top-1 -right-1 lg-right-10 h-4 text-xs w-4 bg-yellow-400 rounded-full  text-center font-semibold items-center font-titilliumWeb transition-all duration-500 linear animate-pingOnce' key={productInCart.length}>
              {cartlength}
            </span>
            <AiOutlineShoppingCart className='w-6 h-6 lg:w-7 lg:h-7' />
            <p className='hidden lg-inline font-semibold md:text-sm font-titilliumWeb'>
              Cart
            </p>
          </div>
        </div>
      </nav>

      {/* search for mobile */}
      <MobileNav showSearch={showSearch} searchWord={searchWord} searchHandler={searchHandler} searchIconHandler={searchIconHandler} />

      {/* Suggestions */}
      {/* <div className="z-100">
        <SearchSuggesstions searchWord={searchWord} setSearchWord={setSearchWord} pressToSearchHandler={pressToSearchHandler} />
      </div> */}
    </div>
  );
}

export default Navigation;
