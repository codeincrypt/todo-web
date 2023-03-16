import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";
import "../assets/import.css";
import { GET_LOGIN, GET_VERIFYOTP } from "../request/auth";
import { showAlert } from "../page/common/alert";

const Login = (props) => {
  const { dispatch } = useContext(UserContext);

  const [otp, setOtp] = useState('');
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginpage, setLoginpage] = useState(true);
  const [otpbtn, setOtpbtn] = useState(false);
  const [loadingbtn, setLoadingbtn] = useState(false);


  const getLogin = async () => {
    setLoadingbtn(true);
    GET_LOGIN(email, password).then(async (res) => {
      if (res.statuscode === 1) {
        showAlert('success', res.message)
        setLoginpage(false)
      } else {
        showAlert('danger', res.message)
        setLoadingbtn(false);
      }
    })
  }

  const getOtp = async () => {
    setOtpbtn(true);
    GET_VERIFYOTP(email, password, otp).then(async (res) => {
      if (res.statuscode === 1) {
        showAlert('success', res.message)
        localStorage.setItem('todoemployee', res.data.token);
        localStorage.setItem('usertype', res.data.emptype);
        localStorage.setItem('todoemployeedetails', res.data);
        dispatch({ type: 'TODOUSER', payload: res.data.token });
        if (res.data.emptype === "EMPLOYEE") {
          window.location.href = '/emp'
        }
        if (res.data.emptype === "SUPERADMIN" || res.data.emptype === "ADMIN") {
          window.location.href = '/admin'
        }
      } else {
        showAlert('danger', res.message)
        setOtpbtn(false);
      }
    })
  }

  useEffect(() => {
    if (localStorage.getItem("todoemployee") || localStorage.getItem("usertype") === "EMPLOYEE") {
      window.location.href = '/emp'
    }
    if (localStorage.getItem("todoemployee") || localStorage.getItem("usertype") === "SUPERADMIN" || localStorage.getItem("usertype") === "ADMIN") {
      window.location.href = '/admin'
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <body className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <b>Microsoft Task </b> <br /> 
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <div id="error"></div>

              {loginpage ? (
                <form>
                  <div className="form-group">
                    <label>Username or email *</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control p_input" />
                  </div>
                  <div className="form-group">
                    <label>Password *</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control p_input" />
                  </div>
                  <div className="text-center">
                    {loadingbtn === false ? (
                      <button type="button" className="btn btn-primary btn-block enter-btn" onClick={getLogin}>Login</button>
                    ) : (
                      <button
                        className='btn btn-primary btn-block enter-btn' disabled>
                        <i className='fa fa-circle-o-notch fa-spin'></i>
                        Please Wait ....
                      </button>
                    )}
                  </div>
              </form>
              ) : (
                <form>
                  <div className="form-group">
                    <label>OTP *</label>
                    <input type="number" onChange={(e) => setOtp(e.target.value)} className="form-control p_input" />
                  </div>
                  <div className="text-center">
                    {otpbtn === false ? (
                      <button type="button" className="btn btn-primary btn-block enter-btn" onClick={getOtp}>Verify</button>
                    ) : (
                      <button
                        className='btn btn-primary btn-block enter-btn' disabled>
                        <i className='fa fa-circle-o-notch fa-spin'></i>
                        Please Wait ....
                      </button>
                    )}
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>

      </body>
    </>
  );
};

export default Login;