import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      {page === "login" && <Login setPage={setPage} />}
      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;