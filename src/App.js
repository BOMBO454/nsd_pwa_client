import React, {Suspense} from "react"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {AnimatePresence} from "framer-motion"

const Home = React.lazy(() => import("./pages/Home/Home"));
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
import paths from "./constants/paths";

const EmitentDashboard = React.lazy(() => import("./pages/Emitent/EmitentDashboard/EmitentDashboard"));
const EmitentCreateToken = React.lazy(() => import("./pages/Emitent/EmitentCreateToken/EmitentCreateToken"));
const EmitentTokenInfo = React.lazy(() => import("./pages/Emitent/EmitentTokenInfo/EmitentTokenInfo"));

const TraiderDashboard = React.lazy(() => import("./pages/Traider/TraiderDashboard/TraiderDashboard"));
const TraiderTokenInfo = React.lazy(() => import("./pages/Traider/TraiderTokenInfo/TraiderTokenInfo"));
const TraiderTokenList = React.lazy(() => import("./pages/Traider/TraiderTokenList/TraiderTokenList"));
const UserSettings = React.lazy(() => import("./pages/UserSettings/UserSettings"));
const TraiderTokenListSell = React.lazy(() => import("./pages/Traider/TraiderTokenListSell/TraiderTokenListSell"));

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Suspense fallback={<span>loading...</span>}>
          <Switch>
            <Route exact path={paths.home} component={Home}/>
            <Route exact path={paths.signIn} component={SignIn}/>
            <Route exact path={paths.signUp} component={SignUp}/>

            <Route exact path={paths.emitent} component={EmitentDashboard}/>
            <Route exact path={paths.emitentTokenInfo} component={EmitentTokenInfo}/>
            <Route exact path={paths.emitentTokenCreate} component={EmitentCreateToken}/>

            <Route exact path={paths.traider} component={TraiderDashboard}/>
            <Route exact path={paths.traiderTokensList} component={TraiderTokenList}/>
            <Route exact path={paths.traiderTokensListSell} component={TraiderTokenListSell}/>
            <Route exact path={paths.traiderTokenInfo} component={TraiderTokenInfo}/>

            <Route exact path={paths.settings} component={UserSettings}/>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
