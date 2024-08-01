import React from 'react'

function ItemHeading() {
    return (
        <div className='flex flex-col  items-center' >
            <div className='text-4xl tracking-wider font-semibold font-serif text-brown-4'>CUBAN SHIRTS</div>
            <p className='text-justify sm:text-center text-sm md:text-base w-5/6  md:w-3/5 my-4 text-brown-4 font-kalra'>
                Elevate your style with our Checked Shirt. Made with 100% cotton, it's breathable and comfortable for all-day wear. The button down collar and double flap pockets add a touch of class to this timeless and fashionable checked shirt. Elevate your style with confidence.
            </p>
            <div className='font-kalra font-bold text-center text-brown-4'> 
                <div>Buy 2 or More Get 10% Off | Code : SUM10</div>
                <div>Buy 5 or More Get 20% Off | Code : SUM20</div>
            </div>
        </div>
    )
}

export default ItemHeading
