import React, { useEffect, useContext } from "react";
import { UserContext } from "../../App";
import "../../assets/import.css";

const Header = (props) => {
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const expireSession = () => {
    // console.log("redirect to login page");
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    window.location.replace('/login')
  };

  return (
    <>
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
          </li>
          {/* <li class="nav-item d-none d-sm-inline-block">
            <a href="index3.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Contact</a>
          </li> */}
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
              <i class="fas fa-user mr-2"></i> PROFILE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button" onClick={expireSession}>
              <i class="fas fa-signout mr-2"></i> LOGOUT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;