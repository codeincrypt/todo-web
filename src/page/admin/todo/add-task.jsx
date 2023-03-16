import React, { useState, useEffect } from "react";
import "../../../assets/import.css";

const AddTask = (props) => {
  
  const sdate = new Date()
  const edate = new Date()
  var sdate2 = (sdate.getDate() < 10 ? '0' : '') + sdate.getDate() + '-' + (sdate.getMonth() + 1 < 10 ? '0' : '') + (sdate.getMonth() + 1) + '-' + sdate.getFullYear();
  var edate2 = (edate.getDate() < 10 ? '0' : '') + edate.getDate() + '-' + (edate.getMonth() + 1 < 10 ? '0' : '') + (edate.getMonth() + 1) + '-' + edate.getFullYear();


  const [inputList, setInputList] = useState([
    {
      tasks: '',
      tag: '',
      worktype: '',
      startdate: sdate2,
      enddate: edate2,
    },
  ]);
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

            <table id='addCom' className='table'>
                    <tr>
                      <td width={'38%'}>Task </td>
                      <td width={'13%'}>Tag</td>
                      <td width={'13%'}>Work Type</td>
                      <td width={'13%'}>Start Date</td>
                      <td width={'13%'}>End Date</td>
                      <td width={'10%'}>Action </td>
                    </tr>
                    {inputList.map((x, i) => {
                      return (
                        <tr>
                          <td>
                            <textarea
                              className='form-control'
                              name='tasks'
                              value={x.tasks}
                              onChange={(e) =>
                                handleInputChange(e, i)
                              }></textarea>
                          </td>
                          <td>
                            {/* <select
                              className='form-control'
                              name='tag'
                              value={x.tag}
                              onChange={(e) => handleInputChange(e, i)}>
                              <option value=''>Select Tag</option>
                              {Array.isArray(tasktag) && tasktag.length > 0 ? (
                                tasktag.map((tagitem, index) => (
                                  <option value={tagitem.tagname}>
                                    {tagitem.tagname}
                                  </option>
                                ))
                              ) : (
                                <option value=''>No Tag</option>
                              )}
                            </select> */}
                          </td>
                          <td>
                            <select
                              type='text'
                              className='form-control'
                              name='worktype'
                              value={x.worktype}
                              onChange={(e) => handleInputChange(e, i)}>
                              <option value=''>Work Type</option>
                              <option value='NEW'>NEW WORK</option>
                              <option value='MODIFY'>MODIFY</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type='text'
                              className='form-control'
                              name='startdate'
                              value={x.startdate}
                              onChange={(e) => handleInputChange(e, i)}
                              placeholder='Start date'
                            />
                          </td>
                          <td>
                            <input
                              type='text'
                              className='form-control'
                              name='enddate'
                              value={x.enddate}
                              onChange={(e) => handleInputChange(e, i)}
                              placeholder='End date'
                            />
                          </td>
                          <td>
                            {inputList.length !== 1 && (
                              <button
                                className='btn btn-sm btn-danger'
                                onClick={() => handleRemoveClick(i)}>
                                <i className='fa fa-minus '></i>
                              </button>
                            )}
                            {inputList.length - 1 === i && (
                              <button
                                className='btn btn-sm btn-success ml-2'
                                onClick={handleAddClick}>
                                <i className='fa fa-plus'></i>
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </table>

              {/* <form>
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

              </form> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddTask;
