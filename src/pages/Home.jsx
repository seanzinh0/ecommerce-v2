import '../App.css'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import AboutCard from "../components/AboutCard.jsx";
import SohoCard from "../components/SohoCard.jsx";

// Home page with 2 cards and a slider
const Home = () => {
    return(
        <>
            <Hero/>
            <div className='mt-10 md:mt-12'>
            <AboutCard/>
            </div>
            <div className='mt-10 md:mt-12'>
                <SohoCard/>
            </div>
            <h1 className='text-center my-10 md:mt-12 text-2xl md:text-5xl'>FEATURED BRANDS</h1>
            <div className='flex justify-center my-10 md:my-12'>
            <Slider/>
            </div>
        </>
    )
}

export default Home;