import { Link } from "react-router-dom";


export default function CollectionCard({ category, img_url }: { category: string, img_url: string }) {
  return (
    <Link to={'/collections/item'}>
        <div className="group inline-block my-2 ">
        <div className="overflow-hidden">
            <img 
                className="h-48 w-32 md:h-72 md:w-56 lg:h-bigCardHeight  lg:w-96 transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
                src={img_url} 
                alt={category} 
            />
        </div>
        <h5 className="font-semibold text-brown-3 mt-2">{category}</h5>
    </div>
    </Link>
  )
}
