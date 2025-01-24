import '../App.css'
import Hero from '../components/Hero'
import Slider from '../components/Slider'

const Home = () => {
    return(
        <>
            <Hero/>
            <div className='flex justify-center'>
            <Slider/>
            </div>
        </>
    )
}

export default Home;