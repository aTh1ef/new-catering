'use client';

import React, { useState } from 'react';
import './booking.css';
import SectionTitle from '../components/SectionTitle';
import emailjs from '@emailjs/browser';

export default function Booking() {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: '',
    };

    const [text, setText] = useState(initialState);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simple form validation
        if (
            text.name === '' ||
            text.email === '' ||
            text.date === '' ||
            text.time === ''
        ) {
            setText({ ...text, validate: 'incomplete' });
            return;
        }

        setText({ ...text, validate: 'loading' });

        // Prepare email parameters
        const emailParams = {
            to_name: 'Ateef',
            from_name: text.name,
            from_email: text.email,
            phone: text.phone,
            date: text.date,
            time: text.time,
            people: text.people,
            message: text.message,
        };

        // Send email using EmailJS
        try {
            await emailjs.send(
                'service_x9a5etr', // Replace with your EmailJS service ID
                'template_u799pod', // Replace with your EmailJS template ID
                emailParams,
                'CWK5qhkMCj_SVoC0X' // Replace with your EmailJS public key
            );
            setText({ ...text, validate: 'success' });
        } catch (error) {
            console.error('Error sending email:', error);
            setText({ ...text, validate: 'error' });
        }
    };

    return (
        <section id="book-an-event" className="book-an-event">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Reservation" subtitle="Book an Event" />

                <form
                    onSubmit={handleSubmitBooking}
                    className="booking-form"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="text"
                                name="name"
                                value={text.name}
                                className="form-control"
                                placeholder="Your Name"
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={text.email}
                                placeholder="Your Email"
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={text.phone}
                                placeholder="Your Phone"
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
    <input
        type="date"
        name="date"
        className="form-control input-w-auto"
        value={text.date}
        placeholder="Date"
        onChange={handleTextChange}
        onClick={(e) => e.currentTarget.showPicker()}
    />
</div>
<div className="col-lg-4 col-md-6 form-group mt-3">
    <input
        type="time"
        className="form-control"
        name="time"
        value={text.time}
        placeholder="Time"
        onChange={handleTextChange}
        onClick={(e) => e.currentTarget.showPicker()}
    />
</div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="number"
                                className="form-control"
                                name="people"
                                value={text.people}
                                placeholder="Number of people"
                                onChange={handleTextChange}
                            />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea
                            className="form-control"
                            name="message"
                            value={text.message}
                            rows={5}
                            placeholder="Message"
                            onChange={handleTextChange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        {text.validate === 'loading' && (
                            <div className="loading">Sending Booking...</div>
                        )}
                        {text.validate === 'incomplete' && (
                            <div className="error-message">
                                Please fill in all above details for booking a table
                            </div>
                        )}
                        {text.validate === 'success' && (
                            <div className="sent-message">
                                Your booking request was sent. We will call back or send an
                                Email to confirm your booking. Thank You!
                            </div>
                        )}
                        {text.validate === 'error' && (
                            <div className="error-message">Server Error. Please try again.</div>
                        )}
                    </div>
                    <div className="text-center">
                        <button type="submit">Book an Event</button>
                    </div>
                </form>
            </div>
        </section>
    );
}


