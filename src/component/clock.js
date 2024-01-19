import React from "react";


export default class ClockComponent extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor called")
    }

    render(){
        console.log("render function called")
        return(
            <h1>ClockComponent</h1>
        )
     
}
componentDidMount(){
    console.log("componentDidMount called");
}
}