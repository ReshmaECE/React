import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef=React.createRef() //step1 create ref for input

         this.cbRef=null
         this.setcbRef=(element)=>{
           this.cbRef=element
         }


    }

    componentDidMount (){
        // this.inputRef.current.focus()    // step 3 in that object they is current input in that used focus   
        //  // console.log(this.inputRef)  //lifecyle componentsDidMount console log it and inspect in then u get object

//oldway step5
if(this.cbRef){
    this.cbRef.focus()
}
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    

    render() {
        return (
            <div>
             <input type='text' ref={this.inputRef}></input>     {/* step2  attach ref in the input element */}
             <input type='text' ref={this.setcbRef}></input>

        {/* oldway to find Ref */}
        
  {/* step1 :create Ref() already there in top used that
     step2: call back Ref=null
      step3 :create method assign dom element of the  setref
      step4: step3 setcbRef to input value
      step5:comment inside the componentsDidMount and give  condition statement      
               */}
               
               
               
               
               <button onClick={this.clickHandler}>click</button>    {/* //    step4 fetch input value */}
               </div> 
           

           )
           }
           }
export default RefsDemo

