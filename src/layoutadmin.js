import React, { useContext, useEffect } from "react";

import HEADER from "./page/admin/include/header";
import SIDEBAR from "./page/admin/include/sidebar";

import { useHistory } from "react-router-dom";
import { UserContext } from "./App";
import { GET_PROFILE } from "./request/apirequest";

const Layout = ({ children }) => {
  const history = useHistory()
  const { dispatch } = useContext(UserContext)

  useEffect(() => {
    const admin = localStorage.getItem("todoemployee")
    if (!admin) {
      dispatch({ type: "CLEAR" });
      history.push("/login")
      localStorage.clear()
    }
    
    let localdata = localStorage.getItem('darkmode')
    var element = document.getElementById("body")
    if(localdata){
      element.classList.add('dark-mode')
    }
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
      <HEADER/>
      <SIDEBAR/>
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </React.Fragment>
  )
};

export default Layout;