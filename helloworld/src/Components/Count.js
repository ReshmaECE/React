import React, { Component } from "react";


class  Count extends  Component{
constructor(props){
    super(props)

this.state={
  Count: 0 
}
}
Increment(){
//this.state.Count=this.state.Count + 1        //only increment in the inspectconsole not in the display console 
// this.setState({
//     Count:this.state.Count + 1                 // now increment in the displayconsole from 1 but inspectconsole value start from 0
// },() =>{
//  console.log('Callback Value',this.state.Count) // inside console// now  callback value 1 and the displayconsole 1 but index 0
//  })
 this.setState((prevState)=>({
     Count:prevState.Count + 1   // now it is current only use previous state to calulate current value
     }))

console.log(this.state.Count)          // outside console
}


IncrementFive(){
   this.Increment()
   this.Increment()
   this.Increment()
   this.Increment()
   this.Increment()
    }

    render(){
    return(
        <div>
       <div>count-{this.state.Count}</div>
        <button onClick={()=>this.IncrementFive()}>Increment</button>
</div>
    )
}
}

export default Count