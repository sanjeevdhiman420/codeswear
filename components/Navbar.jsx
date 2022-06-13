import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
   <div className="flex flex-col md:justify-start md:flex-row justify-center items-center mb-1 py-2 shadow-xl">
    <div className="logo mx-5">
        <Image src="/logo.webp" width={200} height={40}/>
    </div>
    <div className="nav">
        <ul className='flex space-x-6 font-bold md:text-md' >
            <Link href={'/tshirts'}><a><li>T Shirts</li></a></Link>
            <Link href={'/Hoodies'}><a><li>Hoodies</li></a></Link>
            <Link href={'/Stickers'}><a><li>Stickers</li></a></Link>
            <Link href={'/Mugs'}><a><li>Mugs</li></a></Link>
        </ul>
    </div>
    <div className="cart absolute right-0 mx-5 top-4">
<button><AiOutlineShoppingCart className='md:text-xl  md:2xl'/></button>
    </div>
   </div>
  )
}
