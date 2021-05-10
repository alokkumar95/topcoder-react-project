import "./App.css";
import MineSiteInput from "./MineSiteInput";
import MineSiteOverview from "./MineSiteOverview"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MineSiteInput}/>
          <Route path="/overview" component={MineSiteOverview}/>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
