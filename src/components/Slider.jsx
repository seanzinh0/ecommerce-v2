import {Carousel} from 'flowbite-react';

const Slider = () => {
    return (
        <div className='w-11/12 h-[76px] md:h-[205px] lg:h-[300px] xl:h-[325px] 2xl:h-[400px]'>
            <Carousel leftControl={<img src="/img/arrow_back_ios_42dp_666666_FILL0_wght400_GRAD0_opsz40.png" alt="arrow" className='h-4 outline-0 md:h-10'/>} rightControl={<img src="/img/arrow_forward_ios_42dp_666666_FILL0_wght400_GRAD0_opsz40.png" alt="arrow" className='h-4 outline-0 md:h-10'/>} indicators={false}>
                <img src='/img/acnelogo.png' alt='Acne logo'/>
                <img src='/img/margielalogo.png' alt='Balenciagalogo'/>
                <img src='/img/balenciagalogo.png' alt='Kapital Logo'/>
                <img src='/img/salomonlogo.png' alt='Acne logo'/>
                <img src='/img/celinelogo.png' alt='Balenciagalogo'/>
                <img src='/img/kapitallogo.png' alt='Kapital Logo'/>
                <img src='/img/bottegalogo.png' alt='Acne logo'/>
                <img src='/img/loewelogo.png' alt='Balenciagalogo'/>
                <img src='/img/visvimlogo.png' alt='Kapital Logo'/>
            </Carousel>
        </div>
    )
}

export default Slider