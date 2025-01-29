// card that displays and image and info about the site
const AboutCard = () => {
    return (
        <div className='flex justify-center'>
        <div className='flex flex-col-reverse items-center gap-10 md:gap-20 md:flex-row md:items-start md:w-11/12 md:justify-center'>
            <img src='/img/model.png' alt='model' className='w-10/12 md:w-6/12 lg:w-4/12 rounded-md'/>
            <div className='flex flex-col gap-5 w-10/12'>
                <h1 className='text-2xl text-center md:text-4xl xl:text-5xl md:text-left'>ABOUT AUDACIEUX ATELIER</h1>
                <p className="card__description text-center font-light md:text-xl lg:text-2xl md:text-left">At Audacieux Atelier, we are committed to curating a collection of the
                    finest men's fashion pieces, designed to elevate your personal style to new heights. Our goal is
                    simple: to provide an exclusive selection of high-end, luxury goods that embody sophistication,
                    craftsmanship, and timeless elegance.</p>
            </div>
        </div>
        </div>
    )
}

export default AboutCard;