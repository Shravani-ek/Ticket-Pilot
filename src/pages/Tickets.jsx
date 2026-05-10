import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import TicketTable from "../components/TicketTable";
import { motion } from "framer-motion";

function Tickets({ tickets }) {

  const totalTickets = tickets.length;

  return (
    <div className="layout">

      <Sidebar />

      <motion.div
        className="main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <motion.h1 
          className="page-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Tickets
        </motion.h1>

        {/* Total Tickets Raised */}
        <motion.div
          className="ticket-summary"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="ticket-count-box">
            <h3>Total Tickets Raised</h3>
            <p>{totalTickets}</p>
          </div>
        </motion.div>

        {/* Ticket Cards */}
        <motion.div
          className="cards-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <DashboardCards tickets={tickets} />
        </motion.div>

        {/* All Tickets Table */}
        <motion.div
          className="tickets-table-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2>All Tickets</h2>
          <TicketTable tickets={tickets} />
        </motion.div>

      </motion.div>

    </div>
  );
}

export default Tickets;