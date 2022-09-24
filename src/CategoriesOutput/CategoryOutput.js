import { useParams } from 'react-router-dom';
import IndexList from "../IndexOutput/IndexList";
import { Fragment, useEffect, useState } from 'react';
export default function CategoryOutput() {
    const [catoutput, setCatOutPut] = useState([]);
    const params = useParams();


    useEffect(() => {
        fetch(`https://academy-products.herokuapp.com/api/products/category/${params.id}`)
            .then((res) => res.json())
            .then((data) => (
                setCatOutPut(data.data)
            ));

    }, [params.id]);

    return (
        <Fragment>
            <IndexList list={catoutput} />
        </Fragment>
    );
};