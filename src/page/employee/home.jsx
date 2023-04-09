import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../assets/import.css";

import { GET_DASHBOARDCOUNT, GET_DASHTODOLIST } from "../../request/userrequest";
import { GET_PROFILE } from "../../request/apirequest";
import TasksTable from "../component/task";
import Nodata from "../common/nodata";

moment().format();

const Home = (props) => {
  const [profile, setProfile] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [counts, setCounts] = useState({});

  const fetchProfile = async () => {
    const response = await GET_PROFILE()
    if (response.statuscode === 1) {
      setProfile(response.data)
    }
  };

  const fetchCounts = async () => {
    const response = await GET_DASHBOARDCOUNT()
    if (response.statuscode === 1) {
      setCounts(response.data)
    }
  };

  const fetchTodo = async () => {
    GET_DASHTODOLIST().then(async (res) => {
      if (res.statuscode === 1) {
        setTodolist(res.data.data);
      }
    });
  };

  useEffect(() => {
    fetchProfile();
    fetchCounts();
    fetchTodo();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section className="content-header">
        {/* <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard </h1>
            </div>
          </div>
        </div> */}
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary ">
            <div className="card-body p-4">
              <h4>Hi, {profile.name}</h4>
              <h6 className="text-muted">
                {moment(new Date()).format("DD MMMM YYYY")}{" "}
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="callout callout-success p-4">
                <h1>{counts.pending}</h1>
                <h5>Pending Tasks</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="callout callout-success p-4">
                <h1>{counts.priority}</h1>
                <h5>Priority Tasks</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="callout callout-success p-4">
                <h1>{counts.currentmonth}</h1>
                <h5>Task This Month</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="callout callout-info p-4">
                <h1>{counts.bugs}</h1>
                <h5>Bugs</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title text-uppercase font-weight-bold">To Do Tasks</h3>
              <Link to="/emp/task" className="btn btn-success btn-sm float-right px-3">View All</Link>
            </div>

            <div className="card-body table-responsive p-0">
              {Array.isArray(todolist) && todolist.length > 0 ? (
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>TASK</th>
                      <th>PROJECT</th>
                      <th>PRIORITY</th>
                      <th className="text-center">ASSIGNEE</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                  {todolist.map((item, index) => (
                    <tr key={index} style={{cursor: 'pointer'}} onClick={() => window.location.replace(`/emp/task/${item.tasksid}`) }>
                      <td className="align-middle">{item.tasksid}
                      </td>
                      <td className="align-middle">{item.tasks}</td>
                      <td className="align-middle">{item.projectcode}</td>
                      {/* <td className="align-middle">{item.tag}</td> */}
                      <td className="align-middle ">
                        {item.workpriority === "Critical" ? (
                          <span className="font-weight-bold text-danger">
                            <i className="mr-2 fa fa-fire-alt"></i> {item.workpriority}
                          </span>
                        ) : item.workpriority === "High" ? (
                          <span className="font-weight-bold text-warning">
                            <i className="mr-2 fa fa-arrow-up"></i> {item.workpriority}
                          </span>
                        ) : item.workpriority === "Medium" ? (
                          <span className="font-weight-bold text-dark">
                            <i className="mr-2 fa fa-minus"></i> {item.workpriority}
                          </span>
                        ) : (
                          <span className="font-weight-bold text-dark">
                            <i className="mr-2 fa fa-arrow-down"></i> {item.workpriority}
                          </span>
                        )}
                      </td>
                      <td className="text-center align-middle">
                        {item.taskstatus === 0 ? (
                          <span className="badge bg-warning">Working</span>
                        ) : item.taskstatus === 2 ? (
                          <span className="badge bg-danger">Pending</span>
                        ) : (
                          <span className="badge bg-success">Completed</span>
                        )}
                      </td>
                      <td className="text-center align-middle"> {item.assignbyname } </td>
                      
                      <td className="text-center align-middle" title={`${item.date} / ${item.time}`} >
                        {item.date}
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              ) : (
                <Nodata />
              )}
            </div>
          </div>
        </div>

        {/* <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Portfolio Summary</h3>
            </div>

            
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Home;
