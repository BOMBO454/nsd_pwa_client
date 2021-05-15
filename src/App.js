import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import paths from "./constants/paths";

import EmitentDashboard from "./pages/Emitent/EmitentDashboard/EmitentDashboard";
import EmitentCreateToken from "./pages/Emitent/EmitentCreateToken/EmitentCreateToken";
import EmitentTokenInfo from "./pages/Emitent/EmitentTokenInfo/EmitentTokenInfo";

import TraiderDashboard from "./pages/Traider/TraiderDashboard/TraiderDashboard";
import TraiderTokenInfo from "./pages/Traider/TraiderTokenInfo/TraiderTokenInfo";
import TraiderTokenList from "./pages/Traider/TraiderTokenList/TraiderTokenList";
import UserSettings from "./pages/UserSettings/UserSettings";
import TraiderTokenListSell from "./pages/Traider/TraiderTokenListSell/TraiderTokenListSell";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route exact path={paths.home} component={Home} />
          <Route exact path={paths.signIn} component={SignIn} />
          <Route exact path={paths.signUp} component={SignUp} />

          <Route exact path={paths.emitent} component={EmitentDashboard} />
          <Route exact path={paths.emitentTokenInfo} component={EmitentTokenInfo} />
          <Route exact path={paths.emitentTokenCreate} component={EmitentCreateToken} />

          <Route exact path={paths.traider} component={TraiderDashboard} />
          <Route exact path={paths.traiderTokensList} component={TraiderTokenList} />
          <Route exact path={paths.traiderTokensListSell} component={TraiderTokenListSell} />
          <Route exact path={paths.traiderTokenInfo} component={TraiderTokenInfo} />

          <Route exact path={paths.settings} component={UserSettings} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
