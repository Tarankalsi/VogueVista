
import { useState } from "react";
import CarouselItem from "./CarouselItem";

const images = [
    "https://res.cloudinary.com/daygfelat/image/upload/v1720697802/AC_CO___ALTINYILDIZ_CLASSICS_Camiseta_b%C3%A1sica_-_Slim_Fit_Plain_T-Shirt_fmahai.jpg",
    "https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Oversized_Extended_Neck_T-shirt___boohooMAN_USA_ezkbr5.jpg",
    "https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Light_Brown_3-Piece_Men_s_Suit_-_Tailored_Modern_Elegance_for_Business_Events_Premium_Men_s_Wedding_Suit_-_Tailored_Fit_md0z27.jpg",
    "https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Manfinity_Hypemode_Loose_Fit_Men_s_Slogan_Graphic_Cargo_Pants_With_Grommet_Detail_Flap_Pockets_And_Drawstring_Closure_hodeuc.jpg",
    "https://shorturl.at/p8qLL"
];

export default function GalleryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-bigCardHeight overflow-hidden  ">
                {images.map((image, index) => (
                    <CarouselItem key={index} image_url={image} isActive={index === currentIndex} />
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex  -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-brown-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-brown-2 dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
