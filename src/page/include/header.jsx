import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import "../../assets/import.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { dispatch } = useContext(UserContext);

  console.log('header', props.profile)

  const [classActive, setClassActive] = useState('hold-transition sidebar-mini layout-fixed');

  const expireSession = () => {
    // console.log("redirect to login page");
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    window.location.replace('/login')
  };

  const hideSidebar = () => {
    if (classActive === 'hold-transition sidebar-mini layout-fixed') {
      document.getElementById('body').className = 'hold-transition sidebar-mini layout-fixed sidebar-collapse';
      setClassActive('hold-transition sidebar-mini layout-fixed sidebar-collapse');
    } else {
      document.getElementById('body').className = 'hold-transition sidebar-mini layout-fixed';
      setClassActive('hold-transition sidebar-mini layout-fixed');
    }
  };

  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link" data-widget="pushmenu" onClick={hideSidebar} role="button"><i className="fas fa-bars"></i></button>
            {/* <Link className="nav-link" data-widget="pushmenu" to="/" role="button"><i className="fas fa-bars"></i></Link> */}
          </li>
          {/* <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">Home</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Contact</a>
          </li> */}
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/profile" className="nav-link" data-widget="fullscreen" role="button">
              <i className="fas fa-user mr-2"></i> PROFILE
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" role="button" onClick={expireSession}>
              <i className="fas fa-signout mr-2"></i> LOGOUT
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;