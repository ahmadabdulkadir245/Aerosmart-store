import About from "./About";
import { Product } from "@/types";
import ProductSlider from "./ProductSlider";
import ProductList from "./product-list";
import DesktopCategory from "./DesktopCategory";


interface MainProps {
    title: string;
    products: Product[]
  }

  const Main: React.FC<MainProps> = ({
    title,
    products
  }) => {
    const reversedProducts = products.reverse();
  return (
    <>
    <DesktopCategory />
      <About />
      <ProductSlider sectionTitle={'latest products'} products={products.slice(0, 10)} path={'/'} discount={false}/>
      <ProductSlider sectionTitle={'discount products'} products={reversedProducts.slice(0, 10)} path={'/'} discount={false}/>
      <ProductSlider sectionTitle={'featured products'} products={products.slice(0, 10)} path={'/'} discount={false}/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
    </>
  );
}

export default Main;
