import React, { useEffect } from "react";
import "../assets/import.css";
import { GET_MAINTANANCE } from "../request/authrequest";

const Maintanance = (props) => {

  const fetchStatus = async () => {
    try {
      const response = await GET_MAINTANANCE()
      console.log(response)
      if(response.status === 200) {
        if (
          localStorage.getItem("todoemployee") &&
          localStorage.getItem("usertype") === "EMPLOYEE"
        ) {
          window.location.href = '/emp'
        }
        if (localStorage.getItem("todoemployee") && (localStorage.getItem("usertype") === "SUPERADMIN" || localStorage.getItem("usertype") === "ADMIN")) {
          window.location.href = '/admin'
        }
      }
    } catch (error) {
      console.log('error: ' + error)
   }
  };

  useEffect(() => {
    fetchStatus()
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <body className="hold-transition login-page bg-dark">
        <div className="login-box">
          <div className="">
              <h4 className="login-box-msg text-white">Maintanance Mode</h4>
              <p className="login-box-msg text-white">Currently we are in maintanance mode, Please wait while we are back to online</p>
          </div>
        </div>
      </body>
    </>
  );
};

export default Maintanance;
