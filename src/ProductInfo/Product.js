import { useState, useEffect, Fragment } from "react";
import { useParams } from 'react-router-dom'
import Products from "./Products";
export default function Product() {
    const [info, setInfo] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://academy-products.herokuapp.com/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => (
                setInfo(data.data)
            ))
    }, [id])


    return (
        <Fragment>
            <Products products={[info]} />
        </Fragment>);
};