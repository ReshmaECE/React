import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';


 class LifeCycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
          name:'reshma'   
        }
        console.log('LifeCycleA constructor');
    }

    static getDerivedStateFromProps(Props, State) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null}

        componentDidMount(){
            console.log('LifeCycleA componentsDisMount');
        }

    render() {
        console.log('LifeCycleA render');
        return (
            <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
</div>
        )
        }
}

export default LifeCycleA
