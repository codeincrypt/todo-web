import React, { useState, useEffect } from "react";
import "../../assets/import.css";
import { Modal } from "react-bootstrap";

import Nodata from "../common/nodata";
import { GET_MANAGEPROJECTLIST } from "../../request/apirequest";
import Loader from "../common/loader";
import AccessDenied from "../common/noaccess";

const Manageproject = (props) => {
  const [emptype, setEmptype] = useState(0);
  const [loading, setLoading] = useState(true);
  const [datalist, setDatalist] = useState([]);

  // eslint-disable-next-line
  const [modeldata, setModeldata] = useState("");
  const [show, setShow] = useState(false);
  const [showedit, setShowedit] = useState(false);

  const [page, setPage] = useState(1);
  const [data_count, setData_count] = useState(1);
  // eslint-disable-next-line
  const [showPerPage, setShowPerPage] = useState(10);
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(data_count / showPerPage)
  );

  // ADD PROJECT
  const [projectname, setProjectname] = useState("");
  const [projectcode, setProjectcode] = useState("");
  const [projectstatus, setProjectstatus] = useState("");
  const [modalloadingbtn, setModalloadingbtn] = useState(true);

  // EDIT PROJECT
  const [editprojectname, setEditProjectname] = useState("");
  const [editprojectcode, setEditProjectcode] = useState("");
  const [editprojectstatus, setEditProjectstatus] = useState("");
  const [editmodalloadingbtn, setEditModalloadingbtn] = useState(true);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleCloseedit = () => setShowedit(false);
  const handleOpenedit = () => setShowedit(true);

  const insertProject = () => {
    console.log("projectname", projectname);
    console.log("projectcode", projectcode);
    setModalloadingbtn(false);
  };

  const openEditModel = (e) => {
    handleOpenedit()
    setEditProjectname(e);
    setEditProjectcode(e);
    setEditProjectstatus(e);
  };

  const updateProject = () => {
    console.log("projectname", projectname);
    console.log("projectcode", projectcode);
    setEditModalloadingbtn(false);
  };

  const fetchData = async (page, showPerPage) => {
    setCounter(page);
    const response = await GET_MANAGEPROJECTLIST(page, showPerPage);
    if (response.statuscode === 1 && response.permission === 1) {
      setEmptype(1);
      setData_count(response.data.data_count);
      setDatalist(response.data.data);

      setNumberOfButoons(Math.ceil(response.data.data_count / showPerPage));
      setLoading(false);
    } else {
      setEmptype(0);
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

  useEffect(() => {
    fetchData(page, showPerPage);
    // eslint-disable-next-line
  }, []);

  if (loading === true) {
    return (
      <div className="col-lg-12 mt-3">
        <Loader />
      </div>
    );
  }

  if (emptype === 0) {
    return (
      <div className="col-lg-12 mt-3">
        <AccessDenied />
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
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="card card-success card-outline">
              {Array.isArray(datalist) && datalist.length > 0 ? (
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
                      <button
                        title="Add new Project"
                        className="btn btn-default"
                        onClick={handleOpen}
                      >
                        <i className="fa fa-plus-circle mr-1"></i> Add Project
                      </button>
                      <button className="btn btn-muted">
                        <i className="fa fa-search"></i> Search
                      </button>
                      <button className="btn btn-muted">
                        <i className="fa fa-filter"></i> Filter
                      </button>
                      <button className="btn btn-muted">
                        <i className="fa fa-sort"></i> Sort
                      </button>
                    </div>
                  </div>

                  <table className="table table-hover text-nowrap mt-3">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>PROJECT NAME</th>
                        <th className="text-center">PROJECT ID</th>
                        <th className="text-center">STATUS</th>
                        <th>CREATED BY</th>
                        <th className="text-center">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datalist.map((item, index) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.projectname}</td>
                          <td className="text-center">{item.projectid}</td>
                          <td className="text-center">
                            {item.status === 0 ? (
                              <span className="badge bg-danger">INACTIVE</span>
                            ) : (
                              <span className="badge bg-success">ACTIVE</span>
                            )}
                          </td>
                          <td>
                            {item.createdby} - {item.createdbyname}{" "}
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-sm btn-warning mr-2"
                              onClick={(e) => openEditModel(item.id)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-danger mr-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
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
                        {`Showing ${
                          showPerPage * counter > data_count
                            ? data_count
                            : showPerPage * counter
                        } of ${data_count} data`}
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
      </div>

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
              Add New Project
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: 400 }}>
          <div className="form-group mt-4">
            <label>Project Name</label>
            <input
              type="text"
              onChange={(e) => setProjectname(e.target.value)}
              className="form-control p_input"
            />
          </div>
          <div className="form-group">
            <label>Project Code</label>
            <input
              type="text"
              max={4}
              onChange={(e) => setProjectcode(e.target.value)}
              className="form-control p_input"
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
            {modalloadingbtn === true ? (
              <button
                className="btn btn-success col-lg-4"
                onClick={insertProject}
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

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <span style={{ color: '#1d1346', fontSize: 20 }}>
              Employee Attendance
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: 400 }}>
          <div className='form-group mt-4'>
            <span>
              <h2
                className='text-center'
                style={{ color: '#1d1346', fontSize: 20, lineHeight: 0.7 }}>
                <b>Are You Sure</b>
              </h2>
              <h4
                className='text-center'
                style={{ color: '#1d1346', fontSize: 16, lineHeight: 0.7 }}>
                Do you want to Accept / Reject Attendance
              </h4>
            </span>
          </div>
          <div className='mt-5 px-2'>
            <div className='row mb-3'>
              <div className='col-lg-3 col-3'>
                <span className='invoicelabel font-weight-bold text-muted'>
                  Date :
                </span>
              </div>
              <div className='col-lg-3 col-3'>
                <span className='invoicefont'>{modeldata.date}</span>
              </div>
              <div className='col-lg-3 col-3'>
                <span className='invoicelabel font-weight-bold text-muted'>
                  Employee :
                </span>
              </div>
              <div className='col-lg-3 col-3'>
                <span className='invoicefont'>{modeldata.name}</span>
              </div>
              <div className='col-lg-3 col-3'>
                <span className='invoicelabel font-weight-bold text-muted'>
                  Start Time :
                </span>
              </div>
              <div className='col-lg-3 col-3'>
                <span className='invoicefont'>{modeldata.starttime}</span>
              </div>
              <div className='col-lg-3 col-3'>
                <span className='invoicelabel font-weight-bold text-muted'>
                  Employee Id :
                </span>
              </div>
              <div className='col-lg-3 col-3'>
                <span className='invoicefont'>{modeldata.empid}</span>
              </div>
            </div>
          </div>
          <div
            className='form-group text-center mt-3 row justify-content-center'
            style={{ verticalAlign: 'bottom' }}>
            {acceptbtn === true ? (
              <>
                <button
                  className='btn col-lg-5 mr-2'
                  name='reject'
                  style={{
                    borderRadius: '2rem',
                    color: '#fff',
                    backgroundColor: '#9f384d',
                  }}
                  onClick={(e) => approveAttendance(2)}>
                  Reject
                </button>

                <button
                  className='btn col-lg-5'
                  name='accept'
                  style={{
                    borderRadius: '2rem',
                    color: '#fff',
                    backgroundColor: '#1d1346',
                  }}
                  onClick={(e) => approveAttendance(1)}>
                  Accept
                </button>
              </>
            ) : (
              <button
                className='btn col-lg-5'
                disabled
                name='accept'
                style={{
                  borderRadius: '2rem',
                  color: '#fff',
                  backgroundColor: '#1d1346',
                }}>
                <i className='fa fa-spin fa-spinner'></i> Please Wait
              </button>
            )} 
          </div>
        </Modal.Body>
      </Modal> */}

      <Modal
        show={showedit}
        onHide={handleCloseedit}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span style={{ color: "#1d1346", fontSize: 20 }}>
              Update Project
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: 400 }}>
          <div className="form-group mt-4">
            <label>Project Name</label>
            <input
              type="text"
              defaultValue={editprojectname}
              onChange={(e) => setEditProjectname(e.target.value)}
              className="form-control p_input"
            />
          </div>
          <div className="form-group">
            <label>Project Code</label>
            <input
              type="text"
              defaultValue={editprojectcode}
              max={4}
              onChange={(e) => setEditProjectcode(e.target.value)}
              className="form-control p_input"
            />
          </div>
          <div className="form-group">
            <label>Project Status</label>
            <select
              className="form-control"
              defaultValue={editprojectstatus}
              onChange={(e) => setEditProjectstatus(e.target.value)}
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <div className="form-group mt-3">
            {editmodalloadingbtn === true ? (
              <button
                className="btn btn-success col-lg-4"
                onClick={updateProject}
              >
                Update
              </button>
            ) : (
              <button className="btn btn-secondary col-lg-4" disabled>
                <i className="fa fa-spin fa-spinner"></i> Please Wait
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Manageproject;
