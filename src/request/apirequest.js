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

export const GET_DASHTODOLIST = async (fromdate, todate, page, limit) => {
    const response = await fetch(`${URL_STRING}/api/employee/dashboardtasks`, {
        headers,
        method: 'GET',
        // body: JSON.stringify({fromdate, todate, page, limit}),
      }
    );
    const data = await response.json();
    return data;
};

export const GET_TODOLIST = async (fromdate, todate, page, limit) => {
    const response = await fetch(`${URL_STRING}/api/employee/dashboardtasks`, {
        headers,
        method: 'GET',
        // body: JSON.stringify({fromdate, todate, page, limit}),
      }
    );
    const data = await response.json();
    return data;
};