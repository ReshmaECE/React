import React, { Component } from 'react'
 class LifeCycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
          name:'reshma'   
        }
        console.log('LifeCycleB constructor');
    }

    static getDerivedStateFromProps(Props, State) {
        console.log('LifeCycleB getDerivedStateFromProps');
        return null}

        componentDidMount(){
            console.log('LifeCycleB componentsDisMount');
        }

    render() {
        console.log('LifeCycleB render');
        return <div>LifeCycleB</div>
        }
}

export default LifeCycleB
