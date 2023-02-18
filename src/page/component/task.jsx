import React from "react";
import { Link } from "react-router-dom";
// import Logo from '../assets/image/loader.jpg';


const TasksTable = ({todolist}) => (
  <React.Fragment>
    {todolist.map((item, index) => (
      <tr key={index}>
        <td> <Link to={`/taskview/${item.id}`}>{item.id}</Link> </td>
        <td>{item.tasks}</td>
        <td>{item.tag}</td>
        <td className="text-center">0</td>
        <td className="text-center">
          {item.workpriority === "Critical" ? (
            <span className="font-weight-bold text-danger">
              <i className="fa fa-fire-alt"></i> {item.workpriority}
            </span>
          ) : item.workpriority === "Very High" ? (
            <span className="font-weight-bold text-warning">
              <i className="fa fa-arrow-up"></i> {item.workpriority}
            </span>
          ) : (
            <span className="font-weight-bold text-dark">
              <i className="fa fa-arrow-down"></i> {item.workpriority}
            </span>
          )}
        </td>
        <td className="text-center">
          {item.taskstatus === 0 ? (
            <span className="badge bg-warning">Working</span>
          ) : item.taskstatus === 2 ? (
            <span className="badge bg-danger">Pending</span>
          ) : (
            <span className="badge bg-success">Completed</span>
          )}
        </td>
        <td className="text-center">{item.assignby}</td>
        <td className="text-center">
          {item.date} <br /> {item.time}
        </td>
      </tr>
    ))}
  </React.Fragment>
);

export default TasksTable;
