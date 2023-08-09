
import { Link, useNavigate } from 'react-router-dom'
import PRODUCTS from '../data.js'
// import { SingleProduct } from './SingleProduct.jsx'






export const Product=()=>{

  const navigate= useNavigate()
    return(
      <main>

      <div className="pg-header">
        <div className="container">
          {/* <div className="row align-items-center"> */}
          <div className='row'>
            <div className="col">
              <h1>Products</h1>
            </div>
            <div className="col">
              <nav>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/" >Home</Link>
                  </li>

                  <li className="breadcrumb-item">
                    <Link to="/About" >About</Link>
                  </li>
                  <li className='singlepro'>
                    <button  onClick={()=>navigate(-1)}>Go back</button>
                    {/* <button  onClick={()=>navigate('/product')}>navigate to product</button> */}

                  </li>
                  
                  {/* <li className="breadcrumb-item active">Product</li> */}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-1 m-1 container content">
        <div className="row products-row" style={{columnCount:2}}>
          {PRODUCTS.map( (product) => {
            return (
              <div className="col-lg-4" key={product.id}>

                <div className="card" id='img'>
                  <div className="img-wrap">
                    <img src={product.image} alt="" width= '95.99%' height='auto' padding='500px' 
                     place-items=' center' margin= '0 auto'/>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    {/* <div className="d-flex justify-content-between align-items-center"> */}
                      <span>Price: <strong className="price">{product.price}</strong></span>
                      
                      <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">DETAILS</Link>


                    </div>
                  </div>
                </div>

            //   </div>
             )
          } )}
        </div>
      </div>

    </main>
    )
  } 