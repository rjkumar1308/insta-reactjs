import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePageComponent = lazy(() => import("./pages/home-page/home-page.component"));
const LoginPageComponent = lazy(() => import("./pages/login-page/login-page.component"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={HomePageComponent} />
        <Route path='/accounts/login' component={LoginPageComponent} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
