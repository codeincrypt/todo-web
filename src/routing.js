import React from "react";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import { AuthRouter, UserRouter, AdminRouter } from "./router";
import EmployeeLayout from "./layoutemployee";
import AdminLayout from "./layoutadmin";
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
              <EmployeeLayout history={props.history}>
                <i.component {...props} />
              </EmployeeLayout>
            )}
          />
        ))}

        
        {AdminRouter.map((i, index) => (
          <Route
            exact
            key={index}
            path={i.path}
            render={(props) => (
              <AdminLayout history={props.history}>
                <i.component {...props} />
              </AdminLayout>
            )}
          />
        ))}

        {AuthRouter.map((i, index) => (
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