


export default function ItemCard({ category, img_url }: { category: string, img_url: string }) {
    return (
        
        <div className="group inline-block my-2 p-4 relative">
            <div className=" relative overflow-hidden">
                <img
                    className="h-48 w-32 md:h-72 md:w-56 lg:h-80 lg:w-64 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    src={img_url}
                    alt={category}
                />
                <div className='z-20 absolute bottom-2 left-1/2 transform -translate-x-1/2 w-5/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                <button
                onClick={() => { console.log("Button Click") }}
                className=" z-10  bg-primary text-brown-4 text-sm  py-2 bg-opacity-75 hover:bg-opacity-100 cursor-pointer w-full border border-brown-4"
            >
                Quick View
            </button>
                </div>
              
            </div>
            <h5 className="font-semibold text-sm tracking-widest text-brown-4 mt-2 text-center">{category}</h5>
            <h5 className="font-semibold text-md text-brown-4 mt-1 text-center">Rs 1890</h5>
            <h6 className=" text-xs text-brown-3 mt-1 text-center ">1 color, 4 sizes</h6>

            {/* <div className="flex justify-center gap-2 mt-8 mb-2 ">
                <SizeButton label="S"/>
                <SizeButton label="M"/>
                <SizeButton label="L"/>
                <SizeButton label="XL"/>
            </div> */}
            
            <div className="absolute inset-0  p-4 group-hover:border border-brown-4 z-0"></div>
        </div>
    
    

    )
}
