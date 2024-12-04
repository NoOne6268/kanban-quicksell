import React from "react";
import "../styles/column.css";
import Card from "./Card.jsx";
import Add from "../assets/add.svg";
import DotMenu from "../assets/dotmenu.svg";
import getIcon from "./priority.js";
import getStatus from "./status.js";

const Column = ({ group, title, tickets, getAvailability }) => {
    const getTitleIcon = (group) => {
        if(group === "priority"){
            return getIcon(tickets[0].priority);
        } else if(group === "status"){
            return getStatus(tickets[0].status);
        } else return "https://avatar.iran.liara.run/public";
    };
  return (
    <div className="column">
      <div className="column-title">
        <div className="title">
            <img src={getTitleIcon(group)} className="title-icon" />{title}<span className="ticket-count">{tickets.length}</span>
        </div>
        <div>
          <img src={Add} alt="Add" className="icon" />
          <img src={DotMenu} alt="3 Dot Menu" className="icon" />
        </div>
      </div>
      <div className="card-list">
        {tickets.map((ticket) => (
          <Card ticket={ticket} getAvailability={getAvailability} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Column;
