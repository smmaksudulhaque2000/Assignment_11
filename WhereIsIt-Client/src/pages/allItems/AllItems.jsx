import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaUserAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiLinuxfoundation } from "react-icons/si";
import { HiOutlineSearch } from "react-icons/hi";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet";

const AllItems = () => {
  const items = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const pageOptions = [6, 9, 12, 18, 24];

  useEffect(() => {
    if (items) {
      setLoading(false);
      setFilteredItems(items);
    }
  }, [items]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Items | WhereIsIt</title>
        <link rel="canonical" href="http://localhost:5173/items" />
      </Helmet>
      <div className="p-6">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center w-4/4 lg:w-3/4 mx-auto">
          All Lost & Found Items: Explore, Search, and Help Reunite!
        </h1>
        <p className="text-lg lg:text-xl text-gray-500 mb-6 text-center w-4/4 lg:w-3/4 mx-auto">
          Browse through all the lost and found items posted by others. Whether
          you're searching for something you lost or returning something you
          found, this section makes it easy to connect and help reunite items
          with their rightful owners. Start exploring now and be part of a
          community that helps others!
        </p>

        <div className="relative mb-6">
          <HiOutlineSearch className="absolute top-3.5 left-4 text-gray-500 dark:text-gray-400 text-lg" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by title or location..."
            className="w-full p-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>

        {currentItems.length === 0 ? (
          <div className="flex justify-center items-center w-full h-64 bg-gradient-to-r from-red-200 to-yellow-300 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
            <p>
              No items found matching your search criteria. Please try again
              with different keywords.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="card bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-60"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    {item.title}
                  </h4>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1">
                      <SiLinuxfoundation className="mr-2 text-sky-500" />
                      <span className="font-medium">PostType: </span>{" "}
                      {item.postType}
                    </p>
                    {item?.status && (
                      <p className="bg-green-500 text-center text-black rounded p-1 lg:p-2 md:text-xs">
                        <strong>{item.status}</strong>
                      </p>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1">
                    <FaTag className="mr-2 text-sky-500" />
                    <span className="font-medium">Category: </span>{" "}
                    {item.category}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-1">
                    <FaMapMarkerAlt className="mr-2 text-sky-500" />
                    <span className="font-medium">Location: </span>{" "}
                    {item.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-1">
                    <FaCalendarAlt className="mr-2 text-sky-500" />
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(item.dateLost).toLocaleDateString()}
                  </p>
                  <p className="text-gray-800 dark:text-gray-300 flex items-center gap-1">
                    <FaTag className="mr-2 text-sky-500" />
                    <span className="font-medium">Description: </span>{" "}
                    {item.description}
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-gray-700 dark:text-gray-300 text-sm flex items-center">
                    <FaUserAlt className="mr-2 text-sky-500" />
                    <span className="font-medium">Contact: </span>{" "}
                    {item.contactInfo.name} -
                    <FaEnvelope className="mx-2 text-sky-500" />{" "}
                    {item.contactInfo.email}
                  </p>
                </div>
                <Link to={`/items/${item._id}`} className="btn">
                  <button>View Details</button>
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-4">
            <label
              htmlFor="items-per-page"
              className="text-gray-700 dark:text-gray-200"
            >
              Items per page:
            </label>
            <select
              id="items-per-page"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:bg-gray-800 dark:text-gray-200"
            >
              {pageOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-lg text-gray-700 dark:text-gray-200">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
