import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";

function Products({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        <li>
          <div>
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.img}
                width={300}
                height={300}
                alt="product image"
                className="flec justify-center"
              />
              <div className="pt-3">
                <h1 className="text-lg">{product.name}</h1>
                <p className="font-medium">₹{product.price}</p>
              </div>
            </Link>
            <button
              className="w-[205px] mt-2 p-1 border-[1px] border-black"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Bag
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Products;
