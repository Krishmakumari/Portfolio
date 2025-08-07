<<<<<<< HEAD
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {  // <-- Mark the function as async
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_m0lmyft',  // <-- Ensure service ID is a string
                'template_yeb6h2x', // <-- Ensure template ID is a string
                {
                    from_name: form.name,
                    to_name: 'Krishma',
                    from_email: form.email,
                    to_email:'krishma24604@gmail.com',
                    message: form.message,
                },
                'bVwCbQErHl_ks5LOI'
            )

            setLoading(false);
            alert('Your message has been sent successfully!');

            // Clear form after submission
            setForm({ name: '', email: '', message: '' });

        } catch (error) {
            setLoading(false);
            console.error('EmailJS Error:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="c-space my-20" id='contact'>

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text mt-10">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        "Let’s build something amazing together! 🚀 Whether it's a project idea, 
                        collaboration, or just a tech chat, feel free to reach out. I’d love to connect!"
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter your Name"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="abc@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="field-input"
                                placeholder="Hi....."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
=======
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {  // <-- Mark the function as async
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_m0lmyft',  // <-- Ensure service ID is a string
                'template_yeb6h2x', // <-- Ensure template ID is a string
                {
                    from_name: form.name,
                    to_name: 'Krishma',
                    from_email: form.email,
                    to_email:'krishma24604@gmail.com',
                    message: form.message,
                },
                'bVwCbQErHl_ks5LOI'
            )

            setLoading(false);
            alert('Your message has been sent successfully!');

            // Clear form after submission
            setForm({ name: '', email: '', message: '' });

        } catch (error) {
            setLoading(false);
            console.error('EmailJS Error:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="c-space my-20" id='contact'>

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text mt-10">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        "Let’s build something amazing together! 🚀 Whether it's a project idea, 
                        collaboration, or just a tech chat, feel free to reach out. I’d love to connect!"
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter your Name"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="abc@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="field-input"
                                placeholder="Hi....."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
>>>>>>> 4b6c810f5a26ceb6dffa13bf8999e9d3226a77d2
