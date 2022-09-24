import IndexDesign from "./IndexDesign";

export default function IndexList({ list }) {
    return (
        <div className='w-5/6 overflow-auto flex flex-wrap'  >
            {list.map((index, id) => (
                <div key={id} className="w-1/2">
                    <IndexDesign products={index} />
                </div>
            ))}
        </div>
    );
};