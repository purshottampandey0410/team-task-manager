import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/tasks", {
      headers: { authorization: token }
    })
    .then(res => setTasks(res.data))
    .catch(() => alert("Error loading tasks"));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {tasks.map(task => (
        <p key={task._id}>
          {task.title} - {task.status}
        </p>
      ))}
    </div>
  );
}