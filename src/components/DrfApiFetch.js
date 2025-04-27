import React, { useState, useEffect } from "react";
import axios from "axios";

const DrfApiFetch = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: "Token dc149fe76d0b9e793efc783e0ae463de760a59ab",
        },
      })
      .then((res) => {
        setTasks(res.data);
      });
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrfApiFetch;
