import { Link, useNavigate, useParams } from 'react-router-dom'
import Products from '../data.js'
// import { Product } from './Product.jsx'

export const SingleProduct = () => {
            const navigate =useNavigate()
  const { ProductId } = useParams('id')
  const SingleProduct = Products.find(Product => Product.id === parseInt(ProductId))
  //  console.log(typeof(ProductId))
  // console.log(Product)
  const { name, price, image, details } = SingleProduct

  console.log("ProductId", ProductId)
  console.log("Product", SingleProduct)


  
    return(
<div className="containersin">
        <div className="row">
          <div className="col1">
            <img src={image} alt="" className="img" />
          </div>
          <div className="col2">
            <h2 className='name'>{name}</h2>
            <p className="pricesin"><strong>{price}</strong></p>
            <p className='detailssin'>{details} {details} {details}  </p>
            
            <button className="btnsin" onClick={() => navigate(-1)}>BACK</button> &nbsp; 
            <button className="btnsin" onClick={() => navigate('/product')}>NAVIGATE TO PRODUCTS</button> &nbsp;
            {/* <Link to="/product" className="btn ">PRODUCTS</Link> */}
                         
             </div>
             </div>
             </div>
              
              )

}




 
 
 