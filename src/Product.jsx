import React from 'react'
import './Product.css'

const Product = ({title,price,features}) => {
    // const list = features.map((feature) => <li>{feature}</li>);
    // let isDiscount = 
    let styles = {backgroundColor: price > 30000 ? "pink" : ""};
  return (
    <div className='product' style={styles}>
      <h3>{title}</h3>
      <h5>price: {price}</h5>
      {price > 30000 && <p>"Discount of 5%"</p>}
    </div>
  )
}

export default Product
