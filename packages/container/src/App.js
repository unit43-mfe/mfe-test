import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => {
  return import("./components/MarketingApp");
});

const AuthLazy = lazy(() => {
  return import("./components/AuthApp");
});

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
