import React, { useState, useEffect } from "react";
import "../../assets/import.css";

const Tasksview = (props) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Task</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="card card-success card-outline">
            <div className="col-lg-12 mt-3">
              <div className="row">
                {/* <div className="col-lg-3">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search here..."
                      />
                    </div> */}
                <div className="col-lg-10 form-inline">
           
                  <button className="btn btn-muted">
                    <i className="fa fa-search"></i> Search
                  </button>
                  <button className="btn btn-muted">
                    <i className="fa fa-user"></i> Person
                  </button>
                  <button className="btn btn-muted">
                    <i className="fa fa-filter"></i> Filter
                  </button>
                  <button className="btn btn-muted">
                    <i className="fa fa-sort"></i> Sort
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-3">
              <h5>Task</h5>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Tasksview;
