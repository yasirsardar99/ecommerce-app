import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
// import Product from '../shop/product';
import { ShopContext } from '../../context/shop-context';
import { CartItems } from './cart-items';
import {useNavigate} from 'react-router-dom';

export const Cart = () => {

  const {cartItems , getTotalCartAmount} = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      {/*  */}
      {totalAmount>0?<h2  className='p-4'>SELECTED CART ITEMS</h2>: <h2  className='p-4'>CART IS EMPTY</h2> }
      
      
            <div className='d-flex justify-content-between'>
{/* checkout div */}  
         
              {totalAmount>0 ?
               <div className="checkout col-md-4 border-right border-dark">
                <div>
                <h2 className='my-5'><b>{totalAmount}$</b></h2>
                </div>
                <button className='btn btn-warning btn-outline-dark mx-4'>checkout</button>
                <button onClick={()=>navigate("/")} className='btn btn-light text-dark btn-outline-warning'>Continue Shopping</button>
              </div>
            : 
            <h6 className='mx-5 '></h6>  
            }
         
              

          {/* items div */}
            <div className="container bg-white py-3 px-5">
              <div className="row">
 
                {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItems data={product} />
              }
             
            })}
              </div>

              
            </div>
            </div>




            
            
    </div>
      
  )
}

export default Cart;
