import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/import.css";

const Header = (props) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" class="brand-link">
        <img
          src="https://www.seekpng.com/png/full/865-8659253_microsoft-white-logo-microsoft-logo-transparent-white.png"
          alt="AdminLTE Logo"
          class="brand-image"
        />
        <span class="brand-text font-weight-light">ADMIN</span>
      </Link>
      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <Link to="/" class="d-block">
              Employee
            </Link>
          </div>
        </div>

        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item menu-open">
              <Link to="/" class="nav-link active">
                <i class="far fa-circle nav-icon"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/tasks" class="nav-link">
                <i class="fa fa-address-card nav-icon"></i>
                <p>Projects</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/tasks" class="nav-link">
                <i class="fa fa-tasks nav-icon"></i>
                <p>Tasks</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/tasks" class="nav-link">
                <i class="fa fa-bug nav-icon"></i>
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
