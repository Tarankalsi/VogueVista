
import CollectionCard from "../components/general/CollectionCard"
import Footer from "../components/general/Footer"
import Navbar from "../components/general/Navbar"

export default function CollectionsPage() {
    return (

        <div>


            <Navbar hover={false} fixed={true} />
            <div className="mt-44 mb-12">
                <div className=" font-serif text-center text-4xl  mb-4 tracking-wider font-semibold text-brown-4">COLLECTIONS</div>

                <div className="flex  gap-4  lg:gap-6 justify-center  flex-wrap">

                    <CollectionCard category="Slim Fit T-Shirt" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/AC_CO___ALTINYILDIZ_CLASSICS_Camiseta_b%C3%A1sica_-_Slim_Fit_Plain_T-Shirt_fmahai.jpg" />
                    <CollectionCard category="OverSized T-Shirt" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Oversized_Extended_Neck_T-shirt___boohooMAN_USA_ezkbr5.jpg" />
                    <CollectionCard category="Men Suits" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Light_Brown_3-Piece_Men_s_Suit_-_Tailored_Modern_Elegance_for_Business_Events_Premium_Men_s_Wedding_Suit_-_Tailored_Fit_md0z27.jpg" />
                    <CollectionCard category="Cargo" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Manfinity_Hypemode_Loose_Fit_Men_s_Slogan_Graphic_Cargo_Pants_With_Grommet_Detail_Flap_Pockets_And_Drawstring_Closure_hodeuc.jpg" />

                    <CollectionCard category="Jeans" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Manfinity_EMRG_Men_Cotton_Contrast_Stitching_Cargo_Jeans_lutqlw.jpg" />
                    <CollectionCard category="Sunglasses" img_url="https://res.cloudinary.com/daygfelat/image/upload/v1720697802/Men_Metal_Frame_Fashion_Glasses_vdkxge.jpg" />

                </div>
            </div>
            <Footer/>

        </div>

    )
}
