import React, { useState,useEffect } from 'react'


//getting the values to loacl storage




  const getDatafromLS=()=>{
    const data = localStorage.getItem('dataProducts');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }

export const Locdata=()=>{

//main array
 const[dataProducts,setDataproducts]=useState(getDatafromLS('images'))

const[idData,setidData]=useState('')

const[des,setdes]=useState('')
const[images,setImages]=useState('')
// const[images,setImages]=useState('image')
//  const image=[{
//     "image":"https://www.adobe.com/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png?width=750&format=png&optimize=medium"
//  }
// ,
// {
//   "image":"'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
// }
// ]




// const[images,setImages]=useState([{
//   image:"https://www.adobe.com/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png?width=750&format=png&optimize=medium"
// }])

  // const images="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
      
  //  const image="https://www.adobe.com/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png?width=750&format=png&optimize=medium"
    
  // --------------------------------------------------
  
  // form submit event
    const handleAddBookSubmit=(e)=>{
      e.preventDefault();
     // creating an object
      
      let dataProduct={
          idData,
          des,
           images,
         
       
      }
      setDataproducts([...dataProducts ,dataProduct]);         
      
      setidData('');
      setdes('');
         setImages('')

      
  }


// -------------------------------
// images to localstorage

//  const addImagesHandler = (e) => {
//   const file = e.target.files[0];
//   getBase64(file).then(base64 => {
//     localStorage["fileBase64"] = base64;
//     console.debug("file stored",base64);
//   });
// };
    

// const getBase64=(file)=>{
//   return new Promise((resolve,reject)=>{
//     const reader=new FileReader()
//     reader.onload=()=>resolve(reader.result)
//     reader.onerror=error=>reject(error)
//     reader.readAsDataURL(file)
//   })
// }
    
//  const addImagesHandler=(e)=>{
//     const image=e.target.images[0]
//     getBase64(image).then(base64=>{
//       localStorage["imageBase64"]=base64
//       console.debug("image stored",base64)
//     })

//    } 
//    const getBase64=(image)=>{
//       return new Promise((resolve,reject)=>{
//         const reader=new FileReader()
//         reader.onload=()=>resolve(reader.result)
//         reader.onerror=error=>reject(error)
//         reader.readAsDataURL(image)
//       })
//      }

   useEffect(() => {
      const dataProducts = JSON.parse(localStorage.getItem('dataProducts'))
      console.log(localStorage)
        // localStorage.clear()
      if (dataProducts) {
          setDataproducts([...dataProducts])
        
        
        console.log(dataProducts)
        
      }
      
  
    }, [])

    
// --------------------------------------

  const deleteHandler = (remove) => {
    console.log(remove)
    let temp=(dataProducts.filter((_, index) => index !== remove))
    //  localStorage.removeItem('dataProducts', JSON.stringify(temp))

    setDataproducts(dataProducts.filter((_, index) => index !== remove));
}


    

  useEffect(()=>{
    localStorage.setItem('dataProducts',JSON.stringify(dataProducts));
  },[dataProducts])

    // storing book in LS
    // useEffect(()=>{
    //     localStorage.setItem('dataProducts',JSON.stringify(dataProducts)); 
    // },[dataProducts])   

        

             
    
    



             return (
             
       <div className='container'>
            <div className='container1'>
             <form autoComplete="off" className='formsub' id='textbox' 
          onSubmit={handleAddBookSubmit}>
            <label> Enter the Id</label>
            <input type="text" className='form-control' id='textbox' required
            onChange={(e)=>setidData(e.target.value)} value={idData}></input>
            <br></br>
            <br></br>
            <label>Description</label>
            <input type="text" className='form-control'  id='textbox'required
            onChange={(e)=>setdes(e.target.value)} value={des}></input>
          
            <br>
            </br><br></br>
          <label >Enter the url</label>
         < input type="url"required value={images} onChange={(e)=>setImages(e.target.value)}></input>
         <br>
         </br> <br></br>
{/* ----------------------------------------- */}
            {/* <input type="file" id="myFile" name="filename" value={images} onChange={addImagesHandler}/> */}

            {/* <input type="file" id="myFile" name="filename" value={images} onChange={addImagesHandler}/> */}

               
{/* images to add */}
         

                  {/* <img src={images} alt='dog img' value={images} onChange={(e)=>setImages(e.target.value)} >
                   </img>  */}
                  {/* <img src={images} alt='dog img' value={images} onChange={addImagesHandler}></img>  */}
            
            <button type="submit" className='Locbutton'>ADD </button>
            
           
          </form>
        </div>
       

    



{/* ------------------------------------------------- */}
               <div className='tablediv'>

                        {/* <table> */}
                        
                       
                        <div>
                         <div className='dataloc'>
                          {
                            dataProducts?.map((dataProduct,ind)=>
                              <div key={dataProduct.idData}>
                                 <img src={dataProduct.images}alt='url' className='dataimages'></img>
                                <h2 className='data' style={{color:"#DC0000"}}>{dataProduct.idData} </h2>
                                <h1 className='datades' style={{color:"#FF0060"}}>{dataProduct.des}</h1>
                               
                                
                                       {/* {
                                        dataProducts.images.map((image)=>
                                            <img src={image} alt='url'></img>
                                        )
                                       } */}
                                <button type='button' className='deletebutton' onClick={() => deleteHandler(ind)}>delete</button>
                                 
                              </div>

                            )
                          }
                         </div>

                          </div>
                         
                              


                             

                    </div> 
                     


         </div>















          
















    )


    }
