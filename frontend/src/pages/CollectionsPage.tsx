
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

                    <CollectionCard category="Slim Fit T-Shirt" img_url="http://surl.li/rensfz" />
                    <CollectionCard category="OverSized T-Shirt" img_url="http://surl.li/puntin" />
                    <CollectionCard category="Men Suits" img_url="http://surl.li/crxyqz" />
                    <CollectionCard category="Cargo" img_url="http://surl.li/udpcvg" />

                    <CollectionCard category="Jeans" img_url="http://surl.li/xhfawf" />
                    <CollectionCard category="Sunglasses" img_url="http://surl.li/pvvnqv" />

                </div>
            </div>
            <Footer/>

        </div>

    )
}
