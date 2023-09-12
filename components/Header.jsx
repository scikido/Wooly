import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { emptyCart } from "@/redux/cart.slice";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { status, data: session } = useSession();

  const logOut = () => {
    dispatch(emptyCart());
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div>
      <nav
        className="flex flex-col md:flex-row bg-yellow-200 
      text-2xl justify-between fixed w-screen font-poppins"
      >
        <div className="flex items-center">
          <Link href="/" className="pl-2 py-4 mr-auto md:mr-0 font-[600]">
            Wooly 🐑
          </Link>
          <div className="md:hidden mr-2 cursor-pointer" onClick={toggle}>
            <FaHamburger />
          </div>
        </div>
        <div className="link-content hidden md:flex mt-4">
          <ul className="flex gap-10" id="nav">
            <li>
              <Link href="/cart" className="">
                Cart 🛒 {getItemsCount()}
              </Link>
            </li>
            <li>
              <Link href="/" className="">
                Shop
              </Link>
            </li>
            <li>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <div className="flex gap-5">
                  <h1 className="">{session.user.name}</h1>
                  <button onClick={() => logOut()} className="mr-4">
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login" className="mr-4">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        {/*for mobile*/}
        <div
          className={
            isOpen
              ? "grid grid-rows-3 text-center items-center w-full"
              : "hidden"
          }
          onClick={toggle}
        >
          {status === "loading" ? (
            "Loading"
          ) : session?.user ? (
            <div className="flex justify-center items-center gap-7">
              <h1>{session.user.name}</h1>
              <button onClick={() => logOut()}>Logout</button>
            </div>
          ) : (
            <Link href="/login" className="px-6">
              Login
            </Link>
          )}
          <Link href="/" className="px-6">
            Shop
          </Link>
          <Link href="/cart" className="px-6">
            Cart 🛒
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
