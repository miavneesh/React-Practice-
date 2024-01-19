import React from "react";


export default class DepartmentComponent extends React.Component {

    render(){
        return(
            <div>
                <h2>Department Details</h2>
                <p>
                    <label>
                         Name: <b>{this.props.Name}</b>
                    </label>
                </p>

            </div>


        )
    }
}