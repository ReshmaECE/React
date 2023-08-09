
import React, { Component } from "react";

class Message extends Component{


constructor(){
super()
    this.state={
        message:"Welcome to learn React"
    }
}


changeMessage(){
    this.setState({
       message :"thank you"
    })
    console.log(this);
}
    render(){
        return (
        <div>
        <h1>{this.state.message}</h1>
        

        <button onClick={()=>this.changeMessage()}>Action</button>
        
        </div>
    )
    }
    
    
}
 export default Message