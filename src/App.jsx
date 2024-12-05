import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/PageHome/PageHome.jsx";
import OrderPage from "./components/OrderPage/OrderPage.jsx";
import Succes from "./components/Success/Success.jsx";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/OrderPage">
            <OrderPage />
          </Route>
          <Route path="/Success">
            <Succes />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
