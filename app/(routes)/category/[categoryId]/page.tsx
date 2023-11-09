"use client"
import { useRouter } from "next/navigation";
import { BiSort } from "react-icons/bi";
import { BsGrid1X2Fill } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";
import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import ColumnProducts from "./components/ColumnProducts";
import Products from "./components/Products";
import FilterBar from "./components/FilterBar";
import FilterPart from "./components/FilterPart";




const SearchResultPage: React.FC = () => {
  const router = useRouter();
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

  const [grid, setGrid] = useState(true);
  const gridHandler = () => {
    setGrid(!grid);
  };

  return (
    <>
      <div className="px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        <h2 className="text-center uppercase pb-2 lg:hidden ">{searchResult}</h2>
        <div className="flex justify-between items-center uppercase bg-gray-300 p-2 text-gray-700 lg:hidden">
          <div className="flex  items-center space-x-2 cursor-pointer">
            <BsGrid1X2Fill className="h-5 w-5" />
            <p onClick={gridHandler}>
              {grid ? "column" : "grid"}
            </p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <BiSort className="h-5 w-5" />
            <p>Sort</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <HiOutlineFilter className="h-5 w-5" />
            <p>Filter</p>
          </div>
        </div>

        <FilterPart />
        <div className="col-span-3 hidden lg:block">
          <FilterBar />
          <div className='grid grid-cols-3 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto m-2 gap-3 my-5'>
            {searchProducts.map(({ id, title, price, description, image_url, category, }: any) => (
              <Products
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                description={description}
                image_url={image_url}
              />
            ))}
          </div>

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
        </div>

        {/* display products */}
        {grid ?
          <div className='grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto m-2 gap-2  md:px-4 pt-2 lg:hidden'>
            {searchProducts.map(({ id, title, price,category,  description, image_url }: any) => (
              <Products
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                description={description}
                image_url={image_url}
              />
            ))}
          </div>
          :
          <div className="mt-2 ">
            {searchProducts.map(({ id, title, price, category, description, image_url }: any) => (
              <ColumnProducts
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                description={description}
                image_url={image_url}
              />
            ))}
          </div>
        }
      </div>

      <div className='w-full px-[10px] my-10 lg:hidden'>
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

      {/* <div className="max-w-7xl mx-auto">
        <ProductSlider sectionTitle={'latest products'} products={products.slice(0, 9)} path={'/'} />

        <ProductSlider sectionTitle={'top selling'} products={products.slice(9, 20)} path={'/'} discount={true} />

        <ProductSlider sectionTitle={'discount products'} products={products.slice(21, 30)} path={'/'} discount={true} bgColor={'bg-gray-400'} />
      </div> */}
    </>
  );
};

export default SearchResultPage;


