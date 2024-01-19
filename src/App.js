import ClockComponent from "./component/clock.js";
import EmployeeComponent from "./component/EmployeeComponent.js";
  import ExampleStateComponent from "./component/ExampleStateComponent.js";

const App=()=>{
    return(
      <>
      <EmployeeComponent  Name="Avneesh" Department="Sports"> </EmployeeComponent>
      <ExampleStateComponent></ExampleStateComponent>
      <ClockComponent/>   
      </>
      
     )
}
export default App;