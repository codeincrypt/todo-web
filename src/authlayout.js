import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

const MainLayout = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    const admin = localStorage.getItem("todoemployee");
    if (admin) {
      history.push("/emp");
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
