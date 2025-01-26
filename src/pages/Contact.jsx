import '../App.css'
import ContactForm from "../components/ContactForm.jsx";
import ContactInfo from "../components/ContactInfo.jsx";

const Contact = () => {
    return (
        <>
            <h1 className='text-center text-2xl my-10 md:text-4xl xl:text-5xl md:my-12'>CONTACT US</h1>
            <ContactForm/>
            <div className='my-10 md:my-12'>
            <ContactInfo/>
            </div>
        </>
    )
}

export default Contact