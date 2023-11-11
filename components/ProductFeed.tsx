import Products from './Products';
import { Pagination } from './Pagination';
import getProducts from '@/actions/get-products';



const ProductFeed: React.FC = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <>
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
