import React from "react";
import Image from "next/image";
import { data } from "@/utils/data";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { addToCart } from "@/redux/cart.slice";
import { useDispatch } from "react-redux";

function ProductPage() {
  const dispatch = useDispatch();

  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((e) => e.slug === slug);

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <>
      <Layout title={product.name}>
        <div className="mt-24 md:mt-32 md:container flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="">
            <Image
              src={product.img}
              width={300}
              height={300}
              alt="product image"
            />
          </div>
          <div className="flex flex-col pr-[70px]">
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="text-base pt-1 text-gray-500">Per peice</p>
            <p className="pt-2 text-2xl font-medium">₹{product.price}</p>
            <div className="flex gap-5 pt-4">
              <button
                className="px-3 py-2 border-[3px] border-green-500"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to bag
              </button>
              <button className="px-3 py-2 bg-green-500">Buy Now</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProductPage;
