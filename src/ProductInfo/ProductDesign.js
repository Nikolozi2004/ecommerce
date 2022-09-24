export default function ProductDisign({ products }) {
    const { title, img, price } = products
    return (
        <div className="flex h-full">
            <div className="flex justify-center h-2/4 w-1/2">
                <img className="" src={img} alt="" />
            </div>
            <div className="w-1/2">
                <div className="mt-20">
                    <h2>Brand: {products.brand}</h2>
                    <h2>Name: {title}</h2>
                    <h2 className="mt-10">Specs:</h2>
                    <h2>Rate: {products.spec?.rate}</h2>
                    <h2>Core: {products.spec?.type}</h2>
                    <h2>Display: {products.spec?.dpType}</h2>
                    <h2>SSD : {products.spec?.ssd}</h2>
                    <h2>Price: {price}$</h2>
                </div>
            </div>
        </div>
    )
}