import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../../assets/import.css";
import { GET_PROFILE } from "../../../request/apirequest";
import { UserContext } from "../../../App";

const Header = (props) => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  const [profile, setProfile] = React.useState({})

  const fetchProfile = async () => {
    const response = await GET_PROFILE()
    if (response.statuscode === 1) {
      setProfile(response.data)
    }
    if (response.statuscode === 2) {
      dispatch({ type: "CLEAR" });
      history.push("/login")
      localStorage.clear()
    }
  };

  useEffect(() => {
      fetchProfile()
    // eslint-disable-next-line
  }, []);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src="https://www.seekpng.com/png/full/865-8659253_microsoft-white-logo-microsoft-logo-transparent-white.png"
          alt="AdminPanel"
          className="brand-image"
        />
        <span className="brand-text font-weight-light">ADMIN</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image mt-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="img-circle elevation-2"
              alt="AdminPanel"
            />
          </div>
          <div className="info">
            <Link to="/admin/profile" className="d-block">
              {profile.name} <br />
              {profile.emptype}
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
              <Link to="/admin" className="nav-link active">
                <i className="far fa-circle nav-icon"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/task" className="nav-link">
                <i className="fa fa-tasks nav-icon"></i>
                <p>Tasks</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/add-task" className="nav-link">
                <i className="fa fa-plus nav-icon"></i>
                <p>Add Tasks</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/project" className="nav-link">
                <i className="fa fa-address-card nav-icon"></i>
                <p>Project</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/bugs" className="nav-link">
                <i className="fa fa-bug nav-icon"></i>
                <p>Bugs</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/employee" className="nav-link">
                <i className="fa fa-users nav-icon"></i>
                <p>Employee</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Header;
