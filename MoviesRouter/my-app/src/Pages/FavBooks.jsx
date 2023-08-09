import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const FavBooks = () => {
  const [data, setdata] = useState([])
const { BooksId } = useParams('id')
  console.log(BooksId)
  console.log(useParams('id'))
useEffect(() => {
    axios.get('https://example-data.draftbit.com/books?')

      .then((res) => {
        console.log(res.data);
        const resposeData = res.data;
        const resultData = resposeData.filter((item) => item.id == BooksId);
        setdata(resultData)
     }).catch((err) => {
      console.log(err)
       
    })
},[BooksId])
console.log(data);

  return (
    <div>
      {/* <h1>{data}</h1> */}
      {
        // data?.filter(book => book.id).map((item)=>(
          data?.map((item) => {
          return (
            <div key={item.id}>


              <div><img src={item.image_url} className="sinimg" name='id'></img></div>
              <h2 className="sintitle">{item.title} </h2>

              <h2 className="sinauthors"> By: {item.authors}</h2>

              <h5 className="sinquote">{item.Quote1}</h5>

              <p className="sindes">{item.description}</p>
              <p>RATING:{item.rating}⭐⭐⭐⭐⭐</p>
              <h6 className="singen">@{item.genre_list}</h6>
              
            </div>


          );
        }


        )

      }





    </div>


  )

}












