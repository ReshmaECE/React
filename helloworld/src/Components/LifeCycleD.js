import React, { Component } from 'react'

 class LifeCycleD extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'Miruthula' 
        }
    }
    

 static getDerivedStateFromProps(nextProps, prevState) {
        console.log('LifeCycleD  getDerivedStateFromProps');
            return null }

            shouldComponentUpdate = (nextProps, nextState) => {
            console.log('LifeCycleD shouldComponentUpdate');
              return true  }

              getSnapshotBeforeUpdate = (prevProps, prevState) => {
                console.log('LifeCycleD getSnapshotBeforeUpdate ');
                return null
              }
             
              componentDidUpdate = (prevProps, prevState,snapshot) => {
                console.log('LifeCycleD componentDidUpdate ');
              }
              
              
            

    render() {
        console.log('LifecycleD render');
        return (
            <div>
                <div>LifeCycleD</div>
            </div>
        )
    }
}

export default LifeCycleD
