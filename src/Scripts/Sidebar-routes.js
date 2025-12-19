import { LayoutDashboard, Book, Users, GraduationCap, MessageCircle} from "lucide-react";
import { FaSchool } from "react-icons/fa";


const StudentsRoute = [
    {
    id: '1', 
    name: "Dashboard", 
    route: "/student-dashboard", 
    icon:LayoutDashboard,
},

{
    id: '2', 
    name: "Grades", 
    route: "/student-grades", 
    icon:GraduationCap,
},
{
    id: '3', 
    name: "Courses", 
    route: "/student-courses", 
    icon:Book,
},
{
    id: '4', 
    name: "Complaints", 
    route: "/student-complaints", 
    icon:MessageCircle,
},
];

const adminRoute = [
    {id: '1', 
    name: "Dashboard", 
    route: "/admin-dashboard", 
    icon:LayoutDashboard,
    },
    {
        id: "2",
        name: "Courses",
        route: "/admin-courses",
        icon: Book,
    },

    {
        id:'3',
        name: "Users",
        route: "/admin-users",
        icon: Users
    },
];

const lecturerRoute = [
    {
     id:'1',
     name: "Dashboard",
     route:"/lecturer-dashboard",
     icon: LayoutDashboard
    },
    {
        id:'2',
        name: "Courses",
        route: "/lecturer-courses",
        icon: Book,
    },
    {
        id:'3',
        name: "students",
        route: "/lecturer-students",
        icon: Users
    },
    {
        id:'4',
        name: "Score",
        route: "/lecturer-score",
        icon: FaSchool
    },
];

export {StudentsRoute, adminRoute,lecturerRoute};