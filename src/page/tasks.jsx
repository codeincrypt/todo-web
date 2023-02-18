import React, { useState, useEffect } from "react";
import "../assets/import.css";
import { GET_TODOLIST } from "../request/apirequest";
import TasksTable from "./component/task";

const Tasks = (props) => {
  // eslint-disable-next-line
  const [todolist, setTodolist] = useState([]);

  const fetchTodo = async () => {
    GET_TODOLIST().then(async (res) => {
      if (res.statuscode === 1) {
        setTodolist(res.data);
      }
    });
  };

  const RedirectLink = ( id) => {
    console.log("Redirect", id)
  }

  useEffect(() => {
    fetchTodo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>To Do List</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
        <div className="container-fluid">
        <div className="card card-success card-outline">
            {/* <div className="card-header">
              <h3 className="card-title">To Do Tasks</h3>
            </div> */}

            <div className="card-body table-responsive p-0">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>TASK</th>
                    <th>TAG</th>
                    <th>COMMENTS</th>
                    <th className="text-center">PRIORITY</th>
                    <th className="text-center">STATUS</th>
                    <th className="text-center">ASSIGNEE</th>
                    <th className="text-center">DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <TasksTable todolist={todolist} openLink={RedirectLink} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </section>
    </>
  );
};

export default Tasks;
