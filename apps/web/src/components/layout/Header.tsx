import React from "react";
import Breadcrumb from "@/components/BreadCrumb";
import UserItem from "@/components/UserItem";

const Header = () => {
    return (
        <div>
            <div className="bg-[#4e0148]  px-3 py-3 h-[70px]  ">
                <div className="float-end ">
                    <UserItem />
                </div>
            </div>
            <Breadcrumb />
        </div>
    );
};

export default Header;