import React, { useContext, useEffect } from "react";

import HEADER from "./page/include/header";
import SIDEBAR from "./page/include/sidebar";

import { useHistory } from "react-router-dom";
import { UserContext } from "./App";

const Layout = ({ children }) => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const admin = localStorage.getItem("todoemployee");
    if (admin) {
      dispatch({ type: "TODOUSER", payload: admin });
    } else {
      history.push("/login");
      localStorage.clear();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="wrapper">
      <HEADER />
      <SIDEBAR />
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </>
  )
};

export default Layout;