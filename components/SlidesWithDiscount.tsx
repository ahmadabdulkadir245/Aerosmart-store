import Image from 'next/legacy/image';
import { TbCurrencyNaira } from 'react-icons/tb';
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import IconButton  from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";




interface SlidesWithDiscountProps {
  product: Product;
  discount: boolean
}

function SlidesWithDiscount({ product, discount }: SlidesWithDiscountProps) {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
 
  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(product);
  };
  return (
    <div onClick={handleClick} className=" group cursor-pointer">
            <div className='relative m-auto overflow-hidden shadow-sm '>
              <Image src={product.images[0]?.url} alt={product?.name}  objectFit='contain'     
              width={190}
              height={120}
              loading={'lazy'}
              placeholder='blur'  
              />

          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
          </div>
        </div>
            </div>
            <div className="capitalize text-xs pt-1 w-[90%] pb-2">
              <p className="font-poppins ">
                {product?.name}
              </p>
              {discount ?
                <>
                <p className='flex items-center space-x-2 text-sm font-changa'>
                  <TbCurrencyNaira className="w-4 h-4" />
                  {typeof product?.price === 'number' && (
                    ((product.price - product.price / 2).toLocaleString())
                  )}
                </p>
                  <p className='flex items-center space-x-2 text-[10px] text-gray-600 font-changa line-through'><TbCurrencyNaira className="w-3 h-4" />{(product.price).toLocaleString()}</p>
                </>
                :
                <p className='flex items-center space-x-2 S font-changa'><TbCurrencyNaira className="w-4 h-4" />{((product.price))}</p>
              }
            </div>
          </div>
  );
}

export default SlidesWithDiscount;
