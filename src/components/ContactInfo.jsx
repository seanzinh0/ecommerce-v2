// simple component to show info about contacting us
const ContactInfo = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-10/12 xl:w-6/12 leading-8 md:text-lg'>
                <p className='text-justify'>Thank you for choosing Audacieux Atelier! We're excited to have you explore our curated collection of
                    fashion-forward pieces. If you need assistance, we’re here to help. Please use the contact form
                    above to
                    get in touch with us directly. You can select from the following options to ensure your inquiry is
                    directed to the right team:</p>
                <ul>
                    <li className='list-disc list-inside'>Customer Support – For any other inquiries, such as order status, product availability, or
                        general
                        questions.
                    </li>
                    <li className='list-disc list-inside'>Refunds & Exchanges – If you're looking to return or exchange an item, we're happy to assist you
                        with our simple process.
                    </li>
                    <li className='list-disc list-inside'>Garment Care – For questions about how to care for your Audacieux Atelier pieces, including
                        washing,
                        storage, and maintenance.
                    </li>
                </ul>
                <p>If you prefer, feel free to reach out to us directly using the contact details below. We aim to
                    respond
                    to all inquiries as quickly as possible.</p>
                <h4 className='font-semibold'>Contact Information</h4>
                <ul>
                    <li>Email: hello@audacieuxatelier.com</li>
                    <li>Phone: (212) 555-0198</li>
                    <li>Address:
                        123 Mercer Street,
                        Suite 5B,
                        Soho, New York, NY 10012
                    </li>
                </ul>
                <h4 className='font-semibold'>Business Hours:</h4>
                <ul>
                    <li>Monday to Friday: 10:00 AM - 6:00 PM</li>
                    <li>Saturday: 11:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
        </div>
    )
}

export default ContactInfo