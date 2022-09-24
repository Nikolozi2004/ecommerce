import { Fragment } from "react";
import ProductDesign from "./ProductDesign";

export default function Products({ products }) {
    return (
        <Fragment>
            {products.map((index, id) => (
                <div className="w-5/6 h-full mt-20" key={id}>
                    <ProductDesign products={index} />
                </div>
            ))}
        </Fragment>
    );
}