import React, { useState, useEffect } from "react";
import "../assets/import.css";

import Nodata from "./common/nodata";
import { GET_PROJECTLIST } from "../request/apirequest";
import Loader from "./common/loader";

const Projects = (props) => {
  const [loading, setLoading] = useState(true);
  const [datalist, setDatalist] = useState([]);

  const [page, setPage] = useState(1);
  const [data_count, setData_count] = useState(1);
  // eslint-disable-next-line
  const [showPerPage, setShowPerPage] = useState(10);
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(data_count / showPerPage)
  );

  const fetchData = async (page, showPerPage) => {
    setCounter(page);
    const response = await GET_PROJECTLIST(page, showPerPage);
    if (response.statuscode === 1) {
      setData_count(response.data.data_count);
      setDatalist(response.data.data);
      setNumberOfButoons(Math.ceil(response.data.data_count / showPerPage));
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
                <div className="col-lg-12 mt-3">
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap">
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
                          <td className="text-center">{item.createdby}</td>
                          <td className="text-center">
                            <button type="button" className="btn btn-sm btn-warning mr-2">Edit</button>
                            <button type="button" className="btn btn-sm btn-danger mr-2">Delete</button>
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

                            {new Array(numberOfButtons).fill("").map((el, index) => (
                              <li className={`page-item ${index + 1 === counter ? "active" : null}`}>
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
                              <button className="page-link" onClick={() => onButtonClick("next")}>
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
                            {showPerPage * counter > data_count ? data_count : showPerPage * counter}
                          </b>
                          of <b> {data_count} </b> data
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
      </div>
    </>
  );
};

export default Projects;
