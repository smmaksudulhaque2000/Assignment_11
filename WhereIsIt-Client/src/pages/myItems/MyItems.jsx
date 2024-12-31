import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaEdit, FaTrashAlt, FaSearch } from "react-icons/fa";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from "axios";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [postTypeFilter, setPostTypeFilter] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/myItems?email=${user.email}`)
        .then((res) => {
          setItems(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
          setLoading(false);
        });
    }
  }, [user?.email, axiosSecure]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://where-is-it-server.vercel.app/items/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setItems((prevItems) => prevItems.filter((item) => item._id !== _id));
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          })
          .catch((error) => console.error("Error deleting item:", error));
      }
    });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.location.toLowerCase().includes(searchQuery)
    )
    .filter((item) => (postTypeFilter ? item.postType === postTypeFilter : true));

  if (loading) return <Loading />;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Items | WhereIsIt</title>
        <link rel="canonical" href="http://localhost:5173/myItems" />
      </Helmet>
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center w-4/4 lg:w-3/4 mx-auto">
          Manage Your Items: View, Update, and Delete Your Listings
        </h1>
        <p className="text-lg lg:text-xl text-gray-500 mb-6 text-center w-4/4 lg:w-3/4 mx-auto">
          In this section, you can easily manage the items you've posted.
          Whether you need to view your listings, update the details, or remove
          an item, this page gives you complete control over your content. Keep
          your items up-to-date and organized with just a few clicks!
        </p>
      </div>

      <div className="flex justify-center items-center mb-6 gap-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by Title or Location"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 pl-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setPostTypeFilter("Found")}
            className={`px-6 py-3 rounded ${
              postTypeFilter === "Found"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            Found
          </button>
          <button
            onClick={() => setPostTypeFilter("Lost")}
            className={`px-6 py-2 rounded ${
              postTypeFilter === "Lost"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            Lost
          </button>
        </div>
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <h3 className="text-2xl font-bold mb-4">
          My Items: {filteredItems.length}
        </h3>
        {filteredItems.length === 0 ? (
          <p className="text-center text-4xl font-bold text-gray-900 bg-gray-200 p-20 rounded">
            No items found. Start adding some posts!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-900 shadow-md rounded-md">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <th className="py-2 px-4 text-left">Image</th>
                  <th className="py-2 px-4 text-left">Title</th>
                  <th className="py-2 px-4 text-left">Post Type</th>
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Location</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`border-b ${
                      index % 2 === 0
                        ? "bg-gray-100 dark:bg-gray-800"
                        : "bg-white dark:bg-gray-900"
                    }`}
                  >
                    <td className="py-2 px-4">
                      <img
                        src={item?.imageUrl}
                        alt={item?.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="py-2 px-4">{item?.title}</td>
                    <td className="py-2 px-4">{item?.postType}</td>
                    <td className="py-2 px-4">{item?.category}</td>
                    <td className="py-2 px-4">{item?.location}</td>
                    <td className="py-2 px-4 flex items-center space-x-4 gap-2">
                      <Link to={`/update/${item._id}`}>
                        <button className="text-blue-500 hover:text-blue-700 text-3xl">
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-500 hover:text-red-700 text-2xl"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyItems;
