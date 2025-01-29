import {Link} from "react-router-dom";

// setup footer for website
const Footer = () => {
    return (
        <footer className='flex justify-center w-full h-28 items-center bg-zinc-300'>
            <ul className='flex flex-row justify-center md:gap-16 w-full min-[320px]:gap-5 min-[320px]:mx-4'>
                <li className='md:text-lg font-light min-[320px]:text-xs text-center'>&copy; Audacieux Atelier</li>
                <Link to="https://www.instagram.com">
                    <li className='md:text-lg font-light min-[320px]:text-xs text-center hover:underline'>Instagram</li>
                </Link>
                <Link to="/contact">
                    <li className='md:text-lg font-light min-[320px]:text-xs text-center hover:underline'>Customer Service</li>
                </Link>
                <Link to="/contact">
                    <li className='md:text-lg font-light min-[320px]:text-xs text-center hover:underline'>Track An Order</li>
                </Link>
            </ul>
        </footer>
    )
}

export default Footer