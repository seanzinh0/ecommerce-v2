import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className='h-28 w-full flex items-center justify-center border-b-4 border-black bg-white'>
            <ul className='flex w-full justify-evenly items-center'>
                <Link to="/products">
                    <li className='hover:underline text-lg font-light'>Shop</li>
                </Link>
                <Link to="/">
                    <li className='text-4xl font-light'>Audacieux Atelier</li>
                </Link>
                <Link to="/contact">
                    <li className='hover:underline text-lg font-light'>Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header