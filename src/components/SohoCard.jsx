const SohoCard = () => {
    return (
        <div className='flex justify-center'>
            <div
                className='flex flex-col-reverse items-center gap-10 md:gap-20 md:flex-row-reverse md:items-start md:w-11/12 md:justify-center'>
                <img src='/img/soho.png' alt='model' className='w-10/12 md:w-6/12 lg:w-4/12 rounded-md'/>
                <div className='flex flex-col gap-5 w-10/12'>
                    <h1 className='text-2xl text-center md:text-4xl xl:text-5xl md:text-left'>FOUNDED IN SOHO</h1>
                    <p className="card__description text-center font-light md:text-xl lg:text-2xl md:text-left">Audacieux Atelier was founded in Soho, NYC, inspired by the area's rich fashion culture and creative energy. We chose this iconic neighborhood for its unique blend of innovation, style, and artistry—qualities that align perfectly with our vision. Our carefully curated collection of designer goods reflects the bold, sophisticated spirit of Soho, offering fashion, accessories, and lifestyle pieces that stand out for their craftsmanship and timeless appeal.</p>
                </div>
            </div>
        </div>
    )
}

export default SohoCard;