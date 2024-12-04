import React from "react";
import Column from "./Column.jsx";
import "../styles/dashboard.css";

export default function DashBoard({ group, groupedTickets, getUserName, getAvailability }) {
  const getColumnNameByPriority = (priority) => {
    if(priority === "0")
        return "No priority";
    else if(priority === "1")
        return "Low";
    else if(priority === "2")
        return "Medium";
    else if(priority === "3")
        return "High";
    else if(priority === "4")
        return "Urgent";
    else return "Arbitrary";
  };

  const getColumnNameByStatus = (status) => {
    if (status === "Todo") {
      return "Todo";
    } else if (status === "In progress") {
      return "In Progress";
    } else if (status === "Backlog") {
      return "Backlog";
    } else if (status === "Done") {
      return "Done";
    } else return "Cancelled";
  };

  const getTitle = (group, groupKey) => {
    if (group === "priority") {
      return getColumnNameByPriority(groupKey);
    } else if (group === "status") {
      return getColumnNameByStatus(groupKey);
    } else return groupKey;
  };

  return (
    <div className="dashboard">
      <div className="kanban-board">
        {Object.keys(groupedTickets).map((groupKey) => (
          <Column
            key={groupKey}
            group={group}
            title={getTitle(group, groupKey)}
            tickets={groupedTickets[groupKey]}
            getUserName={getUserName}
            getAvailability={getAvailability}
          />
        ))}
      </div>
    </div>
  );
}
