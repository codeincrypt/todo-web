import React, { useState, useEffect } from "react";
import "../../assets/import.css";
import { Modal } from 'react-bootstrap';

import Nodata from "../common/nodata";
import { GET_PROJECTLIST } from "../../request/apirequest";
import Loader from "../common/loader";
import AccessDenied from "../common/noaccess";

const Manageproject = (props) => {
  const [emptype, setEmptype] = useState(0);
  const [loading, setLoading] = useState(true);
  const [datalist, setDatalist] = useState([]);

  const [modeldata, setModeldata] = useState('');
  const [show, setShow] = useState(false);

  const [page, setPage] = useState(1);
  const [data_count, setData_count] = useState(1);
  // eslint-disable-next-line
  const [showPerPage, setShowPerPage] = useState(10);
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(data_count / showPerPage)
  );

  const handleClose = () => setShow(false);

  const openModel = (e) => {
    // setShow(true);
    // var result = leavelist?.output.find((leavelist2) => {
    //   return leavelist2.id === e;
    // });
    // setModeldata(result);
    // setAttid(e);
  };

  const fetchData = async (page, showPerPage) => {
    setCounter(page);
    const response = await GET_PROJECTLIST(page, showPerPage);
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
                        <th>PROJECT ID</th>
                        <th className="text-center">STATUS</th>
                        <th className="text-center">CREATED BY</th>
                        <th className="text-center">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {datalist.map((item, index) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.projectname}</td>
                          <td>{item.projectid}</td>
                          <td className="text-center">
                            {item.status === 0 ? (
                              <span className="badge bg-danger">INACTIVE</span>
                            ) : (
                              <span className="badge bg-success">ACTIVE</span>
                            )}
                          </td>
                          <td className="text-center">{item.createdby} - {item.createdbyname} </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-sm btn-warning mr-2"
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
                        Showing
                        <b>
                          {showPerPage * counter > data_count
                            ? data_count
                            : showPerPage * counter}
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
      </div>


      <Modal
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
          {/* <div
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
          </div>*/}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Manageproject;
