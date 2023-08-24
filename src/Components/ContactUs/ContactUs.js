import React from 'react';
import { Mail, MapPin, Phone } from 'react-feather';

const ContactUs = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center">
                    <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>
                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <Mail className="w-6 h-6" />
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                        <p className="mt-2 text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <MapPin className="w-6 h-6" />
                        </span>
                        
                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Office</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                        <p className="mt-2 text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <Phone className="w-6 h-6" />
                        </span>
                        
                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                        <p className="mt-2 text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
