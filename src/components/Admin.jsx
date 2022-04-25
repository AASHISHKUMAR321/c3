import axios from "axios";
import { useState } from "react";

export const Admin = () => {
  const [employ, setEmploy] = useState({});

  const adminHandle = (e) => {
    const { name, value } = e.target;
    setEmploy({ ...employ, [name]: value });
  };
  console.log(employ);
  return (
    <form
      className="createEmployee"
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .post(`http://localhost:8080/employee`, employ)
          .then((data) => console.log(data));
      }}
    >
      <input
        type="text"
        placeholder="Employee Name"
        name="employee_name"
        onChange={adminHandle}
      />
      <input
        type="text"
        placeholder="Employee id"
        name="employee_id"
        onChange={adminHandle}
      />
      <select name="title" onChange={adminHandle}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        onChange={adminHandle}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        onChange={adminHandle}
      />
      <input
        type="text"
        placeholder="User Name"
        name="username"
        onChange={adminHandle}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={adminHandle}
      />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={adminHandle}
      />
      <select name="status" id="status" onChange={adminHandle}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={adminHandle}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
