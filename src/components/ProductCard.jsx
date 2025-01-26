import { useState, useEffect } from 'react';
import { Dropdown } from 'flowbite-react';

function ProductCard() {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setSortedProducts(data);
            });
    }, []);

    const handleSort = (e) => {
        let sorted = [...products];
        if (e === 'featured'){
            setSortedProducts(products);
            return;
        } else if (e === 'title-asc') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (e === 'title-desc') {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        } else if (e === 'price-asc') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (e === 'price-desc') {
            sorted.sort((a, b) => b.price - a.price);
        }
        setSortedProducts(sorted);
    }


    return (
        <div className=' flex flex-col justify-center items-center'>
            <div className='flex w-10/12 mb-10 md:mb-12'>
                <Dropdown label="Sort by" className='bg-zinc-100' inline>
                    <Dropdown.Item onClick={() => handleSort('featured')}>Featured</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSort('title-asc')}>Title (A-Z)</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSort('title-desc')}>Title (Z-A)</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSort('price-asc')}>Price (Low to High)</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSort('price-desc')}>Price (High to Low)</Dropdown.Item>
                </Dropdown>
            </div>
            <div className='grid md:grid-rows-6 md:grid-cols-2 w-10/12 gap-5 md:gap-10'>
                {sortedProducts.map(product => (
                    <div key={product.id}
                         className="flex flex-col lg:flex-row items-center w-full hover:scale-110 hover:shadow-2xl ease-in-out transition duration-500 shadow-zinc-900 rounded-md">
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