import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className='h-24 w-full flex items-center justify-center border-b-4 border-black bg-white'>
            <ul className='flex w-full justify-evenly items-center'>
                <Link to="/products">
                    <li className='hover:underline text-lg'>Shop</li>
                </Link>
                <Link to="/">
                    <li className='text-3xl'>Audacieux Atelier</li>
                </Link>
                <Link to="/contact">
                    <li className='hover:underline text-lg'>Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header