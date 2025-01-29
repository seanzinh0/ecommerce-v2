import {Link} from "react-router-dom";

// setup hero using link so that when the div is clicked it takes you to products page
const Hero = () => {
    return (
        <>
        <img className='w-full md:h-96 h-80 object-cover' src='/img/hero-optimized.png' alt='Hero'/>
            <Link to='/products'>
            <div className='flex justify-center'>
            <div className='text-white text-xl w-64 xl:text-7xl md:text-4xl font-light bg-opacity-70 bg-slate-500 md:w-6/12 md:h-36 min-h-24 text-center rounded-md absolute md:-translate-y-52 hover:bg-opacity-85 flex justify-center items-center -translate-y-36'>SHOP OUR COLLECTION</div>
            </div>
            </Link>
        </>
    )
}

export default Hero;