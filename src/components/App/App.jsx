import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Errorpage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />

          <Route>
            <Errorpage />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
