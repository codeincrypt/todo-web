import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import "../../assets/import.css";
import { GET_TODOVIEW } from "../../request/apirequest";
import Loader from "../common/loader";

const Tasksview = (props) => {

  const { taskid } = useParams();

  const [loading, setLoading] = useState(true);
  const [datalist, setDatalist] = useState([]);

  const fetchData = async () => {
    const result = await GET_TODOVIEW(taskid)
    if (result.statuscode === 1) {
      setDatalist(result.data);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, []);

  if (loading === true) {
    return (
      <div className="col-lg-12 mt-3">
        <Loader />
      </div>
    );
  }

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

            <div className="col-lg-12 mt-3 p-3">
              <div className="row">
                <div className="col-2">
                  <h6>Task</h6>
                </div>
                <div className="col-10">
                  <h6>{datalist.tasks}</h6>
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <h6>Assign By</h6>
                </div>
                <div className="col-10">
                  <h6>{datalist.assignby}</h6>
                </div>
              </div>

            </div>


          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Tasksview;
