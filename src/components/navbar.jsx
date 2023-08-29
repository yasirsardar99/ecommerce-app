import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import '../../src/App.css';
import logo from './../assets/adobe assets/1x/3.png';


export const Navbar = () => {
  return (
    
      <nav class="navbar navbar-white bg-light d-flex justify-content-between py-3">
          <div className='navbar-items '>
              <Link to="/" className='text-dark'> <img src={logo} className='main-Logo' alt="logo" /></Link>

              {/* <Link to="/" className='all-product text-dark mx-3'>All Products</Link> */}

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
