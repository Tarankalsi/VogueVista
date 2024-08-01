
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-brown-1 px-16 py-6'> 
        <div className='text-primary text-lg font-extrabold my-5'>VogueVista</div>
            <div className='flex flex-col text-primary text-md text-left  w-52'> 
                <Link className='hover:underline hover:text-white my-1 ' to={'/'}>Request Exchange or Return</Link>
                <Link className='hover:underline hover:text-white my-1'  to={'/'}>Exchange & Return Policy</Link>
                <Link className='hover:underline hover:text-white my-1' to={'/'}>Shipping Policy</Link>
                <Link className='hover:underline hover:text-white my-1' to={'/'}>Privacy Policy</Link>
                <Link className='hover:underline hover:text-white my-1' to={'/'}>Terms of Service</Link>
                <Link className='hover:underline hover:text-white my-1' to={'/'}>Contact Us</Link>
                <Link className='hover:underline hover:text-white my-1' to={'/'}>About Us</Link>
            </div>
            <p className='text-primary text-xs font-semibold pt-6 ' >Copyright © 2024, Warsan. All rights reserved. See our terms of use and privacy notice.

                Powered by Shopify</p>
        </div>
    )
}
