import { useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CreateTicket from "../components/CreateTicket";

function Dashboard({ tickets, setTickets }) {

  const [search, setSearch] = useState("");

  const latestTicket = tickets[tickets.length - 1];

  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Header search={search} setSearch={setSearch} />

        {/* Page Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ticket Dashboard
        </motion.h1>

        {/* Create Ticket Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CreateTicket tickets={tickets} setTickets={setTickets} />
        </motion.div>

        {/* Latest Ticket Animation */}

        {latestTicket && (
          <motion.div
            className="latest-ticket"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h2>Latest Ticket</h2>

            <div className="ticket-box">

              <p><b>ID:</b> {latestTicket.id}</p>
              <p><b>Title:</b> {latestTicket.title}</p>
              <p><b>Issue:</b> {latestTicket.issue}</p>
              <p><b>Status:</b> {latestTicket.status}</p>
              <p><b>Priority:</b> {latestTicket.priority}</p>

            </div>

          </motion.div>
        )}

      </div>

    </div>
  );
}

export default Dashboard; 