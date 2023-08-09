import React, { Component } from "react";


// // const Task1=num=>{
// // for(let i=2;i<=num;i++)
// // if(num %i == 0)return false ;
// // else{
// // return num>1;
// // }
// // }
// // console.log(Task1(7))
// // console.log(Task1(3));
// // console.log(Task1(5));
// // console.log(Task1(1));
// //------------------------------------------------------------------------------------
// // function Task1(num){
// //     if(num<1){
// //         return false;
// //     }
// //     for(let i=2;i<=num;i++){
// //         if(num %i===0){
// //             return false;
// //         }
// //         else{
// //             return num>1
// //         }
// //     }

// //        console.log(Task1 (5)); //t
// //        console.log(Task1 (6)); //f
// //        console.log(Task1(10));   //f
// //        console.log(Task1(3)); //t
// //       console.log(Task1(71));//t
// // }

// //2 3 5 7 11 13 17 19 23 29 31 37 //t

// //-------------------------------------------------------------------------------



// // const Task1=(props)=>{
// //      console.log(props)
// //      return(
// //          <div>
// //     <h1> {props.num} </h1>  


// //      </div>
// //      )
// //      }


// function Task1(num) {
//     const prime = [];
//     for (let i = 0; i <= num; i++) {
//       prime[i] = true;
//     }
//     prime[0] = false;
//     prime[1] = false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (prime[i] === true) {
//         for (let j = i * i; j <= num; j += i) {
//           prime[j] = false;
//         }
//       }
//     }
//     const result = [];
//     for (let i = 0; i < prime.length; i++) {
//       if (prime[i] === true) {
//         result.push(i);
//       }
//     }
//     return result;
//   }

//   console.log(Task1(50)); // [2, 3, 5, 7, 11, 13, 17, 19]







// class  Task1 extends  Component{
//     constructor(props){
//         super(props)

//     this.state={
//       count:0
//        //isPrime:false
//     };
//     }

//     checkPrime=(num)=>{
//         if(num===1)return false
//         if (num===2)return true
//         for(let i=2; i<num;i++){
//             if(num % i==0){
//                 return false;
//             }

//         }
//         return true;
//     }
//     incrementItem = () => {
//         this.setState((prevState, { count }) => ({
//         count: prevState.count + 1
//       }));
//         if (this.checkPrime(this.state.count)) {
//             this.setState({ isPrime: true });
//         }
//         else {
//             this.setState({ isPrime: false });
//         }
//     }




//     render() {
//         return(
//             <div>
//            <div>sum--0{this.state.sum}</div>
//              <button onClick={()=>this.incrementItem()}>prime Number</button>
//     </div>
//         )
//     }
//}
//----------------------------------------
// class Task1 extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           count:0,
//            prime: false
//         };
//       }

// checkPrime = (num) => {
// if (num === 1) return false;
//     if (num === 2) return true;
//     for(let i = 2; i <num; i++) {
//     return true; 
//   }

// incrementItem = () => {
//     this.setState((prevState,) => ({
//     count: prevState .count+1
//   }));

//   console.log(this.state.count);

//      if (this.checkPrime(this.state.count)) {
//         this.setState({ prime: true });
//     }
//     else {
//         this.setState({ prime: false });
//     }
// }


// render() {
//     return (
//         <div>
//       <div>{this.state.prime}</div>
//         <button onClick={this.checkPrime}>prime number</button>
//         {<h2>{ this.state.count }</h2> }
//       </div>
//     );
//   }
 



