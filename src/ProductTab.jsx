import React from 'react'
import Product from './Product'

const ProductTab = () => {
    let options = [<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li> ];
    // let options2 = {a : "hi-tech", b: "durable", c: "fast"};
  return (
    <div>
      <Product title='Phone' price={30000} features={options}/>
      <Product title='laptop' price={40000}/>
      <Product title='pen' price={1}/>
    </div>
  )
}

export default ProductTab
