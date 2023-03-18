import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

const MainLayout = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("todoemployee") && localStorage.getItem("usertype") === "EMPLOYEE") {
      history.push("/emp");
    }
    if (localStorage.getItem("todoemployee") && (localStorage.getItem("usertype") === "SUPERADMIN" || localStorage.getItem("usertype") === "ADMIN")) {
      history.push("/admin");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {children}
    </>
  );
};

export default MainLayout;
