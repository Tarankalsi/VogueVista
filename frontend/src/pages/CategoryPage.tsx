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

                    <ItemCard category="Slim Fit T-Shirt" img_url="http://surl.li/rensfz" />
                    <ItemCard category="OverSized T-Shirt" img_url="http://surl.li/puntin" />
                    <ItemCard category="Men Suits" img_url="http://surl.li/crxyqz" />
                    <ItemCard category="Cargo" img_url="http://surl.li/udpcvg" />
                    <ItemCard category="Slim Fit T-Shirt" img_url="http://surl.li/rensfz" />
                    <ItemCard category="OverSized T-Shirt" img_url="http://surl.li/puntin" />
                    <ItemCard category="Men Suits" img_url="http://surl.li/crxyqz" />
                    <ItemCard category="Cargo" img_url="http://surl.li/udpcvg" />
                </div>
            </div>

            <Footer/>
        </div>
    )
}
