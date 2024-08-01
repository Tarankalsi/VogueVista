import { useEffect, useRef, useState } from "react";

import Banner from "../components/general/Banner"
import Navbar from "../components/general/Navbar"
import CategoryCard from "../components/general/CategoryCard";
import Certificate from "../components/general/Certificate";
import Footer from "../components/general/Footer";
import { useRecoilValue } from "recoil";
import { openMenuAtom } from "../store/atoms/uiAtom";
import { Link } from "react-router-dom";





function HomePage() {

    const [hover, setHover] = useState(true)
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);
    const openMenu = useRecoilValue(openMenuAtom)

 


    useEffect(() => {

        const handleScroll = () => {
            const bannerHeight = bannerRef.current ? bannerRef.current.offsetHeight : 0;

            if (window.scrollY > bannerHeight) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }

            if (window.scrollY === 0) {
                setHover(true);
            } else {
                setHover(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="font-kalra">
            <div ref={bannerRef} className="relative z-20">
                {openMenu === "hidden"?<Banner /> : ""}
            </div>

           
            <div className="relative h-screen overflow-hidden bg-black">
                <div className="video-overlay"></div>
                <video className="sm:visible invisible absolute top-0 left-0 w-full h-full object-cover opacity-60" autoPlay loop muted>
                    <source src="https://res.cloudinary.com/daygfelat/video/upload/7fdc2d17d48d427898d467070dda94eb.HD-1080p-4.8Mbps-28885643_knsejo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video className="visible sm:invisible absolute top-0 left-0  h-full w-full object-cover opacity-60" autoPlay loop muted>
                    <source src="https://res.cloudinary.com/daygfelat/video/upload/35b9913e0c3c4c34acc16d87be21d356.HD-1080p-4.8Mbps-28886763_mqduqt.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative z-20">
                    <Navbar hover={hover} fixed={isNavbarFixed}  />
                </div>

                <div className={`${openMenu === "hidden" ? "absolute" : "hidden"} z-10 flex items-center bottom-5 justify-center h-full left-1/2 transform -translate-x-1/2 -top-20 sm:-top-10 md:-top-8 lg:top-10`}>
                    <Link to={'/collections'} className="px-5 py-3 border-2 border-primary text-primary font-semibold text-sm hover:bg-white hover:bg-opacity-20 hover:transition duration-300">
                        SHOP NOW
                    </Link>
                </div>
            </div>
            <div className="text-brown-3 font-semibold text-center">
                WHERE QUALITY MEETS COLOUR
            </div>

            <div className="mx-8 my-16 ">
                <h3 className="text-3xl font-semibold text-center text-brown-4 mx-2">OUR PRODUCTS</h3>
             
                    
                <div className="flex  gap-4  lg:gap-6 justify-center  flex-wrap">
                    <CategoryCard category="Slim Fit T-Shirt" img_url="http://surl.li/rensfz"/>
                    <CategoryCard category="OverSized T-Shirt" img_url="http://surl.li/puntin"/>
                    <CategoryCard category="Men Suits" img_url="http://surl.li/crxyqz"/>
                    <CategoryCard category="Cargo" img_url="http://surl.li/udpcvg"/>
                    
                    <CategoryCard category="Jeans" img_url="http://surl.li/xhfawf"/>
                    <CategoryCard category="Sunglasses" img_url="http://surl.li/pvvnqv"/>
           
                </div>
                
              
            </div>
            <div className="flex justify-center flex-wrap mx-2 md:mx-4 py-2 pb-10 md:py-10">
                <Certificate logo={"http://surl.li/uclycw"} heading="FREE SHIPPING" detail="STANDARD DELIVERY 5-7 WORKING DAYS"/>
                <Certificate logo={"http://surl.li/kycpya"} heading="FREE EXCHANGE/RETURN" detail="WE PROVIDE 15 DAYS FREE EXCHANGE AND RETURN"/>
                <Certificate logo={"http://surl.li/rkwyre"} heading="100% SECURE CHECKOUT" detail="WE ACCEPT ALL KINDS OF PAYMENT METHODS"/>
                <Certificate logo={"http://surl.li/mwqpwj"} heading="SATISFACTION GUARANTEED" detail="YOUR SATISFACTION IS OUR GUARANTEE"/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage
