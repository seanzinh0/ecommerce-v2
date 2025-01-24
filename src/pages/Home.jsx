import '../App.css'
import Hero from '../components/Hero'
import Slider from '../components/Slider'

const Home = () => {
    return(
        <>
            <Hero/>
            <h1 className='text-center mt-20 mb-2 text-2xl md:text-6xl font-light'>Featured Brands</h1>
            <div className='flex justify-center'>
            <Slider/>
            </div>
        </>
    )
}

export default Home;