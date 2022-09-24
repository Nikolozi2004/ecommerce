import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const API = "https://academy-products.herokuapp.com/api/categories";

export default function SidebarCategory() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.data)
            });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center">
            {categories.map((category) => (
                <Link
                    className="mt-14 w-4/6 flex justify-center items-center"
                    key={category.id}
                    to={`/home/category/${category.id}`}>
                    <button className="
                    mt-6 
                    w-full 
                    h-10 
                    rounded-lg 
                    text-md 
                    text-emerald-800 
                    bg-slate-100 
                    hover:text-lime-700 
                    hover:bg-emerald-200">
                    {category.title}
                    </button>

                </Link>
            ))}
        </div>
    );
};