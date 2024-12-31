import React from 'react';
import { motion } from 'framer-motion';

const Announcements = () => {
    const announcements = [
        {
            id: 1,
            title: "Lost and Found Initiative Launched!",
            description: "We are excited to announce our new initiative to make lost and found management easier for everyone.",
            imageUrl: "https://i.ibb.co.com/KN02HPw/depositphotos-23552749-stock-photo-lost-and-found-choice.webp",
            date: "December 24, 2024"
        },
        {
            id: 2,
            title: "Feature Update: Advanced Search",
            description: "Introducing advanced search functionality to help you find items more efficiently.",
            imageUrl: "https://i.ibb.co.com/5G3Q9MD/2.png",
            date: "December 20, 2024"
        },
        {
            id: 3,
            title: "New Lost Item Category Added!",
            description: "We've added a new category to make it easier to find specific types of lost items.",
            imageUrl: "https://i.ibb.co.com/K9rQDcx/3.jpg",
            date: "December 18, 2024"
        },
        {
            id: 4,
            title: "Security Enhancements for User Accounts",
            description: "We've strengthened our security measures to ensure the safety and privacy of all user accounts.",
            imageUrl: "https://i.ibb.co.com/3mKx569/stock-photo-sign-displaying-lost-found-conceptual-photo-things-left-may-retrieve.jpg",
            date: "December 15, 2024"
        },
        {
            id: 5,
            title: "New Feature: Item History Tracker",
            description: "Now you can track the history of lost and found items with our new item history feature.",
            imageUrl: "https://i.ibb.co.com/KyFMNmp/360-F-90922570-pw5zemqk-Psq-A0-EQ16-QQZ3-R9w-XKGFSXT7.jpg",
            date: "December 10, 2024"
        },
        {
            id: 6,
            title: "Mobile App Beta Testing Open!",
            description: "Sign up now to be part of our mobile app beta testing group and get early access to the new app features.",
            imageUrl: "https://i.ibb.co.com/VJQKKdr/depositphotos-9691837-stock-photo-lost-and-found.webp",
            date: "December 5, 2024"
        }
    ];

    return (
        <div className="py-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-8"
            >
                <h2 className="text-3xl font-bold tracking-tight text-gray-800">Latest Announcements</h2>
                <p className="mt-2 text-lg text-gray-600">Stay updated with our latest news and updates.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {announcements.map((announcement) => (
                    <motion.div
                        key={announcement.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            className="h-48 w-full"
                            src={announcement.imageUrl}
                            alt={announcement.title}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{announcement.title}</h3>
                            <p className="mt-2 text-gray-600">{announcement.description}</p>
                            <p className="mt-4 text-sm text-gray-500">{announcement.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
