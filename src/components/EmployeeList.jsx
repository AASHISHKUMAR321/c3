import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee`)
      .then((data) => setUser(data.data));
  }, []);
  console.log(user);
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}

      {user.map((e) => (
        <Link to={`/employees/${e.id}`}>
          <div className="employee_card">
            <img className="employee_image" src={e.image} />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
