import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../../src/App.css";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "./../assets/adobe assets/1x/3.png";

export const Navbar = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return (
    <nav class=" d-flex justify-content-between navbar navbar-white bg-light d-flex justify-content-between py-3">
      <div className="navbar-items ">
        <Link to="/" className="text-dark">
          {" "}
          <img src={logo} className="main-Logo" alt="logo" />
        </Link>

        {/* <Link to="/" className='all-product text-dark mx-3'>All Products</Link> */}
      </div>
      <div className="d-flex align-items-center">
        {/* <Link  className="btn btn-sm btn-dark btn-outine-light my-2 my-sm-0 ">login</Link> */}

        <Link to="/cart" className="mx-2">
          <ShoppingCart size={32} color="black" />
        </Link>

        {isAuthenticated ? (
          <>
            <img
              className="userprofile mx-2"
              src={user.picture}
              alt="user-profile"
            />
            <button
              className="btn btn-sm btn-dark  btn-outine-warning mx-2 my-2 my-sm-0 "
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            className="btn btn-sm btn-warning btn-outine-light my-2 my-sm-0 "
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
