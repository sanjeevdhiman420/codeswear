import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
const [cart, setCart] = useState({})
const [subTotal, setSubTotal] = useState(0)
useEffect(() => {
try {
  if(localStorage.getItem("cart")){
    setCart(JSON.parse(localStorage.getItem("cart")))
  }
} catch (error) {
  
}
}, [])

const saveCart = (myCart)=>{
  localStorage.setItem("cart", myCart)
}
const addtoCart = (itemCode, qty, price, name, size, variant)=>{
  let myCart = cart;
  if(itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty + qty
  }
  else {
    newCart[itemCode] = {qty:1, price, name, size, variant}
  }
  setCart(newCart)
  saveCart(newCart)
  
}

const clearCart = () =>{
  setCart({})
  saveCart({})
}
const removeFromCart = (itemCode, qty, price, name, size, variant)=>{
  let myCart = cart;
  if(itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty -  qty
  }
  if(newCart[itemCode]["qty"]<0){
    delete newCart[itemCode]
  }
  setCart(newCart)
  saveCart(newCart)
  
}
  return <><Navbar/><Component {...pageProps} /><Footer/></>
}

export default MyApp
