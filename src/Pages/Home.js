import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar";
export default function Home() {
    return (
        <Fragment>
            <Navbar />
            <div className="flex w-full h-full">
                <Sidebar />
                <Outlet />

            </div>
        </Fragment>
    );
}