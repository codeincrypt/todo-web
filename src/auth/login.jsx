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
        localStorage.setItem('todoemployeedetails', res.data);
        dispatch({ type: 'TODOUSER', payload: res.data.token });
        window.location.replace('/home')
      } else {
        showAlert('danger', res.message)
        setOtpbtn(false);
      }
    })
  }

  useEffect(() => {
    if (localStorage.getItem("todoemployee")) {
      window.location.href = '/home'
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <body class="hold-transition login-page">
        <div class="login-box">
          <div class="login-logo">
            <b>Admin </b> <br /> 
          </div>

          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Sign in to start your session</p>
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