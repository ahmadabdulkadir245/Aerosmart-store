import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';
import { BsStarFill, BsStarHalf, BsTwitter } from 'react-icons/bs';
import { TbCurrencyNaira } from 'react-icons/tb';
import { ImFacebook, ImWhatsapp } from 'react-icons/im';
import Footer from '@/components/footer';
import SingleProductBtn from '../components/SingleProductBtn';
import SingleProductWishlist  from '../components/SingleProductWishlist'; 
import ProductSlider from '@/components/ProductSlider';
import { AiFillStar } from 'react-icons/ai';
import ProductImage from './components/ProductImage';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({ 
    categoryId: product?.category?.id
  });

  if (!product) {
    return null;
  }

  const imageSlider: number[] = [1,2,3,4,5]

  const handleAddToCart = () => {
  }
  
  const handleAddToWishlist = () => {

  }

  const handleRemoveFromWishlist = () => {

  }
  const wishlistExist: boolean = false
  

  return (
    <div className="bg-white">
      <Container>
        {/* <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList name="Related Items" items={suggestedProducts} />
        </div> */}
         <div className="px-3 pt-5  text-gray-500 max-w-7xl mx-auto lg:grid grid-cols-3 gap-x-10 lg:mt-8 lg:p-8 lg:bg-white ">

        <ProductImage product={product}/>

<div className="col-span-1">
<div className="flex items-center justify-between mt-5 lg:mt-0 lg:block">
  <div className="pt-1 lg:pt-0">
    <h2 className="   font-poppins font-semibold  uppercase text-sm lg:text-2xl ">{product?.name}</h2>
  </div>
  <span className="bg-yellow-100 flex items-center space-x-1 px-1 font-changa  rounded-sm lg:hidden">
        <AiFillStar className="text-yellow-400 w-3 h-3"/>
        <p className="text-yellow-400 text-sm">4.5</p>
  </span>
</div>

  <div className="hidden lg:block font-poppins text-xs">
    <div className="flex space-x-2 my-1">
     <p> Brand: </p>
     <p className="capitalize">product brand</p>
    </div>
    <div className="flex space-x-2 my-1">
     <p> Category: </p>
     <p className="capitalize"> {product?.category.name}</p>
    </div>
    <div className="flex space-x-2 my-1">
     <p> Availability: </p>
     <p className={`capitalize   ${Number(product.price) > 0 ? 'text-green-400' : "text-red-400"}`}> {Number(product?.price) > 0 ? 'in stock' : "not available"}</p>
    </div>
    <hr className="bg-gray-400 my-1" />
    <div className='font-primary  flex items-center  text-xl   text-gray-800'>
      <TbCurrencyNaira  className="w-5 h-7 text-gray-600"/>{product?.price.toLocaleString()}
    </div>

    
  </div>

<div className="lg:hidden flex items-center justify-between">
  <h4 >Colors</h4>
<div className="flex items-center justify-between my-3">
    <div className="flex items-center space-x-3">
    <div className="w-8 h-8 rounded-full bg-white shadow-sm"></div>
    <div className="w-8 h-8 rounded-full bg-yellow-400 shadow-md"></div>
    <div className="w-8 h-8 rounded-full bg-blue-500 shadow-md"></div>
    <div className="w-8 h-8 rounded-full bg-green-400 shadow-md"></div>
    </div>
   </div>
</div>

<div className="hidden lg:flex space-x-2 my-2">
          <BsStarFill className='text-yellow-500 h-4'/>
          <BsStarFill className='text-yellow-500 h-4'/>
          <BsStarFill className='text-yellow-500 h-4'/>
          <BsStarFill className='text-yellow-500 h-4'/>
          <BsStarHalf className='text-yellow-500 h-4'/>
       </div>

    <SingleProductBtn/>
    
    <hr className="bg-gray-400 my-3" />


    <div className="flex justify-between items-end  text-xs">
      <div className="">
        <h4 className="mb-4">share with friends</h4>
        <div className="flex  space-x-2">
          <ImFacebook className="w-7 h-7 rounded-full border  bg-blue-500 text-white p-1 cursor-pointer hover:opacity-70 transition-all delay-100"/>
          <ImWhatsapp className="w-7 h-7 rounded-full border  bg-green-400 text-white p-1 cursor-pointer hover:opacity-70 transition-all delay-100"/>
          <BsTwitter className="w-7 h-7 rounded-full border  bg-blue-400 text-white p-1 cursor-pointer hover:opacity-70 transition-all delay-100"/>
        </div>
      </div>

  <SingleProductWishlist />
    </div>
P</div>

</div>

<div className="lg:max-w-7xl mx-auto bg-white px-3 py-8 lg:p-8 my-5 ">
  <h2 className="text-center uppercase text-xl font-poppins font-semibold">description</h2>
  <hr className="bg-gray-400 my-2" />

  <p className="prose prose-h1:text-3xl   prose-h1:font-semibold prose-h2:text-2xl  prose-h2:font-semibold prose-h2:mt-[0px]
prose-h2:mb-[24px] prose-p:text-xs prose-headings:capitalize prose-a:text-blue-500 hover:prose-a:text-blue-800 font-poppins" 
>
{product?.description}
</p>
</div>
<ProductSlider sectionTitle={'related products'} products={suggestedProducts} path={'/'} discount={false} />

<ProductSlider sectionTitle={'top selling'} products={suggestedProducts} path={'/'} discount={false} />
      </Container>

      <Footer/>
    </div>  
  )
}

export default ProductPage;
