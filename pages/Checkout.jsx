import React from "react";
import {

  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import Link from "next/link";
export default function Checkout({
  cart,
  clearCart,
  addToCart,
  removeFromCart,
  subTotal
}) {
  return (
    <div className="container m-auto">
      <h1 className="font-semibold text-3xl my-8 text-center">Checkout</h1>
      <h2
        className="font-bol
     text-xl"
      >
        1.devlivery Details
      </h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-full ">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-full ">
          <div className=" mb-4  ">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <label htmlFor="Address" className="leading-7 text-sm text-gray-600">
        Address
      </label>
      <textarea
        id=""
        name=""
        rows="2"
        cols="30"
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      ></textarea>

      <div className="mx-auto flex my-2">
        <div className="px-2 w-full ">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-full ">
          <div className=" mb-4  ">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-full ">
          <div className=" mb-4  ">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-full ">
          <div className=" mb-4  ">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2
        className="font-bol
     text-xl"
      >
        Review Cart Items & Pay
      </h2>
      <div className=" sideCart   bg-pink-200 p-6 my-4 m-2">
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
          <span className="font-bold">SubTotal:₹{subTotal}</span>
        </ol>
        
      </div>
      <div className="mx-4"></div>
      <Link href={"/Checkout"}>
            <button className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-indigo-600 rounded text-sm">
              <IoBagCheckOutline className="m-1" /> Pay ₹
            </button>
          </Link>
     
    </div>
  );
}
