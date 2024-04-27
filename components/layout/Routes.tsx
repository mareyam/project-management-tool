import { FaGithub } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { RiTeamFill } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { BiTask } from "react-icons/bi";

export const MENU_ITEMS = [
  {
    title: "Dashboard",
    icon: <TfiDashboard />,
    size: "24",
    linkTo: "/dashboard",
  },
  {
    title: "Team",
    icon: <RiTeamFill />,
    size: "24",
    linkTo: "/team",
  },
  {
    title: "Projects",
    icon: <AiOutlineProject />,
    size: "24",
    linkTo: "/projects",
  },
  { title: "Tasks", icon: <BiTask />, size: "24", linkTo: "/tasks" },
];
