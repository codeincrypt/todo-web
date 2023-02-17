import React, { useState, useEffect } from "react";
import "../assets/import.css";
import { GET_TODOLIST } from "../request/apirequest";

const Tasks = (props) => {
  // eslint-disable-next-line
  const [profile, setProfile] = useState("");

  const fetchProfile = async () => {
    GET_TODOLIST().then(async (res) => {
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
                <h1>To Do List</h1>
              </div>
            </div>
          </div>
        </section>
        <section class="content">
        <div class="card">
          <div class="container-fluid">
            <table class="table table-bordered table-striped">
              <thead class="">
                <th>ID</th>
                <th>TASK</th>
                <th>TYPE</th>
                <th>TEAM</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </thead>
            </table>
          </div>
        </div>
        </section>
    </>
  );
};

export default Tasks;
