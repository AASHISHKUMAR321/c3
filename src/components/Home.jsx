import { useContext } from "react";
import { DashboardContext } from "./context/DashboardContext";

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  const { dashboard } = useContext(DashboardContext);
  console.log(dashboard);
  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees:{" "}
          <span className="totalemp">{dashboard.totalEmployees}</span>
        </div>
        <div>
          Total Terminated:{" "}
          <span className="total_terminated">{dashboard.totalTerminated}</span>
        </div>
        <div>
          Total Promoted:{" "}
          <span className="total_promoted">{dashboard.totalPromoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{dashboard.totalNew}</span>
        </div>
      </div>
    </>
  );
};
