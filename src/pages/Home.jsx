import '../App.css'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import AboutCard from "../components/AboutCard.jsx";
import SohoCard from "../components/SohoCard.jsx";

const Home = () => {
    return(
        <>
            <Hero/>
            <div className='mt-20'>
            <AboutCard/>
            </div>
            <div className='mt-20'>
                <SohoCard/>
            </div>
            <h1 className='text-center mt-20 mb-2 text-2xl md:text-5xl'>FEATURED BRANDS</h1>
            <div className='flex justify-center mb-20 md:my-20'>
            <Slider/>
            </div>
        </>
    )
}

export default Home;