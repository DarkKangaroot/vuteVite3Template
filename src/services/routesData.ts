import type { IRoutes } from '@/interface/IRoutes';

const routes: Array<IRoutes> = [
    {
        title: "Home",
        icon: "mdi-home",
        route: "/",
        subRoute: []
    },
    {
        title: "Project",
        icon: "mdi-calendar-blank-outline",
        route: "/Project",
        subRoute: []
    },
    {
        title: "Activity Table",
        icon: "mdi-briefcase-clock",
        route: "/ActivityTable",
        subRoute: []
    },
    {
        title: "Task Board",
        icon: "mdi-calendar-blank-outline",
        route: "/TaskBoard",
        subRoute: []
    },
    // {
    //     title: "File Setup",
    //     icon: "mdi-cog-outline",
    //     route: "/",
    //     subRoute: [
    //         {
    //             title: "Company Info",
    //             icon: "mdi-domain",
    //             route: "/CompanyInfo"
    //         },
    //     ]
    // }
];

export default routes;
