import React, { useState, useEffect } from "react";
import moment from "moment";
import "../assets/import.css";
import { GET_PROFILE } from "../request/apirequest";

moment().format();

const Home = (props) => {
  const [profile, setProfile] = useState("");

  const datenow = moment();

  const fetchProfile = async () => {
    GET_PROFILE().then(async (res) => {
      if (res.statuscode === 1) {
        setProfile(res.data);
      }
    });
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Dashboard </h1>
            </div>
          </div>
        </div>
      </section>

      <section class="content">
        <div class="container-fluid">
          <div class="card card-primary ">
            <div class="card-body p-4">
              <h3>Good Morning, {profile.name}</h3>
              <h5 className="text-muted">
                {" "}
                {moment(new Date()).format("DD MMMM YYYY")}{" "}
              </h5>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="callout callout-danger p-4">
                <h1>100</h1>
                <h5>Tasks</h5>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="callout callout-danger p-4">
                <h1>100</h1>
                <h5>Tasks</h5>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="callout callout-danger p-4">
                <h1>100</h1>
                <h5>Tasks</h5>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="callout callout-danger p-4">
                <h1>100</h1>
                <h5>Tasks</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">To Do Tasks</h3>
            </div>

            <div class="card-body table-responsive p-0">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span class="tag tag-success">Approved</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>Alexander Pierce</td>
                    <td>11-7-2014</td>
                    <td>
                      <span class="tag tag-warning">Pending</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>657</td>
                    <td>Bob Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span class="tag tag-primary">Approved</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>Mike Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span class="tag tag-danger">Denied</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Responsive Hover Table</h3>
            </div>

            <div class="card-body table-responsive p-0">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span class="tag tag-success">Approved</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>Alexander Pierce</td>
                    <td>11-7-2014</td>
                    <td>
                      <span class="tag tag-warning">Pending</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>657</td>
                    <td>Bob Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span class="tag tag-primary">Approved</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>Mike Doe</td>
                    <td>11-7-2014</td>
                    <td>
                      <span class="tag tag-danger">Denied</span>
                    </td>
                    <td>
                      Bacon ipsum dolor sit amet salami venison chicken flank
                      fatback doner.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
