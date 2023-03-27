import React, { useState, useEffect } from "react";
import moment from "moment";
import "../../assets/import.css";
import ApiCalendar from "react-google-calendar-api";

const AdminCalendar = (props) => {
 

  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        
      </section>
    </>
  );
};

export default AdminCalendar;
