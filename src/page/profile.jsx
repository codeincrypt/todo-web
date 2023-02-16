import React, { useState, useEffect } from "react";
import "../assets/import.css";
import { GET_PROFILE } from "../request/apirequest";

const Profile = (props) => {
  // eslint-disable-next-line
  const [profile, setProfile] = useState("");

  const fetchProfile = async () => {
    GET_PROFILE().then(async (res) => {
      if (res.statuscode === 1) {
        
      }
    });
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
                <div class="col-md-3">
                  <div class="card card-primary card-outline">
                    <div class="card-body box-profile">
                      <div class="text-center">
                        {/* <img class="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture"> */}
                      </div>
                      <h3 class="profile-username text-center">
                        Nina Mcintire
                      </h3>
                      <p class="text-muted text-center">Software Engineer</p>
                      <ul class="list-group list-group-unbordered mb-3">
                        <li class="list-group-item">
                          <b>Followers</b> <a class="float-right">1,322</a>
                        </li>
                        <li class="list-group-item">
                          <b>Following</b> <a class="float-right">543</a>
                        </li>
                        <li class="list-group-item">
                          <b>Friends</b> <a class="float-right">13,287</a>
                        </li>
                      </ul>
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
