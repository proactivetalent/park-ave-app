import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <div className='overflow-hidden'>
            <div className='w-[80vw] m-auto my-10 flex flex-col md:flex-row px-4 md:px-0'>
                <div className="info flex flex-col md:flex-row gap-6 md:gap-10 w-full">
                    <div className="content w-full md:w-[40%] flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h1 className='gradient-text text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase pb-6 md:pb-10 text-center md:text-left'>Schedule Your Rennovation</h1>
                        <img className='w-full max-w-xs md:w-auto md:max-w-none' src="public/assets/contact/a2.png" alt="" />
                    </div>
                    <div className="form w-full md:w-[60%] flex justify-center items-center">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <div className="ctas flex flex-col md:flex-row justify-center gap-5 my-10 md:my-20 px-4 md:px-0">
                <a href="mailto:info@parkaveelectrical.com" className="inline-flex items-center gradient-button font-semibold text-white border-0 py-4 px-8 md:px-14 focus:outline-none hover:bg-red-900 rounded-4xl text-lg md:text-2xl mt-4 md:mt-4 text-center">Email: info@parkaveelectrical.com</a>
                <a href="tel:+16461234567" className="inline-flex items-center gradient-button font-semibold text-white border-0 py-4 px-8 md:px-14 w-full md:w-auto justify-center focus:outline-none hover:bg-red-900 rounded-4xl text-lg md:text-2xl mt-4 md:mt-4 text-center">Call Now: (646) 123-4567</a>
            </div>

            <div className="locations flex flex-col md:flex-row justify-evenly my-10 md:my-30 w-[80vw] m-auto px-4 md:px-0">
                <div className="left relative flex justify-center items-center mb-6 md:mb-0">
                    <img className="w-full max-w-xs md:w-md" src="/public/assets/contact/location.png" alt="" />
                </div>
                <div className="right mt-5 w-full md:w-auto flex flex-col items-center md:items-start">
                    <h1 className='text-2xl sm:text-4xl md:text-5xl font-extrabold w-full md:w-96 gradient-text mb-2 capitalize text-center md:text-left'>SERVICE AREA</h1>
                    <p className='text-lg md:text-[20px] font-semibold mb-5 text-center md:text-left'>Proudly Powering All Five Boroughs</p>
                    <ol className='text-lg md:text-[20px] font-semibold list-decimal pl-6 md:pl-10 mb-6 text-center md:text-left'>
                        <li>Manhattan</li>
                        <li>Brooklyn</li>
                        <li>Queens</li>
                        <li>The Bronx</li>
                        <li>Staten Island</li>
                    </ol>
                    <p className='text-lg md:text-[20px] font-semibold mb-5 text-[var(--primary)] text-center md:text-left'>24/7 EMERGENCY ELECTRICAL SERVICE<br /> Dangerous sparks? Power outages?<br /> We dispatch NYC-certified technicians</p>
                </div>
            </div>
        </div>
    )
}

const ContactForm = () => {
    const [form, setForm] = React.useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = React.useState({});
    const [submitted, setSubmitted] = React.useState(false);

    const validate = () => {
        const errs = {};
        if (!form.name || form.name.length < 3) {
            errs.name = 'Name must be at least 3 characters.';
        }
        if (!form.surname || form.surname.length < 3) {
            errs.surname = 'Surname must be at least 3 characters.';
        }
        if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = 'Please enter a valid email address.';
        }
        return errs;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(form),
            });
            if (response.ok) {
              setSubmitted(true);
            } else {
              setSubmitted(false);
              alert('Failed to send message. Please try again later.');
            }
          } catch (error) {
            setSubmitted(false);
            alert('Failed to send message. Please try again later.');
          }
        } else {
          setSubmitted(false);
        }
      };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-4 md:p-6 rounded-lg shadow-md w-full md:w-[40vw] max-w-[80%] md:max-w-none border-1 border-gray-300">
            <label className="font-semibold">Name*
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mt-1 border-gray-300"
                    required
                    placeholder='Name'
                />
                {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
            </label>
            <label className="font-semibold">Surname*
                <input
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mt-1 border-gray-300"
                    required
                    placeholder='Surname'
                />
                {errors.surname && <span className="text-red-600 text-sm">{errors.surname}</span>}
            </label>
            <label className="font-semibold">Email*
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mt-1 border-gray-300"
                    required
                    placeholder='john@xyz.com'
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
            </label>
            <label className="font-semibold">Message
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mt-1 border-gray-300"
                    rows={4}
                    placeholder='Message'
                />
            </label>
            <button type="submit" className="bg-[var(--primary)] text-white font-bold py-2 px-4 rounded hover:bg-black hover:text-white transition">Submit</button>
            {submitted && <div className="text-green-600 font-semibold mt-2">Form submitted successfully!</div>}
        </form>
    );
}

export default Form
