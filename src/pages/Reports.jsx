import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Reports({ tickets }) {

  // Count tickets by status
  const closed = tickets.filter(t => t.status === "Closed").length;
  const open = tickets.filter(t => t.status === "Open").length;
  const pending = tickets.filter(t => t.status === "Pending").length;

  const data = {
    labels: ["Closed", "Open", "Pending"],
    datasets: [
      {
        label: "Tickets",
        data: [closed, open, pending],
        backgroundColor: [
          "#10B981", // green
          "#3B82F6", // blue
          "#F59E0B"  // orange
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Header />

        <div className="reports-container">

          <h1 className="report-title">Ticket Reports</h1>

          <div className="chart-box">
            <Pie data={data} />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;