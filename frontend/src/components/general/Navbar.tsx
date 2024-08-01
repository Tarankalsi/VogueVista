import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faAngleDown, faAngleRight, faBars, faCartShopping, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

import { openMenuAtom } from "../../store/atoms/uiAtom";
import { useRecoilState } from "recoil";


type NavbarProps = {
    hover: boolean,
    fixed: boolean,
  
}

export default function Navbar({ hover, fixed}: NavbarProps) {
    const [openMenu, setOpenMenu] = useRecoilState(openMenuAtom)

    const handleMenu = () => {
        if (openMenu === "hidden") {
            setOpenMenu("")
            // setHover(false)
        } else {
            setOpenMenu("hidden")
            // setHover(true)
            
        }
    }


    return (
        <nav className={` ${hover ? '' : 'bg-brown-1'} hover:bg-brown-1 text-primary transition duration-300  ${fixed ? 'fixed top-0 left-0 w-full z-50' : ''} font-kalra`}>
            <div className="flex justify-between items-center mx-4 sm:mx-10 py-6 md:pt-14 md:pb-8 ">
                <div className="hidden md:flex lg:space-x-10 md:space-x-4  items-center font-semibold text-md tracking-wider">
                    <Link to="/" className=" ">
                        <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5  after:bg-primary after:origin-left after:transform after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
                            HOME
                        </span>
                    </Link>
                    <Link to="/clothing" className="flex items-center" >
                        <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5  after:bg-primary after:origin-left after:transform after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
                            CLOTHING </span><FontAwesomeIcon className="mx-1 size-3" icon={faAngleDown} />
                    </Link>
                    <Link to="/collections" className="flex items-center ">
                        <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5  after:bg-primary after:origin-left after:transform after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
                            CATEGORIES
                        </span><FontAwesomeIcon className="mx-1 size-3" icon={faAngleDown} />
                    </Link>
                </div>

                <button className='text-white  flex items-center p-2 md:hidden' onClick={handleMenu}>
                    {openMenu === "hidden" ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                </button>

                <div className={`${openMenu} md:hidden bg-brown-1 fixed inset-0  bg-no-repeat top-20 `}>
                    <div className='bg-gradient  inset-0 bg-no-repeat top-16'>
                        {/* <div className='p-3 flex justify-between px-8 shadow'>
                            <Link to={'/home'} id='brand' className='flex items-center'>
                                <span className='text-white text-2xl font-bold'>VogueBista</span>
                            </Link>


                            <button className='text-white  flex items-center p-2 md:hidden' onClick={handleMenu}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>-
                        </div> */}

                        <div className='flex flex-col mx-10 my-6'>
                            <Link to={'/'} className='cursor-pointer text-primary   border-primary  hover:underline font-semibold  text-md  transition duration-300 mt-6 mb-2'>
                                HOME
                            </Link>
                            <hr className='w-full m-auto opacity-50' />
                            <Link to={'/'} className='cursor-pointer text-primary hover:text-gray-200  hover:underline font-semibold  text-md  transition duration-300 mt-6 mb-2'>
                                <div className="flex justify-between items-center">
                                    <span>CLOTHING</span>
                                    <span><FontAwesomeIcon className="mx-1 size-3" icon={faAngleRight} /></span>
                                </div>
                            </Link>
                            <hr className='w-full m-auto opacity-50' />

                            <Link to={'/collections'} className='cursor-pointer text-primary hover:text-gray-200  hover:underline font-semibold  text-md  transition duration-300 mt-6 mb-2'>
                                <div className="flex justify-between items-center">
                                    <span>CATEGORIES</span>
                                    <span><FontAwesomeIcon className="mx-1 size-3" icon={faAngleRight} /></span>
                                </div>
                            </Link>
                            <hr className='w-full m-auto opacity-50' />
                            <Link to={'./'} className='cursor-pointer text-primary hover:text-gray-200  hover:underline font-semibold  text-md  transition duration-300 mt-6 mb-2'>
                                Contact Us
                            </Link>

                            <div className="">
                                <Link to={'/'} className=' flex  items-center mt-10 gap-2 text-lg font-bold  relative after:absolute after:left-0 after:-bottom-1 after:w-80 after:h-0.5  after:bg-primary after:origin-left after:transform after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-50'>
                                    <FontAwesomeIcon className="mx-1 size-5" icon={faUser} /> Register/Login
                                </Link>
                            </div>


                        </div>
                    </div>

                </div>


                <Link  to="/" className={`absolute left-1/2 transform -translate-x-1/2 text-center`}>
                    <div className="text-3xl font-extrabold ">VogueVista</div>

                </Link>

                <div className="flex gap-2 sm:gap-6 items-center font-semibold text-md">
                    <button className=""><FontAwesomeIcon className="size-5" icon={faMagnifyingGlass} /></button>
                    <button className="hidden md:flex"><FontAwesomeIcon className="size-5" icon={faUser} /></button>
                    <button className=""><FontAwesomeIcon className="size-6" icon={faCartShopping} /></button>
                </div>
            </div>

        </nav>
    )
}
