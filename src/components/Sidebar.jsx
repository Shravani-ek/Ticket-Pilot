import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>SupportDesk</h2>

      <ul>

        <li>
          <NavLink to="/" className="nav-link">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/tickets" className="nav-link">
            Tickets
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports" className="nav-link">
            Reports
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;