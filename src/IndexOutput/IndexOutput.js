import { Fragment, useEffect, useState } from "react";
import IndexList from "./IndexList";
const Products = "http://academy-products.herokuapp.com/api/products";
export default function IndexOutput() {
    const [productsCard, setProductsCard] = useState([]);

    useEffect(() => {
        try {
            fetch(Products)
                .then((res) => res.json())
                .then(product => (
                    setProductsCard(product.data)
                ))
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Fragment>
            <IndexList list={productsCard} />
        </Fragment>
    );
} 