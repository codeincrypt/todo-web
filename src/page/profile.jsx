import React, { useState, useEffect } from "react";
import "../assets/import.css";
import { GET_PROFILE } from "../request/userrequest";

const Profile = (props) => {
  // eslint-disable-next-line
  const [profile, setProfile] = useState("");

  const fetchProfile = async () => {
    const res = await GET_PROFILE()
    if (res.statuscode === 1) {
      setProfile(res.data);
    }
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Profile</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="card card-success card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img
                        className="profile-user-img img-fluid img-circle"
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="User profile"
                      />
                    </div>
                    <h3 className="profile-username text-center">{profile.name}</h3>
                    <p className="text-muted text-center">{profile.employeeid}</p>
                    <ul className="list-group list-group-unbordered mb-3">
                      <li className="list-group-item">
                        <b>Contact</b>
                        <span className="float-right"> {profile.mobile} </span>
                      </li>
                      <li className="list-group-item">
                        <b>Email</b>
                        <span className="float-right"> {profile.email} </span>
                      </li>
                      <li className="list-group-item">
                        <b>Email</b>
                        <span className="float-right"> {profile.email} </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="card card-success card-outline">
                <div className="card-header">
                    <h3 className="card-title text-uppercase font-weight-bold">Personal Details</h3>
                  </div>
                  <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 mt-4">
                      <div className="title">Blood Group</div>
                      <div className="title-value">-</div>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="title">Date of Birth</div>
                      <div className="title-value">-</div>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="title">Nationality</div>
                      <div className="title-value">-</div>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="title">Marital Status</div>
                      <div className="title-value">-</div>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="title">Nationality</div>
                      <div className="title-value">-</div>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="title">Place of Birth</div>
                      <div className="title-value">-</div>
                    </div>
                  </div>
                  </div>
                </div>

                <div className="card card-success card-outline">
                  <div className="card-header">
                    <h3 className="card-title text-uppercase font-weight-bold">Address</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 mt-4">
                        <div className="title">Address</div>
                        <div className="title-value">-</div>
                      </div>
                      <div className="col-md-4 mt-4">
                        <div className="title">Area/City</div>
                        <div className="title-value">-</div>
                      </div>
                      <div className="col-md-4 mt-4">
                        <div className="title">Locality</div>
                        <div className="title-value">-</div>
                      </div>
                      <div className="col-md-4 mt-4">
                        <div className="title">District</div>
                        <div className="title-value">-</div>
                      </div>
                      <div className="col-md-4 mt-4">
                        <div className="title">State</div>
                        <div className="title-value">-</div>
                      </div>
                      <div className="col-md-4 mt-4">
                        <div className="title">Pincode</div>
                        <div className="title-value">-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
