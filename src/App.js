
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from "../src/components/navbar";
import {Shop} from '../src/pages/shop/shop';
import {Cart} from '../src/pages/cart/cart';
import {allProduct} from '../src/pages/shop/allProduct';
import ShopContextProvider from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>

        {/* navbar shown in every page that's why it is above the routes */}   
        <Navbar/>

        <Routes>
          
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/allProducts' element={<allProduct/>}/>          
        </Routes>

      </Router>

      </ShopContextProvider>
    </div>
  );
}

export default App;
