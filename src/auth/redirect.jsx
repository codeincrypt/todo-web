import React, { useEffect } from "react";
import "../assets/import.css";

const Redirect = (props) => {
  
  useEffect(() => {
    if (localStorage.getItem("todoemployee") || localStorage.getItem("usertype") === "EMPLOYEE") {
      window.location.href = '/emp'
    }
    if (localStorage.getItem("todoemployee") || localStorage.getItem("usertype") === "SUPERADMIN" || localStorage.getItem("usertype") === "ADMIN") {
      window.location.href = '/admin'
    }
    // eslint-disable-next-line
  }, []);

  return (
    <body className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>Redirecting ...</b> 
          </div>
        </div>
      </body>
  );
};

export default Redirect;