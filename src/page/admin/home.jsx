import React, { useState, useEffect } from "react";
import moment from "moment";
import "../../assets/import.css";
import { GET_DASHTODOLIST } from "../../request/adminrequest";
import { GET_PROFILE } from "../../request/apirequest";
import TasksTable from "../component/task";
import Nodata from "../common/nodata";

moment().format();

const AdminHome = (props) => {
  const [profile, setProfile] = useState("");
  const [todolist, setTodolist] = useState([]);

  var dt = new Date()
  const currentmonth = dt.getMonth()

  const fetchProfile = async () => {
    GET_PROFILE().then(async (res) => {
      if (res.statuscode === 1) {
        setProfile(res.data);
      }
    });
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
    fetchTodo();
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
            <div className="col-lg-2">
              <div className="callout callout-success p-4">
                <h1>0</h1>
                <h5>Pending Tasks</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="callout callout-success p-4">
                <h1>0</h1>
                <h5>Priority Tasks</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="callout callout-success p-4">
                <h1>0</h1>
                <h5>Total Tasks</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="callout callout-success p-4">
                <h1>0</h1>
                <h5>Today's Task</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="callout callout-info p-4">
                <h1>0</h1>
                <h5>{currentmonth} Tasks</h5>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="callout callout-info p-4">
                <h1>0</h1>
                <h5>Bugs</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">To Do Tasks</h3>
            </div>

            <div className="card-body table-responsive p-0">
              {Array.isArray(todolist) && todolist.length > 0 ? (
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>TASK</th>
                      <th>PROJECT</th>
                      <th>TAG</th>
                      <th className="text-center">PRIORITY</th>
                      <th className="text-center">ASSIGNEE</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TasksTable todolist={todolist} />
                  </tbody>
                </table>
              ) : (
                <Nodata />
              )}
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Portfolio Summary</h3>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminHome;
