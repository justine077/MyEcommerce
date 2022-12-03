import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState' 
import ProductItem from '../utils/productitem/ProductItem'
import Loading from '../utils/loading/Loading'

function Products() {
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  const [isAdmin] = state.userAPI.isAdmin



  return (
    <div>
    <div><h1 className='text-center'>Flash Sales</h1></div>
    <div className='products'>    
      {
        products.map(product =>{
          return <ProductItem key={product._id} product={product} isAdmin={isAdmin}/>
        
        })
      }
    </div>
    {products.length === 0 && <Loading/>}
    </div>
  )
}

export default Products