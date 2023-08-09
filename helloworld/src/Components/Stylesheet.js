import React from "react";
import './myStyles.css'



function Stylesheet(props) {

     let className=props.container ? 'container' :' '    // we use className with ternary operator using props and state
  
    return(
        <div>
               {/* <h1 className='container'> stylesheet</h1>    // with className of css stylesheet
                */}

           <h1 className={`${className} font-Xl`}>stylesheet</h1>   {/* use backtick for mulit class style */}
             
             <h1 className="para"> hello world</h1>
           
           <p>This is a mistake. Here, we'll refer to some time-honored 
            typesetting conventions, with an emphasis on readability, and offer guidance 
            on adapting them effectively for devices and screens. We'll see that the ability to embed fonts with
             @font-face is not by itself a solution to all of our typographic challenges.

           </p>

        </div>
    )
}
export default Stylesheet