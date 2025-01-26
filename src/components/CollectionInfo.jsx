const CollectionInfo = () => {
    return (
        <div className='flex justify-center'>
        <div className='w-10/12'>
            <p className='md:text-lg text-xs text-center'>At Audacieux Atelier, we curate a collection of cutting-edge, luxury brands that push the boundaries of fashion and craftsmanship. From Balenciaga’s bold, streetwear-inspired innovations to Visvim’s blend of heritage craftsmanship and modern design, each label offers something unique. Kapital celebrates eclectic, hand-crafted designs with a distinct Japanese influence, while Salomon merges high-performance outdoor gear with urban style. Acne Studios brings Scandinavian minimalism and playful creativity to the forefront, while Celine Homme, under Hedi Slimane, offers sleek, rock-inspired elegance. Maison Margiela challenges fashion norms with its deconstructed, conceptual approach, and Bottega Veneta epitomizes understated luxury through its signature woven leather designs. Together, these brands represent the bold, avant-garde spirit of Audacieux Atelier, offering a carefully curated selection that balances innovation, artistry, and timeless sophistication.</p>
            <div className='flex justify-evenly mt-10 md:mt-16 flex-wrap'>
                <img src='/img/outfit-1.png' alt='outfit1' className='w-2/12 hidden xl:block'/>
                <img src='/img/outfit-2.png' alt='outfit2' className='w-5/12 sm:w-3/12 xl:w-2/12'/>
                <img src='/img/outfit-3.png' alt='outfit3' className='w-5/12 sm:w-3/12 xl:w-2/12'/>
                <img src='/img/outfit-4.png' alt='outfit4' className='w-5/12 sm:w-3/12 xl:w-2/12'/>
                <img src='/img/outfit-5.png' alt='outfit5' className='w-5/12 sm:w-3/12 xl:w-2/12'/>
            </div>
        </div>
        </div>
    )
}

export default CollectionInfo