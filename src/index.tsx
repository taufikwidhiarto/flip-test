import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./data/state";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { ListingPage } from "./pages/listing/listing.page";
import { DetailPage } from "./pages/detail/detail.page";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router history={createBrowserHistory()}>
        <Route exact path="/" component={ListingPage} />
        <Route path="/detail/:id" component={DetailPage} />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
