import { Route, Switch } from "react-router";
import "./App.css";
import CardDetails from "./Components/CardDetails";
import CarsList from "./Components/CarsList";

function App() {
 
  return (
    <Switch>
      <Route path ="/" exact component={CarsList} />
      <Route path ="/cars/:id" exact component={CardDetails} />
      
    </Switch>
  );
}

export default App;
