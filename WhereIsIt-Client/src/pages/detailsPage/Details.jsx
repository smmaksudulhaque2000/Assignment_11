import React, { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import Loading from "../../components/Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const Details = () => {
  const { user } = useContext(AuthContext);
  const item = useLoaderData();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recoveredLocation, setRecoveredLocation] = useState("");
  const [recoveryDate, setRecoveryDate] = useState(new Date());
  const [isRecovered, setIsRecovered] = useState(false);

  useEffect(() => {
    if (item) {
      setData(item);
      setIsRecovered(item?.status === "Recovered");
      setIsLoading(false);
    }
  }, [item]);

  const handleSubmit = () => {
    if (!recoveredLocation || !recoveryDate) {
      Swal.fire({
        title: "Warning!",
        text: "Please provide all required fields before submitting.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      return;
    }

    const recoveryInfo = {
      recoveredLocation,
      recoveryDate,
      item,
      recoveredBy: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };

    fetch("https://where-is-it-server.vercel.app/recovered", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recoveryInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          return fetch(
            `https://where-is-it-server.vercel.app/items/${item._id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ status: "Recovered" }),
            }
          );
        }
      })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Item marked as recovered successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        setIsRecovered(true);
        setIsModalOpen(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-6 my-10 max-w-4xl mx-auto text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">{data?.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src={data?.imageUrl}
            alt={data?.title}
          />
        </div>
        <div>
          {data?.status && (
            <p className="text-lg mb-2 bg-green-500 text-center text-black p-2 rounded">
              <strong>{data.status}</strong>
            </p>
          )}
          <p className="text-lg mb-2">
            <strong>Category:</strong> {data?.category}
          </p>
          <p className="text-lg mb-2">
            <strong>Location:</strong> {data?.location}
          </p>
          <p className="text-lg mb-2">
            <strong>Post Type:</strong> {data?.postType}
          </p>
          {data?.postType === "Found" && (
            <p className="text-lg mb-2">
              <strong>Date Found:</strong>{" "}
              {data?.dateLost && new Date(data?.dateLost).toLocaleDateString()}
            </p>
          )}
          {data?.postType === "Lost" && (
            <p className="text-lg mb-2">
              <strong>Date Lost:</strong>{" "}
              {data?.dateLost && new Date(data?.dateLost).toLocaleDateString()}
            </p>
          )}

          <p className="text-lg mb-4">
            <strong>Description:</strong> {data?.description}
          </p>
          <p className="text-lg">
            <strong>Contact Info:</strong> Name: {data?.contactInfo.name},
            Email: {data?.contactInfo.email}
          </p>
        </div>
      </div>

      {data?.postType === "Lost" && (
        <button
          className={`mt-6 px-6 py-3 rounded-lg transition-all shadow-md ${
            isRecovered
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={() => !isRecovered && setIsModalOpen(true)}
          disabled={isRecovered}
        >
          Found This!
        </button>
      )}
      {data?.postType === "Found" && (
        <button
          className={`mt-6 px-6 py-3 rounded-lg transition-all shadow-md ${
            isRecovered
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
          onClick={() => !isRecovered && setIsModalOpen(true)}
          disabled={isRecovered}
        >
          This is Mine!
        </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Recovery Details
            </h3>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Recovered Location
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={recoveredLocation}
                onChange={(e) => setRecoveredLocation(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Recovery Date
              </label>
              <DatePicker
                selected={recoveryDate}
                onChange={(date) => setRecoveryDate(date)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">
                Recovered By
              </label>
              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-full"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
                <div>
                  <p className="text-lg font-semibold">{user?.displayName}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {user?.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <div className="flex items-center gap-6">
        <img
          className="w-16 h-16 rounded-full shadow-md"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <div>
          <p className="text-xl font-semibold">{user?.displayName}</p>
          <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
