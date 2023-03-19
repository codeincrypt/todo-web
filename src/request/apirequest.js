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