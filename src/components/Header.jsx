import {Link} from "react-router-dom";

// use link to link header elements to other pages
const Header = () => {
    return (
        <nav className='h-28 w-full flex items-center justify-center border-b-4 border-black bg-white'>
            <ul className='flex w-11/12 sm:justify-between items-center justify-center gap-8'>
                <Link to="/products">
                    <li className='hover:underline sm:text-lg min-[320px]:lg font-light text-center min-[320px]:w-16 min-[440px]:w-28'>Shop</li>
                </Link>
                <Link to="/">
                    <li className='sm:text-4xl min-[320px]:text-2xl font-light text-center'>Audacieux Atelier</li>
                </Link>
                <Link to="/contact">
                    <li className='hover:underline sm:text-lg min-[320px]:lg font-light text-center min-[320px]:w-16 min-[440px]:w-28'>Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header