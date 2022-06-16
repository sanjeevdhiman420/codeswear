import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
export default function Navbar({
  cart,
  addToCart,
  removeFromCart,
  subTotal,
  clearCart,
}) {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
  return (
    <div className="flex flex-col md:justify-start md:flex-row justify-center items-center mb-1 py-2 shadow-xl  sticky-header ">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/logo.webp" alt="fyfh" width={200} height={50} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <a>
              <li>T Shirts</li>
            </a>
          </Link>
          <Link href={"/Hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/Stickers"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/Mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        
        className="cursor-pointer cart absolute right-0 mx-5 top-4 flex"
      >
        <Link href={'/Login'}><MdAccountCircle  className="md:text-xl  md:2xl mx-2"  /></Link>
        <AiOutlineShoppingCart className="md:text-xl  md:2xl" onClick={toggleCart}/>
      </div>
      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart absolute top-0 bg-pink-200 p-10 right-0  transform transition-transform ${Object.keys(cart).length !==0 ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 text-xl text-pink-500"
        >
          <AiFillCloseCircle className="cursor-pointer " />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && <div>No Items in the cart</div>}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="flex items-center justify-center w-2/3 bg-pink-300">
                    {cart[k].name}
                  </div>
                  <div className="flex items-center justify-center   bg-pink-300">
                    <AiFillPlusCircle
                      className="text-pink-500"
                      onClick={() =>
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                    />
                    <span className="mx-2">{cart[k].qty}</span>
                    <AiFillMinusCircle
                      className="text-pink-500"
                      onClick={() =>
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="font-bold">SubTotal:₹{subTotal}</span>



        <div className="flex">
          <Link href={"/Checkout"}>
            <button className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-indigo-600 rounded text-sm">
              <IoBagCheckOutline className="m-1" /> Checkout
            </button>
          </Link>
          <button className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-indigo-600 rounded text-sm ">
            <IoBagCheckOutline className="m-1" onClick={clearCart} /> Clearcart
          </button>
        </div>
      </div>
    </div>
  );
}
