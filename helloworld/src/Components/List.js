import React from "react";
// import Person from "./Person";

//function List() {


    // const names=['reshma','miru','geetha']               //          (3)
    // const List= names.map(name=><h2>{name}</h2>)      //another way continute  from (2)
    // return <h2>{List}</h2>
//--------------------------------------------------------

        // <div>
        // <h2>{names[0]}</h2>
        // <h2>{names[1]}</h2> // this is normal way to get names  but want use map method (1)
        // <h2>{names[2]}</h2>
        // </div>
//---------------------------------------------------------
// return(
//  <div>{names.map(name=><h2>{name}</h2> )}    {/* by map we will get names like this but we shortcut  */} (2)
//  </div>
//  )
//-----------------------------------------------------
// function List() {        
// const persons= [
//     {
//     id:1,
//     name:'reshma',
//     age:22
// },
// {
//     id:2,
//     name:'miru',
//     age:17
// },
// {
//     id:3,
//     name:'geetha',
//     age:45
// }
// ]

//const personList=persons.map(person =><Person person={person}/>)// this is easy way to reduce the code create another file
// named Person import in the List file and give component <Person />       (5)
//---------------------------------------------------------------------------------------------
// const personList=persons.map(person =><Person key= {person.name}person={person}/>)   // using key to get value but only apply to parent(6)
//-------------------------------------------------------------------------------
    // <h2> I am {person.name}. I am {person.age}years old
    //     </h2>     //will get output but better way to do it create another file ( 4 )
//return <div>{personList}</div>
//}

//--------------------------------------------------------------------------


//Now we are finding key and values

 function List()
 {
const names=['reshma','miru','geetha','reshma']
//const nameList=names.map(name=><h2 key= {name}>{name}</h2>) // in this way we get o/p but the name will repeat twice 
                                  //as reshma reshma we can able to solve by using index(1)




const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)// it will give index for the names 0 reshma, 1 miru, 2 geetha ,3 reshma

return <div>{nameList}</div>
 }

export default List