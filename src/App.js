import React from "react";
import "./App.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app w-full min-h-[100vh]">
        <Switch>
          <Route path="/checkout">
            <Header />
            <SubHeader />
            <h1>I am the checkout page</h1>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <SubHeader />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
