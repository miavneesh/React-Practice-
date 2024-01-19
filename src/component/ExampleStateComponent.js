import { Component } from "react";


export default class ExampleStateComponent extends Component{
 state={
    number:1
 };

render(){
   let number = 1;
    setTimeout(()=>{
        console.log("this is called")
    this.setState({number:4})
},3000);

       return( <div>
                 <h1>{this.state.number}</h1>
                </div>
             )
    }    
}