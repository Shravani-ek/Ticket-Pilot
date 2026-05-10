function DashboardCards({ tickets }) {

  const open = tickets.filter(t => t.status === "Open").length;
  const pending = tickets.filter(t => t.status === "Pending").length;
  const closed = tickets.filter(t => t.status === "Closed").length;

  return (

    <div className="cards">

      <div className="card">
        <h2>{open}</h2>
        <p>Open Tickets</p>
      </div>

      <div className="card">
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>

      <div className="card">
        <h2>{closed}</h2>
        <p>Closed</p>
      </div>

    </div>

  );
}

export default DashboardCards;