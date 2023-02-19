import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/import.css";

const Header = (props) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  console.log('sidebar', props.profile)

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src="https://www.seekpng.com/png/full/865-8659253_microsoft-white-logo-microsoft-logo-transparent-white.png"
          alt="AdminLTE Logo"
          className="brand-image"
        />
        <span className="brand-text font-weight-light">ADMIN</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link to="/" className="d-block">
              {props.profile.name} <br />
            </Link>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <Link to="/" className="nav-link active">
                <i className="far fa-circle nav-icon"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                <i className="fa fa-address-card nav-icon"></i>
                <p>Projects</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tasks" className="nav-link">
                <i className="fa fa-tasks nav-icon"></i>
                <p>Tasks</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tasks" className="nav-link">
                <i className="fa fa-bug nav-icon"></i>
                <p>Bugs</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Header;
