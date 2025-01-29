import { useState, useEffect } from 'react';
import SortDropdown from './SortDropdown';
import FilterDropdown from './FilterDropdown';

// component for product cards
const ProductCard= () => {
    // sets state of products to be an empty array
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    // fetch data from backend api route and set products and sorted products state to data
    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setSortedProducts(data);
            });
    }, []);

    // set conditionals based on what is clicked in the sort dropdown component and sets the sorted products to the array that is sorted
    const handleSort = (e) => {
        // copy the sorted products array
        let sorted = [...sortedProducts];
        if (e === 'featured'){
            setSortedProducts(sortedProducts);
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

    const handleFilter = (e) => {
        // copy the products array so that you filter the original data not the sorted this allows the filtered to be sorted
        let filtered = [...products];
        if (e === 'price-less-than-500') {
            filtered = filtered.filter(product => product.price < 500);
        } else if (e === 'price-less-than-1000') {
            filtered = filtered.filter(product => product.price < 1000);
        } else if (e === 'price-less-than-2000') {
            filtered = filtered.filter(product => product.price < 2000);
        } else if (e === 'price-less-than-3000') {
            filtered = filtered.filter(product => product.price < 3000);
        } else if (e !== 'all') {
            filtered = filtered.filter(product => product.category === e);
        }
        // set the sorted products to the filtered
        setSortedProducts(filtered);
    }

    // add the dropdown components and pass the functions as props to handle sortingg and filtering
    // map the sorted products to create a card for each product
    return (
        <div className=' flex flex-col justify-center items-center'>
            <div className='flex w-10/12 mb-10 md:mb-12 gap-2'>
                <SortDropdown handleSort={handleSort} />
                <FilterDropdown handleFilter={handleFilter} />
            </div>
            <div className='grid md:grid-cols-2 w-10/12 gap-5 md:gap-10'>
                {sortedProducts.map(product => (
                    <div key={product.id}
                         className="flex flex-col lg:flex-row items-center w-full hover:scale-105 hover:shadow-2xl ease-in-out transition duration-500 shadow-zinc-900 rounded-md">
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