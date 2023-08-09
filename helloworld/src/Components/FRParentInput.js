import React, { Component } from 'react'
import FRChildInput from './FRChildInput'


class FRParentInput extends Component {


    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }

    clickHandler=()=>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FRChildInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Forwarding Ref</button>
                
            </div>
        )
    }
}

export default FRParentInput
