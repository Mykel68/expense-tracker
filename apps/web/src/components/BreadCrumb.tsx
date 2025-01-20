"use client";
import { ChevronDown, Slash } from "lucide-react";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const BreadcrumbComponent = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((segment) => segment);

    return (
        <div className=" p-5 ">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/">Student</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1">
                                    <BreadcrumbLink>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </BreadcrumbLink>
                                    <ChevronDown className="h-4 w-4" />
                                </DropdownMenuTrigger>
                            </DropdownMenu>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {pathSegments.map((segment, index) => {
                                const path = "/" + pathSegments.slice(0, index + 1).join("/");
                                const isLast = index === pathSegments.length - 1;
                                return (
                                    <h4
                                        key={path}
                                        className={isLast ? "text-purple-500" : "hidden"}
                                    >
                                        {isLast ? (
                                            segment.charAt(0).toUpperCase() + segment.slice(1)
                                        ) : (
                                            <Link href={path}>
                                                {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                            </Link>
                                        )}
                                    </h4>
                                );
                            })}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbComponent;