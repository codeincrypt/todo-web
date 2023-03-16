import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../../assets/import.css";
import { GET_TODOVIEW } from "../../request/apirequest";
import Loader from "../common/loader";
import Nodata from "../common/nodata";

const Tasksview = (props) => {
  const { taskid } = useParams();

  const [loading, setLoading] = useState(true);
  const [datalist, setDatalist] = useState([]);
  const [nodata, setNoData] = useState(false);

  const fetchData = async () => {
    const result = await GET_TODOVIEW(taskid);
    if (result.statuscode === 1) {
      setDatalist(result.data.todo);
      setLoading(false);
    } else {
      setNoData(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (loading === true) {
    return (
      <div className="col-lg-12 mt-3">
        <Loader />
      </div>
    );
  }

  if (nodata === true) {
    return (
      <div className="col-lg-12 mt-3">
        <Nodata />
      </div>
    );
  }

  return (
    <React.Fragment>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Task #{taskid} </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="card card-success card-outline">
            <div className="card-header">
              <div className="row">
                <div className="col-lg-12 form-inline ">
                  <button className="btn btn-muted mr-3">
                    <i className="fa fa-tasks"></i> Tasks
                  </button>
                  <button className="btn btn-muted mr-3">
                    <i className="fa fa-comment"></i> Comments
                  </button>
                  <button className="btn btn-muted mr-3">
                    <i className="fa fa-bug"></i> Bugs
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-2">
                    <p className="font-weight-bold text-muted">Task</p>
                  </div>
                  <div className="col-10">
                    <p>
                      {datalist.tasks}
                    </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-2">
                    <p className="font-weight-bold text-muted">Task ID</p>
                  </div>
                  <div className="col-2">
                    <p>{datalist.tasksid}</p>
                  </div>

                  <div className="col-2">
                    <p className="font-weight-bold text-muted">Assign Date</p>
                  </div>
                  <div className="col-2">
                    <p>
                      {datalist.date} - {datalist.time}
                    </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-2">
                    <p  className="font-weight-bold text-muted">Priority</p>
                  </div>
                  <div className="col-2">
                    <h6>{datalist.workpriority}</h6>
                  </div>

                  <div className="col-2">
                    <p  className="font-weight-bold text-muted">Priority</p>
                  </div>
                  <div className="col-2">
                    <h6>{datalist.workpriority}</h6>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-2">
                    <h6>Assign By</h6>
                  </div>
                  <div className="col-4">
                    <h6>{datalist.assignby}</h6>
                  </div>

                  <div className="col-2">
                    <h6>Assign By</h6>
                  </div>
                  <div className="col-4">
                    <h6>{datalist.assignbyname}</h6>
                  </div>
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
