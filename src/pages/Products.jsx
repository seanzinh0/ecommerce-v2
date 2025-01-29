import '../App.css'
import CollectionInfo from "../components/CollectionInfo.jsx";
import ProductCard from "../components/ProductCard.jsx";

// product page consisting of info and a collection of product cards
const Products = () => {
    return (
        <>
            <h1 className='text-center text-2xl my-10 md:text-4xl xl:text-5xl md:my-12'>OUR COLLECTION</h1>
            <CollectionInfo/>
            <div className='my-10 md:my-12'>
            <ProductCard/>
            </div>
        </>
    )
}

export default Products;
