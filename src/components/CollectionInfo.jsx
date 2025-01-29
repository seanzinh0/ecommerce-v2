import { useState } from "react";

// shows info about our collection and has images to show outfits
const CollectionInfo = () => {
    // set showFullText state to false
    const [showFullText, setShowFullText] = useState(false);

    // when wanting to show full text toggle by using not operator
    const handleToggleShown = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className='flex justify-center'>
            <div className='w-10/12'>
                {/*if it is showFullText the height is set to auto otherwise the height will be limited and ... will be there along with an arrow down icon*/}
                <p className={`lg:text-lg sm:text-sm text-xs text-center ${showFullText ? 'h-auto' : 'md:h-fit h-20 line-clamp-5 md:line-clamp-none'}`}>
                    At Audacieux Atelier, we curate a collection of cutting-edge, luxury brands that push the boundaries
                    of
                    fashion and craftsmanship. From Balenciaga’s bold, streetwear-inspired innovations to Visvim’s blend
                    of
                    heritage craftsmanship and modern design, each label offers something unique. Kapital celebrates
                    eclectic, hand-crafted designs with a distinct Japanese influence, while Salomon merges
                    high-performance
                    outdoor gear with urban style. Acne Studios brings Scandinavian minimalism and playful creativity to
                    the
                    forefront, while Celine Homme, under Hedi Slimane, offers sleek, rock-inspired elegance. Maison
                    Margiela
                    challenges fashion norms with its deconstructed, conceptual approach, and Bottega Veneta epitomizes
                    understated luxury through its signature woven leather designs. Together, these brands represent the
                    bold, avant-garde spirit of Audacieux Atelier, offering a carefully curated selection that balances
                    innovation, artistry, and timeless sophistication.
                </p>
                {/*add onClick event to toggle show full text or not using arrow icons hidden on non-mobile devices*/}
                <div className='flex justify-center md:hidden'>
                    <button onClick={handleToggleShown}>{showFullText ? (<img src='/img/keyboard_arrow_up_16dp_666666_FILL0_wght400_GRAD0_opsz20.png' alt='read less' className='h-6'/> ) : (<img src='/img/keyboard_arrow_down_16dp_666666_FILL0_wght400_GRAD0_opsz20.png' alt='read more' className='h-6'/> )}</button>
                </div>
                <div className='flex justify-evenly mt-4 md:mt-16 flex-wrap'>
                    <img src='/img/outfit-1.png' alt='outfit1' className='w-2/12 hidden xl:block rounded-md'/>
                    <img src='/img/outfit-2.png' alt='outfit2' className='w-5/12 sm:w-[22%] xl:w-2/12 rounded-md'/>
                    <img src='/img/outfit-3.png' alt='outfit3' className='w-5/12 sm:w-[22%] xl:w-2/12 rounded-md'/>
                    <img src='/img/outfit-4.png' alt='outfit4' className='w-5/12 sm:w-[22%] xl:w-2/12 rounded-md mt-4 md:mt-0'/>
                    <img src='/img/outfit-5.png' alt='outfit5' className='w-5/12 sm:w-[22%] xl:w-2/12 rounded-md mt-4 md:mt-0'/>
                </div>
            </div>
        </div>
    )
}

export default CollectionInfo