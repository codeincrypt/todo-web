import React from "react";
// import Logo from '../assets/image/loader.jpg';

const TasksTable = ({ todolist }) => (
  <React.Fragment>
    {todolist.map((item, index) => (
      <tr key={index} style={{cursor: 'pointer'}} onClick={() => window.location.replace(`/task/${item.tasksid}`) }>
        <td className="align-middle">{item.tasksid}
        </td>
        <td className="align-middle">{item.tasks}</td>
        <td className="align-middle">{item.tag}</td>
        <td className="text-center align-middle">0</td>
        <td className="align-middle">
          {item.workpriority === "Critical" ? (
            <span className="font-weight-bold text-danger">
              <i className="fa fa-fire-alt"></i> {item.workpriority}
            </span>
          ) : item.workpriority === "Very High" ? (
            <span className="font-weight-bold text-warning">
              <i className="fa fa-arrow-up"></i> {item.workpriority}
            </span>
          ) : item.workpriority === "High" ? (
            <span className="font-weight-bold text-dark">
              <i className="fa fa-arrow-up"></i> {item.workpriority}
            </span>
          ) : (
            <span className="font-weight-bold text-dark">
              <i className="fa fa-arrow-down"></i> {item.workpriority}
            </span>
          )}
        </td>

        <td className="text-center align-middle">
          <div className="progress progress-xs" title={`Task done ${item.progress}%`}>
          <div className={`progress-bar ${item.taskstatus === 0 ? 'bg-warning' : item.taskstatus === 2 ? 'bg-danger' : 'bg-success'}`} style={{width: `${item.progress}%`}}></div>
          </div>
        </td>

        <td className="text-center align-middle">
          {item.taskstatus === 0 ? (
            <span className="badge bg-warning">Working</span>
          ) : item.taskstatus === 2 ? (
            <span className="badge bg-danger">Pending</span>
          ) : (
            <span className="badge bg-success">Completed</span>
          )}
        </td>
        <td className="text-center align-middle">{item.assignby}</td>
        <td className="text-center align-middle" title={`${item.date} | ${item.time}`} >
          {item.date}
        </td>
      </tr>
    ))}
  </React.Fragment>
);

export default TasksTable;
