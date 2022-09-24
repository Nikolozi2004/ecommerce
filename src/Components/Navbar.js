import { Link } from "react-router-dom";
import ecommimage from "../images/ecomm.jpg"

export default function Navbar() {
    return (
        <div className="h-120 h-24 flex justify-between border-b-2 pb-5 border-stone-700 items-center">
            <Link to={'/home'}>
                <img
                    className="rounded bg-slate-600 h-24"
                    src={ecommimage}
                    alt=""
                />
            </Link>
            <ul className="h-2/3 w-2/3 flex justify-center items-center">
                <Link className="text-lg flex justify-center items-center bg-orange-300 w-1/4 h-2/3 rounded-lg hover:bg-orange-400" to={'/home'}>
                    <li className="text-lg flex justify-center items-center">Home</li>
                </Link>
            </ul>
            <Link className="h-2/3 p-2 bg-blue-300 text-white rounded-lg flex justify-center items-center" to={'/register'}>
                Sign Up
            </Link>
            <Link className="h-2/3 p-2 bg-blue-300 text-white rounded-lg flex justify-center items-center mr-5" to={'/login'}>
                Log In
            </Link>

        </div>
    );
}