Ticket Pilot 🎫

AI Customer Support Dashboard built using React.js

📌 Overview

Ticket Pilot is a modern customer support dashboard that helps users create, manage, and analyze support tickets efficiently. The project provides an interactive interface for ticket tracking, automatic priority detection, dashboard analytics, and visual reports.

This project is built using React.js with a component-based architecture and includes animations and charts for a better user experience.

🚀 Features

Create and manage support tickets
Automatic ticket priority detection
Dashboard with ticket statistics
View all tickets in table format
Pie chart reports for ticket analysis
Responsive and interactive UI
Smooth animations using Framer Motion
Navigation using React Router

🛠️ Technologies Used

React.js
React Router DOM
Chart.js
React Chartjs 2
Framer Motion
CSS3

📂 Project Structure

src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── CreateTicket.jsx
│   ├── DashboardCards.jsx
│   ├── TicketTable.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Tickets.jsx
│   ├── Reports.jsx
│
├── App.jsx
└── main.jsx

⚙️ Installation

Clone the repository:
git clone https://github.com/your-username/ticket-pilot.git

Go to project directory:
cd ticket-pilot

Install dependencies:
npm install

Run the project:
npm run dev

🧠 AI Logic Used

The project uses a simple rule-based AI logic to automatically assign ticket priority.

High Priority → urgent, error
Medium Priority → slow
Low Priority → default

Example:

if (issue.toLowerCase().includes("urgent")) {
  priority = "High";
}


📊 Reports & Analytics

The Reports section visualizes ticket data using Pie Charts powered by Chart.js.
It displays:

Open Tickets
Pending Tickets
Closed Tickets

🎯 Future Improvements

Backend integration with Node.js / Firebase
Database storage
Authentication system
AI chatbot integration
Email notifications
Real-time ticket updates

👩‍💻 Author

Shravani Ekre

📄 License

This project is created for educational and learning purposes.
