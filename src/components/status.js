import Todo from "../assets/To-do.svg";
import InProgress from "../assets/in-progress.svg";
import Done from "../assets/Done.svg";
import Cancelled from "../assets/Cancelled.svg";
import Backlog from"../assets/Backlog.svg";

export default function getStatus(status){
    if(status === "Todo"){
        return Todo;
    } else if(status === "In progress" || status === "In Progress"){
        return InProgress;
    } else if(status === "Backlog"){
        return Backlog;
    } else if(status === "Done"){
        return Done;
    } else return Cancelled;
}