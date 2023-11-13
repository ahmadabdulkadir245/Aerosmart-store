import Pagination from './Pagination';
import Products from './Products';
import getProducts from '@/actions/get-products';



const ProductFeed: React.FC = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <>
     <h2 className="capitalize text-xl font-poppins mb-5 hidden lg:inline-block">All Products</h2>
      <div className='grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 m-2 gap-2 lg:gap-6 px-2 md:px-[25px] lg:px-0 mx-auto max-w-7xl'>
        {products.map(({ id, title, price, description, category, images }: any) => (
          <Products
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            images={images}
          />
        ))}
      </div>
      <Pagination receivedProducts={products} />
    </>
  );
};

export default ProductFeed;
