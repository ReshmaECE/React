
import axios from 'axios'
import { useEffect, useState } from 'react'
// import{Link} from 'react'
import { Link } from 'react-router-dom'



// //main array


export const Products = () => {
  const [products, setProducts] = useState([])

  const [favorites, setFavorites] = useState([])
  const [locProducts, setLocproducts] = useState([])



  // ------------------------
  // localstorage

  useEffect(() => {
    // const dataProducts = JSON.parse(localStorage.getItem('dataProducts'))
    // console.log(localStorage)

    // if (dataProducts) {
    //   setDataproducts([...dataProducts])

    //   console.log(dataProducts)

    //  }
    const locProducts = JSON.parse(localStorage.getItem('dataProducts'))
    if (locProducts) {
      setLocproducts(locProducts)
    }
    console.log(locProducts)

  }, [])



  // ----------------------------------------------------------
  //this for axios fetch data useeffect code
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {

        //  console.log(res.data)
        setProducts(res.data)


      })
      .catch((err) =>
        console.log(err))

  }, [])

  // -------------------------------------------------------------
  // const addtofavHandler=()=>{
  //   setFavorites([...Favorites,Products])
  // }





  //---------------------------------------------------------
  //this favorites items with condition for dont add image at second time

  const addtofavHandler = (product) => {
    //  setFavorites([...favorites,product])
    const result = favorites.some(favorites => {
      return favorites.id === product.id


    })

    if (result) {
      alert('its already in favariters products')

    } else {
      setFavorites([...favorites, product])

    }
    // console.log(result)


    // console.log(favorites)
    // console.log(product)
  }





  // 
  return (
    <>
      <div className='fullpage'>
        <div>
        <div className='productdisplay'>
              

          <div className='display' >
           
                  
                   
            {
         
              products?.map((product) =>
                <div key={product.id}>
              
                         <div>
                  <div >

                    <img src={product.image} alt='' className='proimage' id='image' style={{ width: '200px', height: '300px' }} ></img> </div>


                       <div className='proprice'>
                  <h2 className='bottomleft'>$:{product.price}</h2></div>

                 
                    {/* <div className='title'>
                    <h2 className='protitle' style={{ color: '#456890' }}>{product.title}  </h2></div> */}
                    <Link to={`/Products/${product.id}`} className="linkbutton">DETAILS</Link><br>
                    </br><br></br>


                   <div className='probutton'> 
                    <button onClick={() => addtofavHandler(product)} className='button'>Add To Favorites Product❤️</button></div>
                  <br></br>
                  </div>


                         
                </div>
                    

              )

            }
               </div> 

{/* ------------------------------------------------------------ */}
          
          

          <h2 style={{color:"#5F264A"}}>Add the favorites items </h2>
          <div className='favoriteslist'>
          
          <div className='favs'>
               

            {
              favorites?.map((item) =>


                <div key={item}>
                  <img src={item.image}  alt='' className='favimg'></img> 


                            <div className='favprice'> <h2 className='favprice1'>US ${item.price}</h2></div>
                   
                 

                 
 
                        <div>
                        
                        </div>

                </div>

              )}

{/* ----------------------------------------------------------------------------------------------------- */}

          </div>
          
        </div>
       
        <h1 style={{color:"red"}}>localstorage Data</h1>
        <div className='localstorage'>
            {
              locProducts?.map((locProduct)=>{
                return( 
                <div key={locProduct.id}>
                  <img src={locProduct.images} alt='dog img' className='locimg'></img>
              <h1 className='locdata'>{locProduct.idData} </h1>
                  <h2 className='locdes'>{locProduct.des}</h2>
                  
                   </div>
                  )})}
          </div></div>
       
        </div> 
       
{/* ------------------------------------------------------- */}

        </div>



        {/* add to the list */}



        
        {/* <div className='favoriteslist'>
          <h1 style={{ textAlign: 'center' }}>ADD TO THE FAVORITES ITEMS </h1>
          <div className='favs'>


            {
              favorites?.map((item) =>


                <div key={item}>
                  <img src={item.image} style={{ width: '40%' }} alt='' className='favimg'></img>
                  <h3 className=''>{item.title}</h3>

                  <h2 style={{ color: '#DF2E38' }}>US ${item.price}</h2>

                  <p className='favdes'>{item.description}</p>



                </div>

              )}



          </div>
        </div> */}


        {/* --------------------------------------- */}
        {/* local storage item  to add in the product page*/}







       
          
         
          {/* <div>
            {
              locProducts?.map((locProduct)=>{
                return( 
                <div key={locProduct.id}>
              <h1>{locProduct.idData}</h1>
                  <h2>{locProduct.des}</h2>
                  <img src={locProduct.images} alt='dog img'></img> </div>)})}
          </div></div> */}


                 
 

    
             

      {/* ------------------------------------------------------------------- */}
           
    </>


  )
}

