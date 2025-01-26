import { Dropdown } from 'flowbite-react';

function FilterDropdown({ handleFilter }) {
    return (
        <Dropdown label="Filter by" className='bg-zinc-100' inline>
            <Dropdown.Item onClick={() => handleFilter('all')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('shirts')}>Shirts</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('shoes')}>Shoes</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('pants')}>Pants</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('jackets')}>Jackets</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('hoodies')}>Hoodies</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('accessories')}>Accessories</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('price-less-than-500')}>Price Less Than $500</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('price-less-than-1000')}>Price Less Than $1000</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('price-less-than-2000')}>Price Less Than $2000</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter('price-less-than-3000')}>Price Less Than $3000</Dropdown.Item>
        </Dropdown>
    );
}

export default FilterDropdown;