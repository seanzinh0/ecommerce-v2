const ContactForm = () => {
    return (
        <div className='flex justify-center'>
        <div className='flex flex-col gap-5 w-10/12 md:gap-10 xl:flex-row xl:justify-between md:text-lg'>
            <img src='/img/contact.png' alt='japandi living room' className='rounded-md md:object-cover md:h-80 xl:h-96 xl:w-7/12 2xl:h-[500px]'/>
            <form className="flex flex-col p-2 bg-zinc-200 rounded-md md:p-4 xl:h-96 xl:w-7/12 2xl:h-[500px]" action="#">
                <label htmlFor="firstname">First Name</label>
                <input type="text" placeholder="Enter your first name" name="firstname" className='h-10 rounded-md outline-0'/>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" placeholder="Enter your last name" name="lastname" className='h-10 rounded-md outline-0'/>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" name="email" className='h-10 rounded-md outline-0'/>
                <label htmlFor="reasons">Reason</label>
                <select name="reasons" className='h-10 rounded-md outline-0'>
                    <option value="default" disabled selected >Select</option>
                    <option value="support">Customer Support</option>
                    <option value="returns">Returns or Exchanges</option>
                    <option value="care">Garment Care</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="5" cols="50" placeholder="Enter your message" className='rounded-md outline-0'></textarea>
                <button type='submit' className='w-full h-10 mt-2 md:mt-4 bg-zinc-800 text-white rounded-md hover:bg-zinc-600'>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default ContactForm