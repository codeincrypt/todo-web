import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "../../../assets/import.css";
import Select from "react-select";
import Swal from "sweetalert2";

import Nodata from "../../common/nodata";
import {
  GET_EMPLOYEELIST,
  GET_PROJECTLIST,
  INSERT_EMPPROJECT,
} from "../../../request/adminrequest";
import Loader from "../../common/loader";

const AdminProject = (props) => {
  const [loading, setLoading] = useState(true);
  const [datalist, setDatalist] = useState([]);

  const [empdatalist, setEmpDatalist] = useState([]);

  const [page, setPage] = useState(1);
  const [data_count, setData_count] = useState(1);
  // eslint-disable-next-line
  const [showPerPage, setShowPerPage] = useState(10);
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(data_count / showPerPage)
  );

  const [modalloadingbtn, setModalloadingbtn] = useState(true);
  const [show, setShow] = useState(false);
  const [projectstatus, setProjectstatus] = useState(0);
  const [projectemployee, setProjectemp] = useState("");
  const [projectid, setProjectid] = useState("");

  const handleClose = () => setShow(false);

  const fetchData = async (page, showPerPage) => {
    setCounter(page);
    const response = await GET_PROJECTLIST(page, showPerPage);
    if (response.statuscode === 1) {
      setData_count(response.data.data_count);
      setDatalist(response.data.data);
      setNumberOfButoons(Math.ceil(response.data.data_count / showPerPage));
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const fetchEmpData = async () => {
    setCounter(page);
    const response = await GET_EMPLOYEELIST();
    if (response.statuscode === 1) {
      let output = [];
      response.data.data.map((item, index) =>
        output.push({ value: item.empid, label: item.name })
      );
      setEmpDatalist(output);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
        fetchData(counter, showPerPage);
        setPage(1);
      } else {
        setCounter(counter - 1);
        fetchData(counter - 1, showPerPage);
        setPage(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
        fetchData(counter, showPerPage);
        setPage(counter);
      } else {
        setCounter(counter + 1);
        fetchData(counter + 1, showPerPage);
        setPage(counter + 1);
      }
    }
  };

  const openModel = (e) => {
    setShow(true);
    setProjectid(e);
  };

  const insertEmpProject = async () => {
    const response = await INSERT_EMPPROJECT(
      projectid,
      projectemployee.value,
      projectstatus
    );
    if (response.statuscode === 1) {
      fetchData(page, showPerPage);
      setShow(false);
      Swal.fire("success!", `${response.message}`, "success");
    }
  };

  useEffect(() => {
    fetchData(page, showPerPage);
    fetchEmpData();
    // eslint-disable-next-line
  }, [page, showPerPage]);

  if (loading === true) {
    return (
      <div className="col-lg-12 mt-3">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Project</h1>
              </div>
              <div className="col-sm-6 text-right">
                <Link className="btn btn-dark" to={`/admin/manageproject`}>
                  {" "}
                  Manage Project{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="card card-success card-outline">
              {Array.isArray(datalist) && datalist.length > 0 ? (
                <div className="col-lg-12 mt-3">
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap projects">
                      <thead>
                        <tr>
                          <th width="5%">ID</th>
                          <th width="20%">PROJECT NAME</th>
                          <th width="30%">TEAM</th>
                          <th width="10%" className="text-center">
                            PENDING TASKS
                          </th>
                          <th width="10%" className="text-center">
                            PRIORITY TASKS
                          </th>
                          <th width="10%" className="text-center">
                            ACTION
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {datalist.map((item, index) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.projectname}</td>
                            <td>
                              {Array.isArray(item.employee) &&
                              item.employee.length > 0 ? (
                                <ul className="list-inline">
                                  {item.employee.map((em, i) => (
                                    <li
                                      className="list-inline-item"
                                      title={em.name}
                                    >
                                      <img
                                        className="table-img"
                                        src={em.empprofileimg}
                                        alt={em.name}
                                      />
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </td>
                            <td className="text-center">{item.pendingtask}</td>
                            <td className="text-center">{item.prioritytask}</td>
                            <td className="text-center">
                              <Link
                                className="ml-1 btn btn-sm btn-info"
                                title={`View the employee's task of ${item.projectname} project`}
                                to={`/admin/project/${item.projectid}`}
                              >
                                {" "}
                                <i className="fa fa-box mr-1"></i> Tasks{" "}
                              </Link>
                              <Link
                                className="ml-1 btn btn-sm btn-info"
                                title={`View the employee's working in ${item.projectname} project`}
                                to={`/admin/teams/${item.projectid}`}
                              >
                                {" "}
                                <i className="fa fa-users mr-1"></i> Teams{" "}
                              </Link>
                              <button
                                className="ml-1 btn btn-sm btn-warning"
                                onClick={(e) => openModel(item.projectid)}
                              >
                                {" "}
                                <i className="fa fa-plus mr-1"></i> Assign{" "}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="col-lg-12 mt-4">
                    <div className="row">
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
                                      fetchData(index + 1, showPerPage)
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
                          Showing{" "}
                          <span className="font-weight-bold">
                            {showPerPage * counter > data_count
                              ? data_count
                              : showPerPage * counter}
                          </span>
                          of
                          <span className="font-weight-bold">
                            {" "}
                            {data_count}{" "}
                          </span>{" "}
                          data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Nodata />
              )}
            </div>
          </div>
        </section>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <span style={{ color: "#1d1346", fontSize: 20 }}>
                Assign Project to your employee
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: 400 }}>
            <p id="inserterror"></p>

            <div className="form-group">
              <label>Project</label>
              <input className="form-control" value={projectid} disabled={true} readOnly={true} />
            </div>

            <div className="form-group">
              <label>Employee</label>
              <Select
                options={empdatalist}
                onChange={(e) => setProjectemp(e)}
              />
            </div>

            <div className="form-group">
              <label>Project Status</label>
              <select
                className="form-control"
                defaultValue={projectstatus}
                onChange={(e) => setProjectstatus(e.target.value)}
              >
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>

            <div className="form-group mt-3">
              {modalloadingbtn ? (
                <button
                  className="btn btn-success col-lg-4"
                  onClick={insertEmpProject}
                >
                  Add New
                </button>
              ) : (
                <button className="btn btn-secondary col-lg-4" disabled>
                  <i className="fa fa-spin fa-spinner"></i> Please Wait
                </button>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AdminProject;
