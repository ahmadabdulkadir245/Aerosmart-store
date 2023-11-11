import { BiSort } from "react-icons/bi";
import { BsGrid1X2Fill } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";
import FilterBar from "./components/FilterBar";
import FilterPart from "./components/FilterPart";
import Footer from "@/components/footer";
import ProductsDisplay from "./components/ProductsDisplay";
import getProducts from "@/actions/get-products";
import ProductSlider from "@/components/ProductSlider";
import Products from "@/components/Products";
import Pagination from "@/components/Pagination";




const SearchResultPage: React.FC = async () => {
  const searchResult = 'keywords';
  const products: any = []
  const slider = await getProducts({ isFeatured: true });

  let searchProducts: any = []

  return (
    <>
      <div className="px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        <h2 className="text-center uppercase pb-2 lg:hidden ">{searchResult}</h2>
        <div className="flex justify-between items-center uppercase bg-gray-300 p-2 text-gray-700 lg:hidden">
          <div className="flex  items-center space-x-2 cursor-pointer">
            <BsGrid1X2Fill className="h-5 w-5" />
            <p
            //  onClick={gridHandler}
             >
              grid
              {/* {grid ? "column" : "grid"} */}
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
            {slider.map(({ id, title, price, description, images, category, }: any) => (
              <Products
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                description={description}
                images={images}
              />
            ))}
          </div>
              <Pagination receivedProducts={slider} />
        </div>

        {/* display products */}
              <ProductsDisplay searchProducts={products}/>
      </div>
      <Pagination receivedProducts={slider} />


      <div className="max-w-7xl mx-auto">
        <ProductSlider sectionTitle={'related products'} products={slider} path={'/'} discount={false} />

        <ProductSlider sectionTitle={'top selling'} products={slider} path={'/'} discount={false} />

        <ProductSlider sectionTitle={'discount products'} products={slider} path={'/'} discount={true} bgColor={'bg-gray-400'} />
      </div>
      <Footer/>

    </>
  );
};

export default SearchResultPage;


