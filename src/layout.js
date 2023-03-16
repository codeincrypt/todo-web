import React, { useContext, useEffect } from "react";

import HEADER from "./page/employee/include/header";
import SIDEBAR from "./page/employee/include/sidebar";

import { useHistory } from "react-router-dom";
import { UserContext } from "./App";
import { GET_PROFILE } from "./request/userrequest";

const Layout = ({ children }) => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);

  const [usertype, setUsertype] = React.useState("");
  const [profile, setProfile] = React.useState("");

  const fetchProfile = async () => {
    GET_PROFILE().then(async (res) => {
      if (res.statuscode === 1) {
        setProfile(res.data);
        setUsertype(res.data.emptype);
      }
      if (res.statuscode === 2) {
        expireSession()
      }
    });
  };

  const expireSession = () => {
    // console.log("redirect to login page");
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    window.location.replace('/login')
  };

  useEffect(() => {
    const admin = localStorage.getItem("todoemployee");
    if (admin) {
      dispatch({ type: "TODOUSER", payload: admin });
      fetchProfile()
    } else {
      history.push("/login");
      localStorage.clear();
    }
    
    let localdata = localStorage.getItem('darkmode')
    var element = document.getElementById("body");
    if(localdata){
      element.classList.add('dark-mode');
    }
    // eslint-disable-next-line
  }, []);

  if(usertype === "SUPERADMIN" || usertype === "ADMIN"){
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
  }

  if(usertype === "EMPLOYEE"){
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
  }

  return (
    <>
      <body className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>Loading...</b> 
          </div>
        </div>
      </body>
    </>
  )
  // return (
  //   <>
  //     <div className="wrapper">
  //     <HEADE profile={profile} />
  //     <SIDEBAR profile={profile} />
  //       <div className="content-wrapper">
  //         {children}
  //       </div>
  //     </div>
  //   </>
  // )
};

export default Layout;