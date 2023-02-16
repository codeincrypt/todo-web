import React, { useState, useEffect } from "react";
import "../assets/import.css";
import { GET_PROFILE } from "../request/apirequest";

const Tasksview = (props) => {
  // eslint-disable-next-line
  const [profile, setProfile] = useState("");

  const fetchProfile = async () => {
    GET_PROFILE().then(async (res) => {
      if (res.statuscode === 1) {
      }
    });
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <body class="hold-transition login-page">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Task</h1>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Tasksview;
