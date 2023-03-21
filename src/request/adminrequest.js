const URL_STRING = process.env.REACT_APP_URL_STRING;
const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  'Content-type': 'application/json',
  'apikey': API_KEY,
  Authorization: 'Bearer ' + localStorage.getItem('todoemployee'),
}

export const GET_DASHTODOLIST = async () => {
    const response = await fetch(`${URL_STRING}/api/admin/dashboardtodo`, {
        headers,
        method: 'GET',
      }
    );
    const data = await response.json();
    return data;
};

export const GET_DASHBOARDCOUNT = async () => {
    const response = await fetch(`${URL_STRING}/api/admin/dashboardcount`, {
        headers,
        method: 'GET',
      }
    );
    const data = await response.json();
    return data;
};

export const GET_TODOLIST = async (page, limit) => {
    const response = await fetch(`${URL_STRING}/api/admin/listtodo`, {
        headers,
        method: 'POST',
        body: JSON.stringify({page, limit}),
      }
    );
    const data = await response.json();
    return data;
};

export const GET_PROJECTTODOLIST = async (projectcode, page, limit) => {
    const response = await fetch(`${URL_STRING}/api/admin/projecttasklist`, {
        headers,
        method: 'POST',
        body: JSON.stringify({projectcode, page, limit}),
      }
    );
    const data = await response.json();
    return data;
};

export const GET_TODOVIEW = async (todoid) => {
    const response = await fetch(`${URL_STRING}/api/admin/viewtodo/${todoid}`, {
        headers,
        method: 'GET',
      }
    );
    const data = await response.json();
    return data;
};

export const UPDATE_MARKASDONE = async (taskid) => {
    const response = await fetch(`${URL_STRING}/api/admin/markasdone`, {
        headers,
        method: 'POST',
        body: JSON.stringify({taskid}),
      }
    );
    const data = await response.json();
    return data;
};

export const GET_PROJECTLIST = async (page, limit) => {
  const response = await fetch(`${URL_STRING}/api/admin/projects`, {
      headers,
      method: 'POST',
      body: JSON.stringify({page, limit}),
    }
  );
  const data = await response.json();
  return data;
};

export const ADD_PROJECT = async (projectname, projectcode, status) => {
  const response = await fetch(`${URL_STRING}/api/admin/addproject`, {
      headers,
      method: 'POST',
      body: JSON.stringify({projectname, projectcode, status}),
    }
  );
  const data = await response.json();
  return data;
};

export const UPDATE_PROJECT = async (projectname, projectcode, status, id) => {
  const response = await fetch(`${URL_STRING}/api/admin/editproject`, {
      headers,
      method: 'POST',
      body: JSON.stringify({projectname, projectcode, status, id}),
    }
  );
  const data = await response.json();
  return data;
};

export const GET_MANAGEPROJECTLIST = async (page, limit) => {
  const response = await fetch(`${URL_STRING}/api/admin/manageproject`, {
      headers,
      method: 'POST',
      body: JSON.stringify({page, limit}),
    }
  );
  const data = await response.json();
  return data;
};

export const GET_EMPLOYEETODO = async (page, limit) => {
  const response = await fetch(`${URL_STRING}/api/admin/employeelisttodo`, {
      headers,
      method: 'POST',
      body: JSON.stringify({page, limit}),
    }
  );
  const data = await response.json();
  return data;
};