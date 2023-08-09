import React, { Component } from 'react'
import LifeCycleD from './LifeCycleD';


 class LifeCycleC extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'Miruthula' 
        }
    }
    

 static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifeCycleC  getDerivedStateFromProps');
            return null }

            shouldComponentUpdate = (nextProps, nextState) => {
            console.log('LifeCycleC shouldComponentUpdate');
              return true  }

              getSnapshotBeforeUpdate = (prevProps, prevState) => {
                console.log('LifeCycleC getSnapshotBeforeUpdate ');
                return null
              }
             
              componentDidUpdate = (prevProps, prevState,snapshot) => {
                console.log('LifeCycleC componentDidUpdate ');
              }
              
              changeState=()=>{
                 this.setState({
                    name:'codeevalution'
                 })
              }      
            

    render() {
        console.log('LifeCycleC render');
        return (
            <div>
                <div>LifeCycleC</div>
                <button onClick={this.changeState}>change state</button>
                <LifeCycleD />
            </div>
        )
    }
}

export default LifeCycleC
