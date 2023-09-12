import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Layout from "@/components/Layout";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/redux/cart.slice";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function Cart() {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const { data: session } = useSession();
  return (
    <div>
      {cart.length === 0 ? (
        <>
          <Layout>
            <div className="flex justify-center items-center flex-col md:m-24 md:pt-0 pt-28">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
                width={300}
                height={300}
                className="mr-7"
              />
              <h1 className=" text-2xl font-medium mt-10">Your bag is empty</h1>
              <p className="text-gray-500 pt-2">
                Looks like you haven't made your choice yet..
              </p>
              <Link href="/" className="mt-4 bg-green-500 p-2 rounded-lg">
                Back To Homepage
              </Link>
            </div>
          </Layout>
        </>
      ) : (
        <>
          <Layout>
            <div class="container mx-auto px-4 py-8 pt-20 ">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-3/4 lg:pl-24">
                  {cart.map((item) => (
                    <div key={item.id} className="p-5 ">
                      <div className="flex items-center gap-5 flex-col md:flex-row">
                        <div className="">
                          <Image
                            alt="product-img"
                            src={item.img}
                            width={300}
                            height={300}
                            className="md:w-[200px]"
                          />
                        </div>
                        <div className="mr-36">
                          <h1 className="text-xl">{item.name}</h1>
                          <h1 className="text-xl font-semibold">
                            ₹{item.price}
                          </h1>
                          <div className="flex items-center gap-2 pt-3">
                            <button
                              className="bg-green-300 px-2"
                              onClick={() =>
                                dispatch(incrementQuantity(item.id))
                              }
                            >
                              +
                            </button>
                            <button
                              className="bg-red-300 px-2"
                              onClick={() =>
                                dispatch(decrementQuantity(item.id))
                              }
                            >
                              -
                            </button>
                          </div>
                          <p className="pt-2">Quantity: {item.quantity}</p>
                          <button
                            className="p-1 mt-2 text-gray-500"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div class="md:w-3/4 md:pl-8">
                  <div class="ml-6 w-60 pt-4">
                    <div class="px-2 py-3 sm:pb-4.5 lg:py-5 border-2 border-gray-800">
                      <h1>Total Amount: ₹{getTotalPrice()}</h1>
                    </div>
                    <div className="mt-3">
                      {session?.user ? (
                        <Link
                          class="bg-green-500  font-semibold px-4 py-1 rounded "
                          href="/shipping"
                        >
                          Check Out
                        </Link>
                      ) : (
                        <Link
                          class="bg-green-500  font-semibold px-4 py-1 rounded "
                          href="/login"
                        >
                          Check Out
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
