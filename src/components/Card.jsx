import React from "react";
import getIcon from "./priority";
import "../styles/card.css";
import getStatus from "./status";

const priority = [
  "../assets/No-priority.svg",
  "../assets/Img - Low Priority.svg",
  "../assets/Img - Medium Priority.svg",
  "../assets/Img - High Priority.svg",
  "../assets/SVG - Urgent Priority colour.svg",
  "../assets/SVG - Urgent Priority grey.svg",
];

const Card = ({ group, ticket, getAvailability }) => {
  const isAvailable = getAvailability(ticket.userId);
  return (
    <div className="card" key={ticket.id}>
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        {group !== "user" && (
          <div className="relative">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="User Avatar"
              className="avatar"
            />
            <span
              className={`status-indicator ${
                isAvailable ? "status-available" : "status-unavailable"
              }`}
            />
          </div>
        )}
      </div>
      <div className="card-title">
        {group !== "status" && (
          <img
            src={getStatus(ticket.status)}
            alt={ticket.status}
            className="status-img-title"
          />
        )}
        {ticket.title}
      </div>
      <div className="card-footer">
        <span className="badge icon">
          <img src={getIcon(ticket.priority)} />
        </span>
        <span className="badge text">
          <img
            src={getStatus(ticket.status)}
            className="status-img"
            alt={ticket.st}
          />
          {ticket.tag.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default Card;
