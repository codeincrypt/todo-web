import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../assets/import.css";
import { GET_TODOLIST } from "../../request/adminrequest";
import TasksTable from "../component/task";
import Loader from "../common/loader";
import Nodata from "../common/nodata";

const TaskEmployee = (props) => {
  const { empid } = useParams();
  
  const [loading, setLoading] = useState(true);
  const [todolist, setTodolist] = useState([]);

  const [page, setPage] = useState(1);
  const [data_count, setData_count] = useState(1);
  const [showPerPage, setShowPerPage] = useState(10);
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(data_count / showPerPage)
  );

  const fetchTodo = async (page, showPerPage) => {
    setCounter(page);
    GET_TODOLIST(page, showPerPage, empid).then(async (result) => {
      if (result.statuscode === 1) {
        setData_count(result.data.data_count);
        setTodolist(result.data.data);
        setNumberOfButoons(Math.ceil(result.data.data_count / showPerPage));
        setLoading(false);
      }
    });
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
    // fetchTodo(page, showPerPage);
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
              <h1>Employee Wise Tasks</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-success card-outline">
          
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskEmployee;
