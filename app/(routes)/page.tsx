import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import About from "@/components/About";
import DesktopBanner from "@/components/DesktopBanner";
import DesktopCategory from "@/components/DesktopCategory";
import FeaturedProducts from "@/components/FeaturedProducts";
import Header from "@/components/Header";
import Main from "@/components/Main";
import ProductSlider from "@/components/ProductSlider";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("11ad0159-1303-4a95-b893-da1752ba8b48");
  return (
    <>
      <DesktopBanner/>
    <Container>
      <div className="space-y-10 pb-10">
        <Main products={products} title="lastest products" />
      </div>
    </Container>
          </>
  )
};

export default HomePage;
