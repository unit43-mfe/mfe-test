import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { BrowserRouter } from "react-router-dom";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  );
};
