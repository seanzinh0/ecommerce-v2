import { useState, useEffect } from 'react';

function ProductCard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='flex justify-center'>
        <div className='grid md:grid-rows-6 md:grid-cols-2 w-10/12 gap-5 md:gap-10'>
            {products.map(product => (
                <div key={product.id} className="flex flex-col lg:flex-row items-center w-full hover:scale-110 hover:shadow-2xl ease-in-out transition duration-500 shadow-zinc-900 rounded-md">
                    <img src={product.image} alt={product.title} className='w-10/12 sm:w-8/12 md:w-full lg:w-5/12'/>
                    <div className="flex flex-col gap-2 p-4 h-full w-10/12">
                        <h1 className="text-lg lg:text-2xl text-center">{product.title}</h1>
                        <p className="text-md lg:text-xl text-center font-light">${product.price}</p>
                        <p className="text-xs lg:text-[1rem] text-center font-light">{product.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ProductCard;