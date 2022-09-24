import React from "react";
import { Link } from "react-router-dom";

export default function IndexDesign({ products }) {
    const {
        img,
        title,
        price,
        id,
    } = products;

    return (
        <div className="flex flex-col justify-center items-center border-2 border-amber-300 rounded">
            <div className="">
                <img src={img} alt="" className="w-56" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="mt-10">{title}</h2>
                <h2 className="mt-2">{price} $</h2>
                <Link className="mb-8 mt-8" to={`/home/product/${id}`}>
                    <button className="
                    w-32
                    h-10 
                    border-2
                    border-orange-500 rounded 
                    hover:text-white
                    hover:bg-gray-900"
                    >More</button>
                </Link>
            </div>
        </div>
    );
}