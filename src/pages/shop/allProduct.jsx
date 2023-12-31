import React from 'react';
import {PRODUCTS} from '../../products';
import {Product} from './product';



export const allProduct = () => {



  return (
    
    <div className="shop my-5">
      
      <div className="shopTitle">
        <h1>All PRODUCTS</h1>
{/* d-flex justify-content-between border-dark my-3  */}
        {/* thats the main thing where product function works. Will need to understand this with focus */}

        <div className="container ">
          <div className="row">
            {/* The Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. */}

            {/* products name have array of values stored map function extract it one by one */}

            
              {/* what we gonna say we have complete file of products. So, we map it then we take each object one by one.
              We then make a function of product and pass a new file with a name of Product and share a prop of product as a new sign name of "data"
              */}

            {PRODUCTS.map(
              (product)=>(<Product data={product}/>)
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default allProduct;
