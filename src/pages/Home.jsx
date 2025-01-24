import '../App.css'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import AboutCard from "../components/AboutCard.jsx";

const Home = () => {
    return(
        <>
            <Hero/>
            <div className='mt-20'>
            <AboutCard/>
            </div>
            <h1 className='text-center mt-20 mb-2 text-2xl md:text-6xl font-light'>Featured Brands</h1>
            <div className='flex justify-center mb-20'>
            <Slider/>
            </div>
        </>
    )
}

export default Home;