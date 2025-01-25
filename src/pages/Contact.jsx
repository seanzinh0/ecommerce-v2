import '../App.css'
import ContactForm from "../components/ContactForm.jsx";
import ContactInfo from "../components/ContactInfo.jsx";

const Contact = () => {
    return (
        <>
            <h1 className='text-center text-2xl my-10 md:text-5xl md:my-20'>CONTACT US</h1>
            <ContactForm/>
            <div className='my-10 md:my-20'>
            <ContactInfo/>
            </div>
        </>
    )
}

export default Contact