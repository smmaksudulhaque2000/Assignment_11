import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaTag, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MostRecent = ({ items }) => {
  const currentDate = new Date();

  const sortedItems = items
    .filter(item => item.status !== "Recovered")
    .map(item => ({
      key: item._id,
      ...item,
      dateDifference: Math.abs(new Date(item.dateLost) - currentDate),
    }))
    .sort((a, b) => a.dateDifference - b.dateDifference)
    .slice(0, 6);

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Most Recent Lost & Found Items</h2>
        <p className="text-lg text-gray-500 w-full lg:w-3/4 mx-auto">
          Browse through the most recent lost and found items posted by users in your area. Whether you've
          misplaced something valuable or found an item that belongs to someone else, this platform helps you
          reconnect with lost belongings. Join the community in helping return lost items or locating
          belongings you've lost. Every post brings someone one step closer to finding what they've been
          searching for. Explore the listings and make a difference by being part of this compassionate
          exchange.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedItems.map(item => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 300,
            }}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-60 rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 flex items-center">
              <FaInfoCircle className="mr-2 text-blue-500" /> {item.title}
            </h4>
            <p className="font-bold text-gray-500 mb-2 flex items-center">
              <FaTag className="mr-2 text-green-500" /> {item.postType}
            </p>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <FaTag className="mr-2 text-purple-500" /> {item.category}
            </p>
            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" /> {item.location}
            </p>
            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <FaCalendarAlt className="mr-2 text-yellow-500" /> {new Date(item.dateLost).toLocaleDateString()}
            </p>
            <Link to={`/items/${item._id}`}>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full flex items-center justify-center"
              >
                View Details
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
      <Link to={"/items"} className="bg-sky-300">
        <button className="w-full p-2 bg-sky-300 font-bold text-xl mt-5">
          See All
        </button>
      </Link>
    </div>
  );
};

export default MostRecent;
