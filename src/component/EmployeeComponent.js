import React from 'react';
import DepartmentComponent from './DepartmentComponent';


export default class EmployeeComponent extends React.Component{


    // how to see what props give you->
    // constructor(props){
    //     super(props);
    //     console.log(props);
    // }


    
render(){
    return(
        <div>
            <h2>Employee Details</h2>
            <p>
                <label>Name: <b>{this.props.Name}</b></label>
            </p>
            <DepartmentComponent Name={this.props.Department}></DepartmentComponent>
        </div>
    )

};
};
