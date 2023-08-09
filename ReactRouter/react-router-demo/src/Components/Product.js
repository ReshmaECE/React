import { Link, Outlet  } from "react-router-dom"


 export const Product = () => {
    return (
        <>
        <div>
            <h1>producs of the sale </h1>
          <input type="text" placeholder="Search.."></input>
        </div>
             
               <nav>
               <Link to='Feature'>Feature </Link>
               <Link to='New'> New</Link>
               </nav>

              <Outlet />
        </>
    )
}

export default Product
