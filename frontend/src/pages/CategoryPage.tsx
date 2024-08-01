import Footer from "../components/general/Footer";
import ItemCard from "../components/general/ItemCard";
import Navbar from "../components/general/Navbar";
import FilterBar from "../components/ItemPage/FilterBar";
import ItemHeading from "../components/ItemPage/ItemHeading";


export default function CategoryPage({ }) {
    return (
        <div className="bg-primary min-h-screen">
            <div>
                <Navbar hover={false} fixed={true} />
            </div>
            <div className="pt-36 mx-4">
                <div className="my-10">
                    <ItemHeading />
                </div>
                <div className=" mx-12 sm:mx-20 md:mx-16   lg:mx-24">
                    <FilterBar />
                </div>
                
                <div className="flex justify-center flex-wrap my-4">

                    <ItemCard category="Slim Fit T-Shirt" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/AC_CO___ALTINYILDIZ_CLASSICS_Camiseta_b%C3%A1sica_-_Slim_Fit_Plain_T-Shirt_fmahai.jpg" />
                    <ItemCard category="OverSized T-Shirt" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Oversized_Extended_Neck_T-shirt___boohooMAN_USA_ezkbr5.jpg" />
                    <ItemCard category="Men Suits" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Light_Brown_3-Piece_Men_s_Suit_-_Tailored_Modern_Elegance_for_Business_Events_Premium_Men_s_Wedding_Suit_-_Tailored_Fit_md0z27.jpg" />
                    <ItemCard category="Cargo" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Manfinity_Hypemode_Loose_Fit_Men_s_Slogan_Graphic_Cargo_Pants_With_Grommet_Detail_Flap_Pockets_And_Drawstring_Closure_hodeuc.jpg" />
                    <ItemCard category="Slim Fit T-Shirt" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/AC_CO___ALTINYILDIZ_CLASSICS_Camiseta_b%C3%A1sica_-_Slim_Fit_Plain_T-Shirt_fmahai.jpg" />
                    <ItemCard category="OverSized T-Shirt" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Oversized_Extended_Neck_T-shirt___boohooMAN_USA_ezkbr5.jpg" />
                    <ItemCard category="Men Suits" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Light_Brown_3-Piece_Men_s_Suit_-_Tailored_Modern_Elegance_for_Business_Events_Premium_Men_s_Wedding_Suit_-_Tailored_Fit_md0z27.jpg" />
                    <ItemCard category="Cargo" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Manfinity_Hypemode_Loose_Fit_Men_s_Slogan_Graphic_Cargo_Pants_With_Grommet_Detail_Flap_Pockets_And_Drawstring_Closure_hodeuc.jpg" />
                </div>
            </div>

            <Footer/>
        </div>
    )
}
