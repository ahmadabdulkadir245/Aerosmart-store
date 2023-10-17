import React, { useState } from 'react';
import { AiOutlineShop } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';
import { GiConcreteBag, GiOpeningShell, GiWoodBeam } from 'react-icons/gi';
import SideBarLink from './SideBarLink';
import { MdAdminPanelSettings, MdConstruction } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBricks } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/authContext';

function SideBarLinks() {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  // const { logout, authToken } = useContext(AuthContext);

  const closeNav = (path: string) => {
    setOpenSideBar(false);
    router.push(path);
  };

  const logoutHandler = () => {
    // logout();
    router.replace('/login');
    setOpenSideBar(false);
  };

  return (
    <div className="px-[10px] py-[6px] pb-8 text-gray-500 capitalize text-md h-full overflow-y-scroll">
      {false ? (
        <button className="rounded-md border-2 border-gray-400 py-2 w-[96%]" onClick={logoutHandler}>
          Logout
        </button>
      ) : (
        <div className="flex justify-between">
          <button className="rounded-md border-2 border-gray-400 py-2 w-[47%]" onClick={() => closeNav('/login')}>
            Login
          </button>
          <button className="rounded-md border-2 border-gray-400 py-2 w-[47%]" onClick={() => closeNav('/signup')}>
            Sign Up
          </button>
        </div>
      )}
      <hr className="h-[1px] w-full mt-4 mb-2 bg-gray-500" />

      <SideBarLink Icon={RiUser3Line} title={'my account'} path={'/account'} />
      <SideBarLink Icon={AiOutlineShop} title={'orders'} path={'/orders'} />
      <SideBarLink Icon={AiOutlineShoppingCart} title={'cart'} path={'/cart'} />
      <SideBarLink Icon={GiWoodBeam} title={'woods'} path={'/'} />
      <SideBarLink Icon={MdConstruction} title={'metals'} path={'/'} />
      <SideBarLink Icon={GiConcreteBag} title={'cement'} path={'/'} />
      <SideBarLink Icon={GiOpeningShell} title={'stones'} path={'/'} />
      <SideBarLink Icon={BsBricks} title={'bricks'} path={'/'} />
      {false && (
        <>
          <SideBarLink Icon={BsBricks} title={'admin products'} path={'/admin/products'} />
          <SideBarLink Icon={MdAdminPanelSettings} title={'add product'} path={'/admin/add-product'} />
          <SideBarLink Icon={MdAdminPanelSettings} title={'add banner image'} path={'/admin/add-banner'} />
        </>
      )}
    </div>
  );
}

export default SideBarLinks;
