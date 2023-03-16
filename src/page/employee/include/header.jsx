import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "../../../assets/import.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { dispatch } = useContext(UserContext);

  // const [classActive, setClassActive] = useState('hold-transition sidebar-mini layout-fixed');
  // const [colorMode, setColorMode] = useState('hold-transition sidebar-mini layout-fixed');

  const expireSession = () => {
    // console.log("redirect to login page");
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    window.location.replace('/login')
  };

  const changeMode = () => {
    var element = document.getElementById("body");
    if (element.classList.contains('dark-mode')) {
      element.classList.remove('dark-mode');
      localStorage.setItem('darkmode', "")
    } else {
      element.classList.add('dark-mode');
      localStorage.setItem('darkmode', "darkmode")
    }
  }

  const hideSidebar = () => {
    // if (classActive === 'hold-transition sidebar-mini layout-fixed') {
    //   document.getElementById('body').className = 'hold-transition sidebar-mini layout-fixed sidebar-collapse';
    //   setClassActive('hold-transition sidebar-mini layout-fixed sidebar-collapse');
    //   setColorMode('hold-transition sidebar-mini layout-fixed dark-mode');
    // } else {
    //   document.getElementById('body').className = 'hold-transition sidebar-mini layout-fixed';
    //   setClassActive('hold-transition sidebar-mini layout-fixed');
    // }    

    var element = document.getElementById("body");
    if (element.classList.contains('sidebar-collapse')) {
      element.classList.remove('sidebar-collapse');
    } else {
      element.classList.add('sidebar-collapse');
    }
  };

  return (
    <>
      <nav className="main-header navbar navbar-expand">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link border-0 transparent" data-widget="pushmenu" onClick={hideSidebar}><i className="fas fa-bars"></i></button>
            {/* <Link className="nav-link" data-widget="pushmenu" to="/"><i className="fas fa-bars"></i></Link> */}
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link to="/emp/add-task" title="Add new To-Do" className="nav-link" data-widget="fullscreen">
              <i className="fa fa-plus-circle mr-1"></i> Add To Do
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/emp/profile" title="My Profile" className="nav-link" data-widget="fullscreen">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link border-0 transparent" id="changeMode" title="Change Mode" data-widget="control-sidebar" data-controlsidebar-slide="true" onClick={changeMode}>
              <i className="fa fa-sun"></i>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link border-0 transparent" title="Log out" data-widget="control-sidebar" data-controlsidebar-slide="true" onClick={expireSession}>
              <i className="fa fa-sign-in-alt"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;