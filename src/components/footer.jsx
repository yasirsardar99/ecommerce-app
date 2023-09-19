import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const footer = () => {
return(
    <>
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, at venenatis augue tristique.</p>
          </div>
          <div className="col-lg-4">
            <h4>Contact Us</h4>
            <p>Email: info@example.com<br />Phone: 123-456-7890</p>
          </div>
          <div className="col-lg-4">
            <h4>Follow Us</h4>
            <a href="#" className="mr-2"><FaFacebook /></a>
            <a href="#" className="mr-2"><FaTwitter /></a>
            <a href="#" className="mr-2"><FaInstagram /></a>
            <a href="#" className="mr-2"><FaLinkedin /></a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12 text-center">
            <p>&copy; 2023 My E-Commerce Store | <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </footer>
    </>
)
}

export default footer;