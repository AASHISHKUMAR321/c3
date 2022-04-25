import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState({
    totalEmployees: 0,
    totalTerminated: 0,
    totalPromoted: 0,
    totalNew: 0,
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/employee`).then((data) =>
      setDashboard({
        ...dashboard,
        totalEmployees: Object.keys(data.data).length,
      })
    );
  }, []);
  // console.log(dashboard);
  return (
    <DashboardContext.Provider value={{ dashboard }}>
      {children}
    </DashboardContext.Provider>
  );
};
