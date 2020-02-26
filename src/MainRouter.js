import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
    </div>
)

export default MainRouter;