import React from "react"
import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"


export const Books = () => {

  const [books, setBooks] = useState([])
  const [favbooks, setfavbook] = useState([])
  // const [remove,setremove] =useState([])
  
 
  useEffect(() => {
    axios.get("https://example-data.draftbit.com/books?_limit= 15")
      .then((res) => {
        //  console.log(res.data);


        setBooks(res.data)
      })
      .catch((err) => {
        console.log(err)

      })

  }, [])


  // const addFavbookHandler=(books)=>{
  //   const newfavbook=[...favbooks,books]
  //    setfavbook( newfavbook)    
  // }
  //------------------------------------------
  //  const addFavbookHandler=id=>{
  //   if(!favbooks.includes(id)) setfavbook (favbooks.concat(id));
  //   console.log(id)
  //  }
  //-----------------------------------

  // const addFavbookHandler=e=>setfavbook(e.target.value)
  //    const handler=()=>{
  //     setBooks(favbooks)
  //     setfavbook('')
  //    }    
  //---------------------------------
  const addFavbookHandler = (book) => {
      

    const result=favbooks.some(favbook =>{
        return favbook.id===book.id
      
        
    })

    if(result){
      alert('its already in favs')

    }else{
      setfavbook([...favbooks, book])
      
    }
            console.log(result)
  } 
    
 
  // // //  if(favbooks.filter(books=>book.id==!book.id)){
  // // // //   // console.log(books.find(book=>book.id===book.id).id)
  // // //   alert('its already')

  //   }}


        //    const addFavbookHandler=(book)=>{
        //  setfavbook([...favbooks,book])
            // if(book.id==='id' && book.title==='title'){
          //   alert('its already')
          //  }
      //  console.log(book)}

            
            // const addFavbookHandler=(book)=>{
            //   setfavbook([...favbooks,book])
            //   if(book.id==!'id' && book.title !== 'title'){
            //     alert('its already')
                
            //   }
              
            // }


           
           







      
      //  const addFavbookHandler=()=>books.filter(book=>{
      //       setfavbook([...favbooks, book])
      //   if(book.id==='id' || book.title==='title'){
      //   return false
      //   }
      //   return true;
      //  }) 
      //    console.log()

      // const addFavbookHandler = ()=>{books.filter(book => {
      //   setfavbook([...favbooks,book])
      //   return Object.keys(books).every(key => {
          
      //     return books[key] === book[key];
          
      //   });
      // })};
      




  //     const addFavbookHandler=books.filter(book=>{
  //       // setfavbook([...favbooks, book])
  //   if(book.id==='id' && book.title==='title'){
  //     return true;
  //   }
  //   return false;
  //  }) 
  //    console.log(addFavbookHandler)






       

//  const addFavbookHandler=(id)=>{
//      let item=setfavbook(id)
//      let checkitem=[...favbooks,books].filter((i)=>{
//       return i.id==item.id
//      })
//      if(checkitem.length !==0){
//       alert('is already')
//      } else{
//          setBooks((books=[...books,id]))
//          console.log(books)
//      }
// }




















//------------------------------------------------------------------------------------------------------------- 

         
     
    // const add= book.filter(book=>{
    //   if(favbooks &&book.id !==favbooks){
    //     return true
    //   }
    //   return false
    // })

              
  
  //-------------------------------------
      //  const removeById =id =>{
      //   setremove(olddata=>{
      //     return olddata.filter(remove=>remove.id!==id)
      //   })
      //  }


// ---------------------------------------
  // const addFavbookHandler=(book)=>{
  //   const newfav=([...favbooks,book])
  //   setfavbook(newfav)
  // }




  // useEffect(() => {
  //   setfavbook(books);
  // }, []);

  // useEffect(() => {
  //   console.log(favbooks);
  // }, [favbooks]);

  // function handleFavorite(id) {
  //   const newFavorites = favbooks.map(ind => {
  //     return ind.id === id ? { ...ind, favbooks: !ind.favbooks } : ind;
  //   });

  //   setfavbook(newFavorites);
  // }





  return (
    <>
      <div className="books" style={{ columnCount: 3 }}>
        {
          
          books?.map((book) => (
            // books.filter(book=>book.id).map((book)=>(
            <div key={book.id}>

              <div><img src={book.image_url} className="img" alt=""  ></img></div>

              <h2 className="tilte">{book.title}</h2>
              <h4 className="authors">BY:{book.authors}</h4>


              <Link to={`/Books/${book.id}`} id="sin" className="singlebook" >  singleBooks Details⭐</Link>
              {/* <button onClick={addFavbookHandler}  value={book.favbooks}> add to FavBooks</button> */}


              {/* <button onClick={()=>addFavbookHandler(book.id.)}>add favorite</button>   */}









              {/* <div>
      {books.filter(Book => Book.id).map(setfavbook => (
        <li>
          {setfavbook.title.authors}
        </li>
      ))}
    </div>  */}


              {/* } */}






              {/* <h1>Favorite list</h1>
      <ul>
        {favbooks.map(item =>
          item.favorite === true ? <li key={item.id}>{item.name}</li> : null

        )}</ul>
                      <button>addlist</button> */}

              {/* <ul>
                <h1>favorite list</h1>

                <h1>{book.title}</h1>
 */}

              <button onClick={() => addFavbookHandler(book)}>Addlist</button>
               
              {/* <button onClick={(removeById(remove.id))}>delete</button> */}









              {/* <button
              onClick={() => {
                handleFavorite(ind.id);
              }}> add list</button> */}





              {/* <ul>
          {favbooks.map(ind => {
            return (
              <li key={ind.id}>
                
                <div className="userInfo">
                  <p>
                    {ind.tilte}
                     {ind.authors}
                    
                  </p>
                  
                </div>
              </li>
            );
          })}
          <button onClick={handleFavorite}>addlist</button>
        </ul> */}


            </div>



          




          )


          )
        }


      </div>

      {/* --------------------------------------- */}
      {/* fav book to add  */}


      <div>
        <h1>Add Fav list </h1>
        {
          favbooks.map(item => (
        
                   <li key={item}>
             
            <div>{item.title}
              <img src={item.image_url} alt="" />
              <h4>{item.authors}</h4>
            </div>
              </li>
          ))
          
        }
        
      </div>
            
    </>
  )
}









