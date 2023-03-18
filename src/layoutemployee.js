import React, { useContext, useEffect } from "react";

import HEADER from "./page/employee/include/header";
import SIDEBAR from "./page/employee/include/sidebar";

import { useHistory } from "react-router-dom";
import { UserContext } from "./App";
import { GET_PROFILE } from "./request/userrequest";

const Layout = ({ children }) => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);

  const [profile, setProfile] = React.useState("");

  const expireSession = () => {
    // console.log("redirect to login page");
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    window.location.replace('/login')
  };

  const fetchProfile = async () => {
    GET_PROFILE().then(async (res) => {
      if (res.statuscode === 1) {
        setProfile(res.data);
      }
      if (res.statuscode === 2) {
        expireSession()
      } else {
        expireSession()
      }
    });
  };

  useEffect(() => {
    const admin = localStorage.getItem("todoemployee")
    if (admin) {
      dispatch({ type: "TODOUSER", payload: admin })
    } else {
      fetchProfile()
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
    <>
      <div className="wrapper">
      <HEADER profile={profile} />
      <SIDEBAR profile={profile} />
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </>
  )
};

export default Layout;