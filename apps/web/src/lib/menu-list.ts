import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
} from "lucide-react";
import { MdOutlinePayments } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { TbClearAll } from "react-icons/tb";

type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: any;
    submenus: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
    return [
        {
            groupLabel: "",
            menus: [
                {
                    href: "/dashboard",
                    label: "Dashboard",
                    active: pathname.includes("/dashboard"),
                    icon: LayoutGrid,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Student",
            menus: [
                {
                    href: "",
                    label: "Payment",
                    active: pathname.includes("/payment"),
                    icon: MdOutlinePayments,
                    submenus: [
                        {
                            href: "/payment",
                            label: "Pay bills",
                            active: pathname === "/payment",
                        },
                        {
                            href: "/payment/eWallet",
                            label: "eWallet",
                            active: pathname === "/payment/eWallet",
                        },
                        {
                            href: "/payment/receipt",
                            label: "Receipt",
                            active: pathname === "/payment/receipt",
                        },
                        {
                            href: "/payment/transaction_history",
                            label: "Transaction History",
                            active: pathname === "/payment/transaction_history",
                        },
                    ],
                },
            ],
        },
        {
            groupLabel: "",
            menus: [
                {
                    href: "",
                    label: "Registration",
                    active: pathname.includes("/registration"),
                    icon: SquarePen,
                    submenus: [
                        {
                            href: "/registration/",
                            label: "Course Registration",
                            active: pathname === "/registration",
                        },
                        {
                            href: "/registration/registered_courses",
                            label: "Registered Courses",
                            active: pathname === "/registration/registered_courses",
                        },
                        {
                            href: "/registration/examination_docket",
                            label: "Examination Docket",
                            active: pathname === "/registration/examination_docket",
                        },
                        {
                            href: "/registration/available_courses",
                            label: "List of Available Courses",
                            active: pathname === "/registration/available_courses",
                        },
                    ],
                },
            ],
        },
        {
            groupLabel: "",
            menus: [
                {
                    href: "",
                    label: "Results",
                    active: pathname.includes("/results"),
                    icon: GiNotebook,
                    submenus: [
                        {
                            href: "/results",
                            label: "Semester Results",
                            active: pathname === "/results",
                        },
                        {
                            href: "/results/ca_results",
                            label: "CA Results",
                            active: pathname === "/results/ca_results",
                        },
                    ],
                },
            ],
        },
        {
            groupLabel: "",
            menus: [
                {
                    href: "",
                    label: "Clearance",
                    active: pathname.includes("/clearance"),
                    icon: TbClearAll,
                    submenus: [
                        {
                            href: "/clearance",
                            label: "Semester Clearance",
                            active: pathname === "/clearance",
                        },
                        {
                            href: "/clearance/ca_results",
                            label: "Final Clearance",
                            active: pathname === "/final",
                        },
                    ],
                },
            ],
        },
        {
            groupLabel: "Settings",
            menus: [
                {
                    href: "/profile",
                    label: "Profile",
                    active: pathname.includes("/profile"),
                    icon: Users,
                    submenus: [],
                },
                {
                    href: "/account",
                    label: "Account",
                    active: pathname.includes("/account"),
                    icon: Settings,
                    submenus: [],
                },
            ],
        },
    ];
}