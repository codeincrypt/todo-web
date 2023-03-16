import React from "react";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import { MainRouter, UserRouter, AdminRouter } from "./router";
import BackLayout from "./layout";
import AuthLayout from "./authlayout";

const Navigation = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        {UserRouter.map((i, index) => (
          <Route
            exact
            key={index}
            path={i.path}
            render={(props) => (
              <BackLayout history={props.history}>
                <i.component {...props} />
              </BackLayout>
            )}
          />
        ))}

        
        {AdminRouter.map((i, index) => (
          <Route
            exact
            key={index}
            path={i.path}
            render={(props) => (
              <BackLayout history={props.history}>
                <i.component {...props} />
              </BackLayout>
            )}
          />
        ))}

        {MainRouter.map((i, index) => (
          <Route
            exact
            key={index}
            path={i.path}
            render={(props) => (
              <AuthLayout history={props.history}>
                <i.component {...props} />
              </AuthLayout>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Navigation;