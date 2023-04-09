import React, { useState, useEffect } from "react";
import "../../../assets/import.css";
import { GET_PROJECTLIST } from "../../../request/userrequest";
import { showAlert } from "../../common/alert";

const AddTask = (props) => {
  const [projectlist, setProjectlist] = useState([]);

  const sdate = new Date();
  const edate = new Date();
  var sdate2 =
    (sdate.getDate() < 10 ? "0" : "") +
    sdate.getDate() +
    "-" +
    (sdate.getMonth() + 1 < 10 ? "0" : "") +
    (sdate.getMonth() + 1) +
    "-" +
    sdate.getFullYear();
  var edate2 =
    (edate.getDate() < 10 ? "0" : "") +
    edate.getDate() +
    "-" +
    (edate.getMonth() + 1 < 10 ? "0" : "") +
    (edate.getMonth() + 1) +
    "-" +
    edate.getFullYear();

  const [inputList, setInputList] = useState([
    {
      tasks: "",
      project: "",
      priority: "",
      assignee: "",
      status: "",
      startdate: sdate2
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
        tasks: "",
        project: "",
        priority: "",
        assignee: "",
        status: "",
        startdate: "",
      },
    ]);
  };

  const submitTaskData = () => {
    for (let i = 0; i < inputList.length; i++) {
      if(inputList[i].tasks === ""){
        return showAlert("danger", `Please enter task of row ${i+1}`)
      }
      if(inputList[i].tasks.toString().length < 5){
        return showAlert("danger", `Please enter valid task of row ${i+1}`)
      }
      if(inputList[i].project === ""){
        return showAlert("danger", `Please select project of row ${i+1}`)
      }
      if(inputList[i].priority === ""){
        return showAlert("danger", `Please select priority of row ${i+1}`)
      }
      if(inputList[i].assignee === ""){
        return showAlert("danger", `Please select assignee of row ${i+1}`)
      }
      if(inputList[i].status === ""){
        return showAlert("danger", `Please select status of row ${i+1}`)
      }
    }
    showAlert("danger", "aaa");
    console.log('inputList', inputList)
  }

  const SelectProjectList = ({ projectlist }) => {
    return projectlist.map((item, index) => (
      <option value={item.projectid} key={index}>
        {item.projectname}
      </option>
    ));
  };

  const fetchProjectData = async () => {
    const response = await GET_PROJECTLIST(1, 1000);
    if (response.statuscode === 1) {
      setProjectlist(response.data.data);
    }
  }

  useEffect(() => {
    fetchProjectData();
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
            <div id="error"></div>
          </div>
          <div className="container-fluid">
            <div className="card card-success card-outline">
              <table className="table table-tasks">
                <tr>
                  <td width={"40%"}>Task </td>
                  <td width={"10%"}>Project</td>
                  <td width={"10%"}>Priority</td>
                  <td width={"10%"}>Assignee</td>
                  <td width={"10%"}>Status</td>
                  <td width={"12%"}>Start Date</td>
                  <td width={"15%"} className="text-center">Action</td>
                </tr>
                {inputList.map((x, i) => {
                  return (
                    <tr>
                      <td>
                        <textarea
                          className="form-control"
                          name="tasks"
                          value={x.tasks}
                          onChange={(e) => handleInputChange(e, i)}
                        ></textarea>
                      </td>
                      <td>
                        <select
                          type="text"
                          className="form-control"
                          name="project"
                          value={x.project}
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <SelectProjectList projectlist={projectlist} />
                          <option value="OTHERS">Others</option>
                        </select>
                      </td>
                      <td>
                        <select
                          type="text"
                          className="form-control"
                          name="priority"
                          value={x.priority}
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option value="Critical">Critical</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </td>
                      <td>
                        <select
                          type="text"
                          className="form-control"
                          name="assignees"
                          value={x.assignee}
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option value="Completed">Completed</option>
                          <option value="Working">Working</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </td>
                      <td>
                        <select
                          type="text"
                          className="form-control"
                          name="status"
                          value={x.status}
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option value="2">Pending</option>
                          <option value="0">Working</option>
                          <option value="1">Completed</option>
                        </select>
                      
                      </td>
                      <td className="text-center">
                      <input
                          type="text"
                          className="form-control"
                          name="startdate"
                          value={x.startdate}
                          onChange={(e) => handleInputChange(e, i)}
                          placeholder="Start date"
                        />
                      </td>
                      <td className="text-center">
                        {inputList.length !== 1 && (
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleRemoveClick(i)}
                          >
                            <i className="fa fa-minus "></i>
                          </button>
                        )}
                        {inputList.length - 1 === i && (
                          <button
                            className="btn btn-sm btn-success ml-2"
                            onClick={handleAddClick}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </table>
              <div className="col-12 mb-3 mr-3 text-right">
                <button type="submit" class="btn btn-primary" onClick={submitTaskData}>
                  <i className="fa fa-upload"></i> Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddTask;
