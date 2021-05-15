import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
