import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Reports from "./pages/Reports";

function App() {

  const [tickets, setTickets] = useState(
    JSON.parse(localStorage.getItem("tickets")) || []
  );

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Dashboard
            tickets={tickets}
            setTickets={setTickets}
          />
        }
      />
      <Route path="/tickets"
      element={<Tickets tickets={tickets} setTickets={setTickets}/>
      }
      />

      <Route
        path="/reports"
        element={<Reports tickets={tickets} />}
      />

    </Routes>
  );
}

export default App;