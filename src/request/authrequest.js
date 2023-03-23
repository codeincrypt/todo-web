const URL_STRING = process.env.REACT_APP_URL_STRING;
const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  'Content-type': 'application/json',
  'apikey': API_KEY,
}

export const GET_LOGIN = async (username, password) => {
    const response = await fetch(`${URL_STRING}/api/auth/employee/login`, {
        headers,
        method: 'POST',
        body: JSON.stringify({username, password}),
      }
    );
    const data = await response.json();
    return data;
};

export const GET_VERIFYOTP = async (username, password, otp) => {
    const response = await fetch(`${URL_STRING}/api/auth/employee/otpverify`, {
        headers,
        method: 'POST',
        body: JSON.stringify({email:username, password, otp}),
      }
    );
    const data = await response.json();
    return data;
};

export const GET_MAINTANANCE = async () => {
  const response = await fetch(`${URL_STRING}`, {
      headers,
      method: 'GET',
    }
  );
  return response;
};