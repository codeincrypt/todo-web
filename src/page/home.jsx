import React, { useState, useEffect } from "react";
import moment from "moment";
import "../assets/import.css";
import { GET_DASHTODOLIST, GET_PROFILE } from "../request/apirequest";
import TasksTable from "./component/task";
import Nodata from "./common/nodata";

moment().format();

const Home = (props) => {
  const [profile, setProfile] = useState("");
  const [todolist, setTodolist] = useState([]);

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
              <h4>Good Morning, {profile.name}</h4>
              <h6 className="text-muted">
                {moment(new Date()).format("DD MMMM YYYY")}{" "}
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="callout callout-danger p-4">
                <h1>1</h1>
                <h5>Pending Tasks</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="callout callout-danger p-4">
                <h1>2</h1>
                <h5>High Priority</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="callout callout-danger p-4">
                <h1>100</h1>
                <h5>Tasks</h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="callout callout-danger p-4">
                <h1>100</h1>
                <h5>Tasks</h5>
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
                      <th>TAG</th>
                      <th>COMMENTS</th>
                      <th className="text-center">PRIORITY</th>
                      <th className="text-center">PROGRESS</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">ASSIGNEE</th>
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

            <div className="card-body table-responsive p-0">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span className="tag tag-success">Approved</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>Alexander Pierce</td>
                    <td>11-7-2014</td>
                    <td>
                      <span className="tag tag-warning">Pending</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>657</td>
                    <td>Bob Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span className="tag tag-primary">Approved</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>Mike Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span className="tag tag-danger">Denied</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
