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
                    <CategoryCard category="Slim Fit T-Shirt" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/AC_CO___ALTINYILDIZ_CLASSICS_Camiseta_b%C3%A1sica_-_Slim_Fit_Plain_T-Shirt_fmahai.jpg"/>
                    <CategoryCard category="OverSized T-Shirt" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Oversized_Extended_Neck_T-shirt___boohooMAN_USA_ezkbr5.jpg"/>
                    <CategoryCard category="Men Suits" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Light_Brown_3-Piece_Men_s_Suit_-_Tailored_Modern_Elegance_for_Business_Events_Premium_Men_s_Wedding_Suit_-_Tailored_Fit_md0z27.jpg"/>
                    <CategoryCard category="Cargo" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Manfinity_Hypemode_Loose_Fit_Men_s_Slogan_Graphic_Cargo_Pants_With_Grommet_Detail_Flap_Pockets_And_Drawstring_Closure_hodeuc.jpg"/>
                    
                    <CategoryCard category="Jeans" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Manfinity_EMRG_Men_Cotton_Contrast_Stitching_Cargo_Jeans_lutqlw.jpg"/>
                    <CategoryCard category="Sunglasses" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Men_Metal_Frame_Fashion_Glasses_vdkxge.jpg"/>
           
                </div>
                
              
            </div>
            <div className="flex justify-center flex-wrap mx-2 md:mx-4 py-2 pb-10 md:py-10">
                <Certificate logo={"https://warsanstyles.com/cdn/shop/files/Artboard_1_87acbb8d-0ed0-4f7a-92db-fc533fb72e4f.png?v=1698145030&width=100"} heading="FREE SHIPPING" detail="STANDARD DELIVERY 5-7 WORKING DAYS"/>
                <Certificate logo={"https://warsanstyles.com/cdn/shop/files/Artboard_1_copy_b69a1c73-a914-4a61-b761-b102f692c4ff.png?v=1698145030&width=100"} heading="FREE EXCHANGE/RETURN" detail="WE PROVIDE 15 DAYS FREE EXCHANGE AND RETURN"/>
                <Certificate logo={"https://warsanstyles.com/cdn/shop/files/Artboard_1_copy_2_0b560c08-113f-4ed9-8480-84ee5a7c04dc.png?v=1698145030&width=100"} heading="100% SECURE CHECKOUT" detail="WE ACCEPT ALL KINDS OF PAYMENT METHODS"/>
                <Certificate logo={"https://warsanstyles.com/cdn/shop/files/Artboard_1_copy_3_e1c167f1-0d4e-4719-abff-657a65216704.png?v=1698145031&width=100"} heading="SATISFACTION GUARANTEED" detail="YOUR SATISFACTION IS OUR GUARANTEE"/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage
