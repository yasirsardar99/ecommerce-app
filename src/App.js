
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from "../src/components/navbar";
// import {foooter} from "../src/components/footer"
import {Shop} from '../src/pages/shop/shop';
import {Cart} from '../src/pages/cart/cart';
// import {allProduct} from '../src/pages/shop/allProduct';
import ShopContextProvider from './context/shop-context';
import { Auth0Provider } from '@auth0/auth0-react';


function App() {
  return (
    <div className="App">
     
     <ShopContextProvider>
      <Auth0Provider
    domain="dev-fcp3oek4zeohjjn0.us.auth0.com"
    clientId="mtwOzkwehqVqraCX0h0YPnuITK3v9djr"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
      >
      
      <Router>

        {/* navbar shown in every page that's why it is above the routes */}   
        <Navbar/>

        <Routes>
          
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/allProducts' element={<allProduct/>}/>

        </Routes>
    

      </Router>
      </Auth0Provider>
      
      </ShopContextProvider>
    </div>
  );
}

export default App;
