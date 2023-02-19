const URL_STRING = process.env.REACT_APP_URL_STRING;
const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  'Content-type': 'application/json',
  'apikey': API_KEY,
  Authorization: 'Bearer ' + localStorage.getItem('todoemployee'),
}

export const GET_PROFILE = async () => {
  const response = await  fetch(`${URL_STRING}/api/employee/profile`, {
    method : "GET",
    headers
  })

  const data = await response.json();
  return data;
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