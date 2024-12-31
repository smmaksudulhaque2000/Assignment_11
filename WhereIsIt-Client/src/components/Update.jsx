import Swal from "sweetalert2";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import Lottie2 from "./Lottie2";

const Update = () => {
  const { user } = useContext(AuthContext);
  const item = useLoaderData();
  const [dateLost, setDateLost] = useState(new Date(item?.dateLost));

  const handleUpdate = async (event) => {
    event.preventDefault();
    const postType = event.target.postType.value;
    const title = event.target.title.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const location = event.target.location.value;
    const imageUrl = event.target.imageUrl.value;

    // Check if all values are the same as the existing item
    if (
      postType === item?.postType &&
      title === item?.title &&
      description === item?.description &&
      category === item?.category &&
      location === item?.location &&
      imageUrl === item?.imageUrl &&
      dateLost.toISOString() === item?.dateLost
    ) {
      Swal.fire({
        title: "No Changes Detected",
        text: "Please make some changes before updating.",
        icon: "info",
        confirmButtonText: "OK",
      });
      return;
    }

    const updateItem = {
      postType,
      imageUrl,
      title,
      description,
      category,
      location,
      dateLost: dateLost.toISOString(),
      contactInfo: item?.contactInfo,
    };

    fetch(`https://where-is-it-server.vercel.app/items/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Item Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="max-w-4xl w-full mx-auto p-6 bg-white rounded-lg shadow-lg my-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">
          Update Lost & Found Item
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Post Type</span>
            </label>
            <select
              name="postType"
              defaultValue={item?.postType}
              className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            >
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Image URL</span>
            </label>
            <input
              type="url"
              name="imageUrl"
              defaultValue={item?.imageUrl}
              placeholder="Enter image URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={item?.title}
              placeholder="Enter title"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={item?.description}
              placeholder="Enter description"
              className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            ></textarea>
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Category</span>
            </label>
            <select
              name="category"
              defaultValue={item?.category}
              className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            >
              <option value="pets">Pets</option>
              <option value="documents">Documents</option>
              <option value="gadgets">Gadgets</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Location</span>
            </label>
            <input
              type="text"
              name="location"
              defaultValue={item?.location}
              placeholder="Enter location"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Date Lost</span>
            </label>
            <DatePicker
              selected={dateLost}
              onChange={(date) => setDateLost(date)}
              dateFormat="yyyy-MM-dd"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Contact Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              className="input input-bordered w-full bg-gray-100 focus:outline-none"
              readOnly
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Contact Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              className="input input-bordered w-full bg-gray-100 focus:outline-none"
              readOnly
            />
          </div>

          <button
            type="submit"
            className="btn bg-slate-600 w-full py-3 text-white font-semibold text-lg rounded-lg hover:bg-sky-700"
          >
            Update Item
          </button>
        </form>
      </div>
      <div className="max-w-4xl w-full mx-auto p-6 my-10">
        <Lottie2></Lottie2>
      </div>
    </div>
  );
};

export default Update;
