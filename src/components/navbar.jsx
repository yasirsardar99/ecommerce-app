import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';

export const Navbar = () => {
  return (
    
      <nav class="navbar navbar-white bg-light d-flex justify-content-between py-3">
          <div>
              <Link to="/" className='text-dark'><b>SHOP-CART</b></Link>

              <Link to="/" className='text-dark mx-3'>All Products</Link>

          </div>
          <div>
              <form class="form-inline">
                  <Link to="/" className="btn btn-sm btn-dark btn-outine-light my-2 my-sm-0 ">SHOP</Link>
                  <Link to="/cart"  className='mx-4'>
                    <ShoppingCart size={32} color='black'/>
                  </Link>


              </form>
          </div>
      </nav>
     
  )
}

export default Navbar;
