import None from "../assets/No-priority.svg";
import Low from "../assets/Img - Low Priority.svg";
import Med from "../assets/Img - Medium Priority.svg";
import High from "../assets/Img - High Priority.svg";
import Urgent from"../assets/SVG - Urgent Priority colour.svg";
import UrgentGrey from "../assets/SVG - Urgent Priority grey.svg";

export default function getIcon(priority){
    switch (priority) {
        case 0:
            return None;
        case 1:
            return Low;
        case 2:
            return Med;
        case 3:
            return High;
        case 4:
            return Urgent;
        default:
            return UrgentGrey;
    }
}