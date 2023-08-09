import React, { Component } from 'react'
import RefInput from './RefInput'

 class RefFocusInput extends Component {

    constructor(props) {
        super(props)
        this.componentRef= React.createRef()
    }
    clickHandler=()=>{
          this.componentRef.current.ReffocusInput()
    }

    render() {
        return (
            <div>
                
                <RefInput ref={this.componentRef} />
                <button onClick={this.clickHandler} >Focus Input </button>
            </div>
        )
    }
}

export default RefFocusInput
