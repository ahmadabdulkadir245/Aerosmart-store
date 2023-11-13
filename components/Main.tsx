import About from "./About";
import { Product } from "@/types";
import ProductSlider from "./ProductSlider";
import ProductList from "./product-list";
import DesktopCategory from "./DesktopCategory";
import ProductFeed from "./ProductFeed";


interface MainProps {
    title: string;
    products: Product[]
  }

  const Main: React.FC<MainProps> = ({
    title,
    products
  }) => {
  return (
    <> 
    <DesktopCategory />
      <About />
      <ProductSlider sectionTitle={'latest products'} products={products.slice(0, 10)} path={'/'} discount={false}/>
      <ProductSlider sectionTitle={'discount products'} products={products.slice(0, 10)} path={'/'} discount={true}/>
      <ProductSlider sectionTitle={'featured products'} products={products.slice(0, 10)} path={'/'} discount={false}/>
      <ProductFeed/>
    </>
  );
}

export default Main;
