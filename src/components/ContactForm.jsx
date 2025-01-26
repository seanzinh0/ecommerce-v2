import {useState} from "react";
import {Modal} from 'flowbite-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState('');
    const [showModal, setShowModal] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = "Please enter your first name";
        if (!lastName) newErrors.lastName = "Please enter your last name";
        if (!email) newErrors.email = "Please enter your email";
        if (!reason) newErrors.reason = "Please select a reason";
        if (!message) newErrors.message = "Please enter your message";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFirstName('');
            setLastName('');
            setEmail('');
            setReason('');
            setMessage('');
            setShowModal(true);
            setTimeout(() => {setShowModal(false)}, 3250)
        }
    }

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col gap-5 w-10/12 md:gap-10 xl:flex-row xl:justify-between md:text-lg'>
                <img src='/img/contact.png' alt='japandi living room'
                     className='rounded-md md:object-cover md:h-80 xl:h-96 xl:w-7/12 2xl:h-[500px]'/>
                <form className="flex flex-col p-2 bg-zinc-200 rounded-md md:p-4 xl:h-96 xl:w-7/12 2xl:h-[500px] "
                      onSubmit={handleSubmit}>
                    <label htmlFor="firstname"
                           className={`text-lg ${errors.firstName ? 'text-red-500' : ''}`}>{errors.firstName || 'First Name'}</label>
                    <input
                        type="text"
                        placeholder='Enter your first name'
                        name="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={`h-10 rounded-md focus:outline-none focus:ring-0 focus:border-zinc-600 ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    <label htmlFor="lastname"
                           className={`text-lg ${errors.lastName ? 'text-red-500' : ''}`}>{errors.lastName || 'Last Name'}</label>
                    <input
                        type="text"
                        placeholder='Enter your last name'
                        name="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={`h-10 rounded-md focus:outline-none focus:ring-0 focus:border-zinc-600 ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    <label htmlFor="email"
                           className={`text-lg ${errors.email ? 'text-red-500' : ''}`}>{errors.email || 'Email'}</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`h-10 rounded-md focus:outline-none focus:ring-0 focus:border-zinc-600 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    <label htmlFor="reasons"
                           className={`text-lg ${errors.reason ? 'text-red-500' : ''}`}>{errors.reason || 'Reason'}</label>
                    <select
                        name="reasons"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className={`h-10 rounded-md focus:outline-none focus:ring-0 focus:border-zinc-600 ${errors.reason ? 'border-red-500' : ''}`}
                    >
                        <option value="" disabled selected>Select</option>
                        <option value="support">Customer Support</option>
                        <option value="returns">Returns or Exchanges</option>
                        <option value="care">Garment Care</option>
                    </select>
                    <label htmlFor="message"
                           className={`text-lg ${errors.message ? 'text-red-500' : ''}`}>{errors.message || 'Message'}</label>
                    <textarea
                        name="message"
                        rows="5"
                        cols="50"
                        placeholder='Enter your message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`rounded-md focus:outline-none focus:ring-0 focus:border-zinc-600 ${errors.message ? 'border-red-500' : ''}`}
                    />
                    <button type='submit'
                            className='w-full h-10 mt-2 md:mt-4 bg-zinc-800 text-white rounded-md hover:bg-zinc-600'>Submit
                    </button>
                </form>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <DotLottieReact
                        src="https://lottie.host/c3ca1e26-6cde-4ecb-b5bf-0d46c5f8aeac/ExJLVVxc3k.lottie"
                        loop
                        autoplay
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ContactForm