import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItems = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeToCart } = useContext(ShopContext);
  return (
    <div className="container">
      <div className="d-flex flex-row">
        <div className="col-lg-4  col-md-6 col-sm-6 my-3">
          <div class="card mb-3 border-dark rounded-5 h-100">
            <img class="card-img-top" src={productImage} alt="img" />
            <div class="card-body">
              <h5 class="card-title">{productName}</h5>
              <p class="card-text">
                {" "}
                <b>${price}</b>{" "}
              </p>
              <div className="d-flex px-4 ">
                <button
                  onClick={() => removeToCart(id)}
                  className="btn btn-sm btn-light border-dark rounded-0"
                >
                  {" "}
                  -{" "}
                </button>
                <input
                  className="form-control  bg-dark border-dark text-white text-center rounded-0"
                  value={cartItems[id]}
                  disabled
                />
                <button
                  onClick={() => addToCart(id)}
                  className="btn btn-sm btn-light border-dark rounded-0"
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
