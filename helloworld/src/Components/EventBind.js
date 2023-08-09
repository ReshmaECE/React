import React,{Component, Componets}from "react";


class  EventBind extends Component{
    constructor(props){
        super(props)
             this.state={
                message:"hello"
         }
    }
    clickHandler(){
        // this.setState({
        //     message:"button click on to perform bindEvent class"
        // })
        console.log
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }

}
export default EventBind