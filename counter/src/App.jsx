import React, { useState } from 'react'
import './App.css'
function App() {
  const [Quantity1, setQuantity1] = useState(0)
  const [Quantity2, setQuantity2] = useState(0)

  let Food = "Burger"
  const price = 40;
  let finaltotal1 = Quantity1 * price
  let finaltotal2=Quantity2*price
   let totalAmount = finaltotal1+finaltotal2
  return (
    <div className='component'>
      <div className='main-card'>
        <h1>Foodies</h1>
        <div className='food-card'>
          <h2>{Food}</h2>
          <img src="https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg"alt="" />
          <p>Price : ₹{price}</p> 
          <div className='quantity-card'>
            <button 
            onClick={()=>{
              if (Quantity1>0) {
                setQuantity1(Quantity1-1)
              }
            }}
             >-</button>
            <p>{Quantity1}</p>
            <button 
            onClick={()=> {
              if (Quantity1<15)
                 {
               setQuantity1(Quantity1+1)
            }}}
            >+</button>
          </div>
        </div>

      </div>
      <div className='main-card'>
        <h1>Foodies</h1>
        <div className='food-card'>
          <h2>{Food}</h2>
          <img src="https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg"alt="" />
          <p>Price : ₹{price}</p> 
          <div className='quantity-card'>
            <button 
            onClick={()=>{
              if (Quantity2>0) {
                setQuantity1(Quantity2-1)
              }
            }}
             >-</button>
            <p>{Quantity2}</p>
            <button 
            onClick={()=> {
              if (Quantity2<15)
                 {
               setQuantity2(Quantity2+1)
            }}}
            >+</button>
          </div>
        </div>

      </div>
      <div className='price-card'>
      <h2>Bill Summary</h2>
      <p>
          Food: {Food} <br />
          Quantity:-{Quantity1} : ₹ {finaltotal1} <br />
          Quantity:-{Quantity2} : ₹ {finaltotal2} <br />
          Total Amount : ₹ {totalAmount}
        </p>

      </div>
    </div>
  )
}

export default App
