import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import DesktopBanner from "@/components/DesktopBanner";
import Header from "@/components/Header";
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
        {/* <Billboard 
          data={billboard}
          /> */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
          </>
  )
};

export default HomePage;
