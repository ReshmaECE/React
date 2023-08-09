import React, { Component } from 'react'

 class RefInput extends Component {

    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
        
    }
    ReffocusInput(){
        
         this.inputRef.current.focus()
    console.log(this.inputRef)
     }

    render() {
        return (
            <div>
                <input type='text'ref={this.inputRef}></input>
            </div>
        )
    }
}

export default RefInput
