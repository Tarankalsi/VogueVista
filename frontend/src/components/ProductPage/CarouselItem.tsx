


export default function CarouselItem({ image_url, isActive } :  {image_url : string , isActive : boolean}) {
    return (
        <div className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`} data-carousel-item>
            <img src={image_url} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    );
}
