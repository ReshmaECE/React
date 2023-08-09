
import React,{Component}from "react";

class Task extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        isPrime: true
      };
    }
  
    handleChange= (event) => {
      this.setState({ count: event.target.value });
    }
  
    checkIfPrime = () => {
      let isPrime = true;
       let count = (this.state.count);
    //  if (count > 2 && count % 2 === 0) {
    //     isPrime = false;
    //   } 
    //   else {
    //     for (let i = 2; i <=count; i ++) {
    //       if (count % i === 0) {
    //         isPrime = false;
            
    //       }
    //     }
    //   } 

    if (count === 1) {
        isPrime = false;
      } else if (count === 2) {
        isPrime = true;
      } else if (count > 2 && count % 2 === 0) {
        isPrime = false;
      } else {
        for (let i = 3; i <= Math.sqrt(count); i += 2) {
          if (count % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      
      this.setState({ isPrime });
    }
   
    
    render() {
      return (
        <div>
        <input type="text"  placeholder="enter the number" onChange={this.handleChange}/>
          <button onClick={this.checkIfPrime}>Check</button>
          <p>
            {this.state.isPrime ? `${this.state.count} is a prime number.` : `${this.state.count} is not a prime number.`}
          </p>
        </div>
      );
    }
  
    }








export default Task


