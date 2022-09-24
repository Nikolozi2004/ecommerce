import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Fragment>
            <div className="w-full h-full flex justify-evenly items-center">
                <h1
                    className="font-medium mb-20 text-7xl bg-red-500 p-5 rounded-lg text-gray-300">
                    Page Not Found
                </h1>
                <Link to={'/home'}>
                    <h2
                        className="
                    font-medium 
                    mb-20 text-7xl
                    bg-red-500 p-5 rounded-lg
                    text-gray-300
                    hover:bg-red-300
                    hover:text-gray-50"
                    >Go Home</h2>
                </Link>
            </div>
        </Fragment>
    );
}