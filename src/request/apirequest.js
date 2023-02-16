const URL_STRING = process.env.REACT_APP_URL_STRING;

const headers = {
  'Content-type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('hcnewsletter'),
}

export const GET_PROFILE = async () => {
  const response = await  fetch(`${URL_STRING}/api/employee/profile`, {
    method : "GET",
    headers
  })

  const data = await response.json();
  return data;
}

export const GET_APIDATALIST = async (fromdate, todate, page, limit) => {
    const response = await fetch(`${URL_STRING}/api/admin/get-newsletter`, {
        headers,
        method: 'POST',
        body: JSON.stringify({fromdate, todate, page, limit}),
      }
    );
    const data = await response.json();
    return data;
};