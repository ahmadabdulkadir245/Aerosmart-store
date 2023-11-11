"use client"

import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

export const Pagination = () => {
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(0);
    
    const searchResult = 'keywords';
    const products = useMemo(() => {
      return [];
    }, []);
    const searchFilter = useMemo(() => {
      return products.filter((product: any) => {
        return product.category == searchResult;
      });
    }, [products, searchResult]);
  
    // perPage function to render different amount of pages for each device
    const perPages = {
      sm: 8,
      md: 12,
      lg: 12,
    };
    const [perPage, setPerPage] = useState(perPages.sm);
    // const searchProducts = searchFilter.slice(perPage * page, perPage * (page + 1));
  
    let searchProducts: any = []
  
    useEffect(() => {
      const handleResize = () => {
        const { innerWidth } = window;
        let newPerPage = perPages.sm;
  
        if (innerWidth >= 768 && innerWidth < 1024) {
          newPerPage = perPages.md;
        } else if (innerWidth >= 1024) {
          newPerPage = perPages.lg;
        }
  
        setPerPage(newPerPage);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [perPages.lg, perPages.sm, perPages.md]);
  
    useEffect(() => {
      setTotalPages(Math.ceil(searchFilter.length / perPage));
    }, [searchFilter, perPage]);
  
  return (
    <div className='w-full px-[10px] my-10 col-span-3'>
            <ReactPaginate
              breakLabel='...'
              previousLabel='PREV'
              nextLabel='NEXT'
              pageRangeDisplayed={1}
              pageCount={totalPages}
              onPageChange={({ selected }) => setPage(selected)}
              renderOnZeroPageCount={null}
              previousClassName='flex items-center justify-center capitalize   w-[70px] h-[30px] rounded-sm  border-[1px]  bg-transparent   tracking-wide cursor-pointer  text-xs hover:bg-gray-300 transition duration-300 ease-in'
              nextClassName='flex items-center justify-center capitalize   w-[70px] h-[30px] rounded-sm  border-[1px]  bg-transparent   tracking-wide cursor-pointer text-xs hover:bg-gray-300 transition duration-300 ease-in'
              containerClassName='flex justify-center items-center mx-auto space-x-2'
              pageLinkClassName='flex items-center justify-center capitalize   w-[30px] h-[30px] rounded-sm  border-[1px]  bg-transparent text-xs'
              activeClassName='bg-yellow-400 text-white  transition-all duration-300 ease-in-out'
            />
          </div>
  )
}
