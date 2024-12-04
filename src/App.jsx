import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar.jsx";
import "./styles/app.css";
import DashBoard from "./components/DashBoard.jsx";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  useState(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  
  const [grouping, setGrouping] = useState(
    () => localStorage.getItem("group") || "user"
  );
  const [sortOption, setSortOption] = useState(
    () => localStorage.getItem("order") || "priority"
  );

  const getAvailability = (userId) => {
    return users.find((user) => {
      return user.id === userId;
    }).available;
  };

  useEffect(() => {
    
  }, []);

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  const groupTickets = (tickets, grouping) => {
    return tickets.reduce((groups, ticket) => {
      const groupKey =
        grouping === "user" ? getUserName(ticket.userId) : ticket[grouping];
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(ticket);
      return groups;
    }, {});
  };

  const sortTickets = (tickets, option) => {
    if (option === "priority") {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (option === "title") {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedTickets = groupTickets(tickets, grouping);
  Object.keys(groupedTickets).forEach(
    (key) =>
      (groupedTickets[key] = sortTickets(groupedTickets[key], sortOption))
  );

  return (
    <>
      <NavBar setGroup={setGrouping} setOrder={setSortOption} />
      <DashBoard
        group={grouping}
        groupedTickets={groupedTickets}
        getUserName={getUserName}
        getAvailability={getAvailability}
      />
    </>
  );
}

export default App;
