import { Dropdown } from 'flowbite-react';

// using flowbite's dropdown and handlesort function to sort products
const SortDropdown = ({ handleSort }) => {
    return (
        <Dropdown label="Sort by" className='bg-zinc-100' inline>
            <Dropdown.Item onClick={() => handleSort('featured')}>Featured</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort('title-asc')}>Title (A-Z)</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort('title-desc')}>Title (Z-A)</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort('price-asc')}>Price (Low to High)</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort('price-desc')}>Price (High to Low)</Dropdown.Item>
        </Dropdown>
    );
}

export default SortDropdown;