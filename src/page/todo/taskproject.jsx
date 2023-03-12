import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../assets/import.css";

import { GET_PROJECTTODOLIST } from "../../request/apirequest";
import TasksTable from "../component/task";
import Loader from "../common/loader";
import Nodata from "../common/nodata";

const TaskProject = (props) => {
  const { projectcode } = useParams();
  const [loading, setLoading] = useState(true);
  const [todolist, setTodolist] = useState([]);

  const [page, setPage] = useState(1);
  const [data_count, setData_count] = useState(1);
  const [showPerPage, setShowPerPage] = useState(10);
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(data_count / showPerPage)
  );

  const fetchTodo = async (projectcode, page, showPerPage) => {
    setCounter(page);
    const result = await GET_PROJECTTODOLIST(projectcode, page, showPerPage)
    if (result.statuscode === 1) {
      setData_count(result.data.data_count);
      setTodolist(result.data.data);
      setNumberOfButoons(Math.ceil(result.data.data_count / showPerPage));
      setLoading(false);
    }
  };

  const changeLimit = (e) => {
    e = parseFloat(e);
    setLoading(true);
    setShowPerPage(e);
    fetchTodo(page, e);
  };

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
        fetchTodo(counter, showPerPage);
        setPage(1);
      } else {
        setCounter(counter - 1);
        fetchTodo(counter - 1, showPerPage);
        setPage(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
        fetchTodo(counter, showPerPage);
        setPage(counter);
      } else {
        setCounter(counter + 1);
        fetchTodo(counter + 1, showPerPage);
        setPage(counter + 1);
      }
    }
  };

  useEffect(() => {
    fetchTodo(projectcode, page, showPerPage);
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
            {Array.isArray(todolist) && todolist.length > 0 ? (
              <div className="card-body">
                <div className="row">
                  {/* <div className="col-lg-3">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search here..."
                      />
                    </div> */}
                  <div className="col-lg-10 form-inline">
                    <Link
                      to="/add-task"
                      title="Add new To-Do"
                      className="btn btn-default"
                    >
                      <i className="fa fa-plus-circle mr-1"></i> Add To Do
                    </Link>
                    <button className="btn btn-muted">
                      {" "}
                      <i className="fa fa-search"></i> Search
                    </button>
                    <button className="btn btn-muted">
                      {" "}
                      <i className="fa fa-user"></i> Person
                    </button>
                    <button className="btn btn-muted">
                      {" "}
                      <i className="fa fa-filter"></i> Filter
                    </button>
                    <button className="btn btn-muted">
                      {" "}
                      <i className="fa fa-sort"></i> Sort
                    </button>
                  </div>
                  <div className="col-lg-2">
                    <select
                      className="form-control"
                      onChange={(e) => changeLimit(e.target.value)}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>

                <table className="table table-hover text-nowrap mt-3">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>TASK</th>
                      <th>TAG</th>
                      <th>COMMENTS</th>
                      <th>PRIORITY</th>
                      <th className="text-center">STATUS</th>
                      <th className="text-center">ASSIGNEE</th>
                      <th className="text-center">DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TasksTable todolist={todolist} />
                  </tbody>
                </table>

                <div className="row mt-4">
                  <div className="col-lg-8">
                    <nav aria-label="Page navigation example float-left">
                      <ul className="pagination">
                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={() => onButtonClick("prev")}
                          >
                            Previous
                          </button>
                        </li>

                        {new Array(numberOfButtons)
                          .fill("")
                          .map((el, index) => (
                            <li
                              className={`page-item ${
                                index + 1 === counter ? "active" : null
                              }`}
                            >
                              <button
                                className="page-link"
                                onClick={() =>
                                  fetchTodo(index + 1, showPerPage)
                                }
                              >
                                {index + 1}
                              </button>
                            </li>
                          ))}

                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={() => onButtonClick("next")}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-lg-4">
                    <p className="text-right pr-3">
                      {" "}
                      Showing
                      <b>
                        {" "}
                        {showPerPage * counter > data_count
                          ? data_count
                          : showPerPage * counter}{" "}
                      </b>
                      of <b> {data_count} </b> data
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <Nodata />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskProject;
