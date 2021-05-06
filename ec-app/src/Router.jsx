import React from 'react';
import {Switch, Route} from 'react-router';
import {Home, SignIn, SignUp} from './templates'

const Router = () => {
    return(
        <Switch>
            <Route exact path={"(/)?"} component={Home} />
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/signup"} component={SignUp} />
        </Switch>
    )

}
export default Router