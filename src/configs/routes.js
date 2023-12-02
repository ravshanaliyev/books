import { lazy } from "react";

export const authRoutes = [
    {
        key: "register",
        path: "/register",
        component: lazy(() => import('../pages/auth/Register'))
    },
    {
        key: "login",
        path: "/login",
        component: lazy(() => import('../pages/auth/Login'))
    }
];
export const protectedRoutes = [
    {
        key: "home",
        path: "/",
        role: ["admin", "user"],   
        component: lazy(() => import('../pages/private/Home'))
    },
    {
        key: "books",
        path: "/books",
        role: ["admin", "user"],
        component: lazy(() => import('../pages/private/Books'))
    },
    {
        key: "profile",
        path: "/profile",
        role: ["admin", "user"],
        component: lazy(() => import('../pages/private/profile/Profile'))
    },
    {
        key: "settings",
        path: "/settings",
        role: ["admin", "user"],
        component: lazy(() => import('../pages/private/profile/Settings'))
    },
    {
        key: "security",
        path: "/security",
        role: ["admin", "user"],
        component: lazy(() => import('../pages/private/profile/Security'))
    },
    {
        key: "create-book",
        path: "/create-book",
        role: ["admin"],
        component: lazy(() => import('../pages/private/create/CreateBook'))
    },
    {
        key: "create-author",
        path: "/create-author",
        role: ["admin"],
        component: lazy(() => import('../pages/private/create/CreateAuthor'))
    }
];