import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
             UserName:" ",
             Comment:" ",
             Topics:" React",
             Email:" ",
             Tel:" "
        }
    }

    handleUserNamechange= (event)=>{
        this.setState({
            UserName:event.target.value
        })
    }
    handlerCommentchange=(event)=>{
          this.setState({
            Comment:event.target.value
          })
    }

    handlerTopicschange=(event)=>{
        this.setState({
            Topics:event.target.value
        })
    }
    handleEmailchange=(event)=>{
 this.setState({
    Email:event.target.value
 })
    }
    handleTelchange=(event)=>{
 this.setState({
     Tel:event.target.value
 })
    }

    handleSumbit=event=>{
        alert(`${this.state.UserName} ${this.state.Comment} ${this.state.Topics} ${this.state.Email} ${this.state.Tel}`)
        event.preventDefault()
    }
    render() {
        const {UserName,Comment,Topics,Email,Tel}=this.state
        return (
            <form onSubmit={this.handleSumbit}>
                   
                   <div><label>UserName</label>
                    <input type="text" value={UserName} onChange={this.handleUserNamechange}></input></div>
                    <br></br>
                    <div>
                    <label>Enter your Email</label>
                        <input type="email" value={Email} onChange={this.handleEmailchange}></input>
                    </div>
                    <br></br>
                    <div>
                        <label>Enter your Phone number</label>
                        <input type='tel'value={Tel} onChange={this.handleTelchange}></input>
                    </div><br></br>
                    
                    <div>
                        <label>comments</label>
                        <textarea value={Comment}onChange={this.handlerCommentchange}></textarea>
                    </div><br></br>
                    <div>
                        <select value={Topics} onChange={this.handlerTopicschange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="node">Node</option>
                        </select>
                        </div><br></br>
                        <button>submit</button>
                </form>
            
        )
    }
}

export default Form
