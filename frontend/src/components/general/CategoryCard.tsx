import { Link } from "react-router-dom";


export default function CategoryCard({ category, img_url }: { category: string, img_url: string }) {
    return (
        <Link to={'/collections/item'} className="group inline-block my-2 ">
        <div className="overflow-hidden">
            <img 
                className="h-48 w-32 md:h-72 md:w-56 lg:h-96 lg:w-72 transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
                src={img_url} 
                alt={category} 
            />
        </div>
        <h5 className="font-semibold text-brown-3 mt-2">{category}</h5>
    </Link>
    )
}
