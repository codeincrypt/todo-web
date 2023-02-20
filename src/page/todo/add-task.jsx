import React, { useState, useEffect } from "react";
import "../../assets/import.css";

const AddTask = (props) => {
  // eslint-disable-next-line

  const sdate = new Date()
  // eslint-disable-next-line
  const edate = new Date()

  const [inputList, setInputList] = useState([
    {
      tasks: '',
      tag: '',
      worktype: '',
      startdate: sdate2,
      enddate: edate2,
    },
  ]);

  var sdate2 = (sdate.getDate() < 10 ? '0' : '') + sdate.getDate() + '-' + (sdate.getMonth() + 1 < 10 ? '0' : '') + (sdate.getMonth() + 1) + '-' + sdate.getFullYear();

  var edate2 = (edate.getDate() < 10 ? '0' : '') + edate.getDate() + '-' + (edate.getMonth() + 1 < 10 ? '0' : '') + (edate.getMonth() + 1) + '-' + edate.getFullYear();


  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        tasks: '',
        tag: '',
        worktype: '',
        startdate: sdate2,
        enddate: edate2,
      },
    ]);
  };

  useEffect(() => {
    // fetchProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add New Task</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="card card-success card-outline">
              <form>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Task</label>
                    <input
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Project</label>
                    <input
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Work Priority</label>
                    <input
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Start Date</label>
                    <input
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Assign By</label>
                    <input
                      type="text"
                      class="form-control"
                    />
                  </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                </div>

              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddTask;
