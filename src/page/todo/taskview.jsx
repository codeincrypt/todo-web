import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../assets/import.css";
import { GET_TODOVIEW, UPDATE_MARKASDONE } from "../../request/apirequest";
import Loader from "../common/loader";
import Nodata from "../common/nodata";
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'

const Tasksview = (props) => {
  const { taskid } = useParams();

  const [loading, setLoading] = useState(true);
  const [datalist, setDatalist] = useState([]);
  const [commentlist, setCommentlist] = useState([]);
  const [nodata, setNoData] = useState(false);
  // eslint-disable-next-line
  const [markasdon, setMarkasdone] = useState(0);
  // eslint-disable-next-line
  const [updateprogress, setUpdateprogress] = useState(0);

  const fetchData = async () => {
    const response = await GET_TODOVIEW(taskid);
    if (response.statuscode === 1) {
      setDatalist(response.data.todo);
      setCommentlist(response.data.comment);
      setLoading(false);
      setMarkasdone(response.data.markasdone);
      setUpdateprogress(response.data.updateprogress);
    } else {
      setNoData(true);
      setLoading(false);
    }
  };

  const markasdone = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to mark this as done. You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await UPDATE_MARKASDONE(taskid);
        if (result.statuscode === 1) {
          fetchData();
          Swal.fire("success!", `${result.message}`, "success");
        } else {
          Swal.fire("Fail !", `${result.message}`, "error");
        }
      }
    });
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
                <div className="col-lg-6 form-inline ">
                <Link to="/task" className="btn btn-secondary"> <i className="fa fa-arrow-left"></i> Go Back</Link>
                  {datalist.taskstatus === 1 ? (
                    <React.Fragment>
                      <button
                        className="btn btn-muted mr-3 disabled"
                        title="Already updated"
                      >
                        <i className="fa fa-tasks"></i> Mark As Done
                      </button>
                      <button
                        className="btn btn-muted mr-3 disabled"
                        title="Already updated"
                      >
                        <i className="fa fa-comment"></i> Update Progress
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button
                        className="btn btn-muted mr-3"
                        onClick={markasdone}
                      >
                        <i className="fa fa-tasks"></i> Mark As Done
                      </button>
                      <button className="btn btn-muted mr-3">
                        <i className="fa fa-comment"></i> Update Progress
                      </button>
                    </React.Fragment>
                  )}
                </div>
                <div className="col-lg-6">
                  <div className="float-right">
                    <button className="btn btn-muted mr-3">
                      <i className="fa fa-tasks"></i> Tasks
                    </button>
                    <button className="btn btn-muted mr-3">
                      <i className="fa fa-comment"></i> Comments
                    </button>
                    {/* <button className="btn btn-muted mr-3">
                      <i className="fa fa-bug"></i> Bugs
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                  <div className="title">Tasks</div>
                  <div className="title-value">{datalist.tasks}</div>
                </div>
                <div className="col-md-4">
                  <div className="title">Status</div>
                  <div className="title-value">
                    {datalist.taskstatus === 0 ? (
                      <span className="badge bg-warning">Working</span>
                    ) : datalist.taskstatus === 2 ? (
                      <span className="badge bg-danger">Pending</span>
                    ) : (
                      <span className="badge bg-success">Completed</span>
                    )}
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div className="title">Task Id</div>
                  <div className="title-value">{datalist.tasksid}</div>
                </div>

                <div className="col-md-4 mt-4">
                  <div className="title">Assign Date</div>
                  <div className="title-value">
                    {datalist.date} - {datalist.time}
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div className="title">Complete Date</div>
                  <div className="title-value">
                    {datalist.completedate} - {datalist.completetime}
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <div className="title">Priority</div>
                  <div className="title-value">
                    {datalist.workpriority === "Critical" ? (
                      <span className="font-weight-bold text-danger">
                        <i className="mr-2 fa fa-fire-alt"></i>{" "}
                        {datalist.workpriority}
                      </span>
                    ) : datalist.workpriority === "High" ? (
                      <span className="font-weight-bold text-warning">
                        <i className="mr-2 fa fa-arrow-up"></i>{" "}
                        {datalist.workpriority}
                      </span>
                    ) : datalist.workpriority === "Medium" ? (
                      <span className="font-weight-bold text-dark">
                        <i className="mr-2 fa fa-minus"></i>{" "}
                        {datalist.workpriority}
                      </span>
                    ) : (
                      <span className="font-weight-bold text-dark">
                        <i className="mr-2 fa fa-arrow-down"></i>{" "}
                        {datalist.workpriority}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <div className="title">Work Progress</div>
                  <div className="title-value mt-2">
                    <div
                      className="progress progress-xs"
                      title={`Task done ${datalist.progress}%`}
                    >
                      <div
                        className={`progress-bar ${
                          datalist.taskstatus === 0
                            ? "bg-warning"
                            : datalist.taskstatus === 2
                            ? "bg-danger"
                            : "bg-success"
                        }`}
                        style={{ width: `${datalist.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-4"></div>

                <div className="col-md-12 mt-4">
                  <div className="title">Assign By</div>
                  <div className="title-value">{datalist.assignbyname}</div>
                </div>
                {/* <div className="col-md-4 mt-4">
                  <div className="title">Assign By</div>
                  <div className="title-value">{datalist.assignby}</div>
                </div> */}
                <div className="col-md-12 mt-4">
                  <div className="title">Co-Workers</div>
                  <div className="title-value">-</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-success card-outline">
          {/* <div className="card-header">
              <h6>COMMENTS</h6>
            </div> */}
          <div className="card-body">
            {Array.isArray(commentlist) && commentlist.length > 0 ? (
              <React.Fragment>
                {commentlist.map((item, index) => (
                  <div className="card">
                    <div className="row card-header">
                      <div className="col-lg-6 form-inline">
                        <div className="mediaicon mr-3">
                          {item.empname.substring(0, 1)}
                        </div>{" "}
                        <span>{item.empname}</span>
                      </div>
                      <div className="col-lg-6 text-right">
                      <p>{item.date} - {item.time}</p>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>{item.comments}</p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ) : (
              <p>No Data </p>
            )}
          </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Tasksview;
