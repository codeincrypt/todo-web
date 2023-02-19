import React, { useState, useEffect } from "react";
import "../assets/import.css";
import { GET_PROFILE } from "../request/apirequest";

const Projects = (props) => {
  // eslint-disable-next-line

  useEffect(() => {
    // fetchProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <>
        <div className="">

          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Project</h1>
                </div>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="container-fluid">
              
            </div>
          </section>
        </div>
    </>
  );
};

export default Projects;
