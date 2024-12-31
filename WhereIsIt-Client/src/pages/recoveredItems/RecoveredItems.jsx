import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../components/Loading";
import {
  FaTable,
  FaThLarge,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaSearch,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import AuthContext from "../../context/AuthContext/AuthContext";
import useAxiosSecure from "../../components/hooks/useAxiosSecure";
import { toast } from "react-toastify";

const RecoveredItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTableLayout, setIsTableLayout] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedItems, setSortedItems] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user && user.email) {
      setLoading(true);
      axiosSecure
        .get(`/recovered?email=${user.email}`)
        .then((res) => {
          setItems(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
          toast.error(`Error fetching items: ${error.message || "Unknown error occurred"}`, {
            position: "top-right",
            autoClose: 3000,
          });
          setLoading(false);
        });
    }
  }, [user.email]);

  useEffect(() => {
    const sorted = [...items];
    sorted.sort((a, b) => {
      const dateA = new Date(a.item?.dateLost);
      const dateB = new Date(b.item?.dateLost);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setSortedItems(sorted);
  }, [items, sortOrder]);

  const toggleLayout = () => {
    setIsTableLayout(!isTableLayout);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredItems = sortedItems.filter((itemData) =>
    itemData.item?.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  if (!items || items.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">No Recovered Items</h2>
          <p className="text-lg text-gray-600">
            There are no recovered items available at the moment. Please check back later!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recovered Item | WhereIsIt</title>
        <link rel="canonical" href="http://localhost:5173/recovered" />
      </Helmet>
      <div className="recovered-items p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Recovered Items : {items.length}</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={handleSort}
              className="text-xl text-white border p-2 rounded-md bg-gray-500"
            >
              {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
            </button>
            <button
              id="layout-toggle-button"
              className="text-3xl"
              onClick={toggleLayout}
            >
              {isTableLayout ? <FaThLarge /> : <FaTable />}
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-full max-w-4xl flex items-center border border-gray-300 rounded-md p-2">
            <FaSearch className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search by Category"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-2 outline-none border-none"
            />
          </div>
        </div>

        {isTableLayout ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Item</th>
                  <th className="border border-gray-300 px-4 py-2">Item Category</th>
                  <th className="border border-gray-300 px-4 py-2">Post Type</th>
                  <th className="border border-gray-300 px-4 py-2">Date Lost/Found</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Recovered Location</th>
                  <th className="border border-gray-300 px-4 py-2">Recovery Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((itemData, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={itemData.item?.imageUrl}
                        alt={itemData.item?.title}
                        className="w-full h-24 object-cover"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {itemData.item?.category}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {itemData.item?.postType}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {new Date(itemData.item?.dateLost).toLocaleDateString()}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {itemData.recoveredBy?.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {itemData.recoveredLocation}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {new Date(itemData.recoveryDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((itemData, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-4 shadow-md bg-white flex flex-col text-center"
              >
                <img
                  src={itemData.item?.imageUrl}
                  alt={itemData.item?.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {itemData.item?.title}
                </h3>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaTag /> Category: {itemData.item?.category}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaCalendarAlt /> {new Date(itemData.item?.dateLost).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaEnvelope /> Email: {itemData.recoveredBy?.email}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaMapMarkerAlt /> Location: {itemData.recoveredLocation}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaCalendarAlt /> Recovery Date: {new Date(itemData.recoveryDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecoveredItems;
