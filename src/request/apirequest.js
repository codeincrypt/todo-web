const URL_STRING = process.env.REACT_APP_URL_STRING;
const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  'Content-type': 'application/json',
  'apikey': API_KEY,
  Authorization: 'Bearer ' + localStorage.getItem('todoemployee'),
}

export const GET_DASHTODOLIST = async () => {
    const response = await fetch(`${URL_STRING}/api/employee/dashboardtodo`, {
        headers,
        method: 'GET',
      }
    );
    const data = await response.json();
    return data;
};

export const GET_TODOLIST = async (page, limit) => {
    const response = await fetch(`${URL_STRING}/api/employee/listtodo`, {
        headers,
        method: 'POST',
        body: JSON.stringify({page, limit}),
      }
    );
    const data = await response.json();
    return data;
};

export const GET_TODOVIEW = async (todoid) => {
    const response = await fetch(`${URL_STRING}/api/employee/viewtodo/${todoid}`, {
        headers,
        method: 'GET',
      }
    );
    const data = await response.json();
    return data;
};

export const UPDATE_MARKASDONE = async (taskid) => {
    const response = await fetch(`${URL_STRING}/api/employee/markasdone`, {
        headers,
        method: 'POST',
        body: JSON.stringify({taskid}),
      }
    );
    const data = await response.json();
    return data;
};

export const GET_PROJECTLIST = async (page, limit) => {
  const response = await fetch(`${URL_STRING}/api/employee/projects`, {
      headers,
      method: 'POST',
      body: JSON.stringify({page, limit}),
    }
  );
  const data = await response.json();
  return data;
};

export const ADD_PROJECT = async (projectname, projectid, status) => {
  const response = await fetch(`${URL_STRING}/api/employee/addproject`, {
      headers,
      method: 'POST',
      body: JSON.stringify({projectname, projectid, status}),
    }
  );
  const data = await response.json();
  return data;
};

export const GET_MANAGEPROJECTLIST = async (page, limit) => {
  const response = await fetch(`${URL_STRING}/api/employee/manageproject`, {
      headers,
      method: 'POST',
      body: JSON.stringify({page, limit}),
    }
  );
  const data = await response.json();
  return data;
};