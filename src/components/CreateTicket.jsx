import { useState } from "react";

function CreateTicket({ tickets, setTickets }) {

  const [title, setTitle] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !issue) return;

    // Auto detect priority
    let priority = "Low";
    if (issue.toLowerCase().includes("urgent") || issue.toLowerCase().includes("error")) {
      priority = "High";
    } else if (issue.toLowerCase().includes("slow")) {
      priority = "Medium";
    }

    const newTicket = {
      id: Date.now(),
      title: title,
      issue: issue,
      status: "Open",
      priority: priority
    };

    setTickets([...tickets, newTicket]);

    setTitle("");
    setIssue("");
  };

  return (
    <div className="create-ticket">

      <h2>Create Ticket</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Ticket Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Describe your issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <button type="submit">Raise Ticket</button>

      </form>

    </div>
  );
}

export default CreateTicket;