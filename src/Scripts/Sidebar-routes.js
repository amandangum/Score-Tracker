import { LayoutDashboard, Book, Users, GraduationCap} from "lucide-react";


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
}
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
    }
];

export {StudentsRoute, adminRoute,lecturerRoute};
