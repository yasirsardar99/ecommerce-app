import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';
import '../../../src/App.css';





export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;

    const navigate = useNavigate();

    // usecontext is predefined by react. It use the values of context that we need. Let say we need to use addtocart function from shopcontext
    const {cartItems , addToCart } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (

        
        <div className="col-lg-4 col-md-6 col-sm-6 my-2 " >
            <div className="card my-3 h-100 "  >
                <img className="card-img-top p-5" src={productImage} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text"><b>${price}</b></p>
                    <div className='d-flex justify-content-center'>
                    <button  onClick={()=>{  navigate("/cart");  {cartItemAmount>0?navigate("/cart"):addToCart(id)&&navigate("/cart")} }
                         } className='btn btn-sm btn-dark btn-outline-light border-dark mx-2 border rounded-pill'  > shop now </button>
                    <button className='h-6 btn px-5 btn-sm btn-light btn-outline-dark border-dark border rounded-pill' onClick={() => addToCart(id)}>  Cart {cartItemAmount>0 ? cartItemAmount: ""}
                    </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Product
