import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Header from "./components/Header";
import Clients from "components/Clients";
import Balance from "components/Balance";
import Example from "components/exmaple";
import Managers from "components/Managers";

function App() {
  return (
    <div className="h-full bg-grey-bg">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/orders" component={Orders} />
          <Route path="/clients" component={Clients} />
          <Route path="/balance" component={Balance} />
          <Route path="/managers" component={Managers} />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
