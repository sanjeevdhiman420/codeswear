import React from 'react'
import Image from 'next/image'
export default function Order() {
  return (
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR.COM</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">ORDER#123</h1>
        <p className="leading-relaxed mb-4">Your order has been successfully placed.</p>
        <div className="flex mb-4">
        <p className="flex-grow text-center text-pink-500 border-b-2 py-2 text-lg px-1">Item Description.</p><p className="flex-grow text-center text-pink-500 border-b-2 py-2 text-lg px-1">Quantity.</p><p className="flex-grow text-center text-pink-500 border-b-2 py-2 text-lg px-1">Item Total</p>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">wear the code (XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
          
          <span className="ml-auto text-gray-900">499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">wear the code (XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
          
          <span className="ml-auto text-gray-900">499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">wear the code (XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
         
          <span className="ml-auto text-gray-900">499</span>
        </div>
        <div className="flex flex-col">
          <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
     <div className="my-2">
     <button className="flex ml-0 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
     </div>
        </div>
      </div>
      <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" width={400} height={400}/>
    </div>
  </div>
</section>
  )
}
