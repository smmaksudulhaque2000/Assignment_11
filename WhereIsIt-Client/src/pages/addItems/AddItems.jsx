import Swal from "sweetalert2";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddItems = () => {
  const { user } = useContext(AuthContext);
  const [dateLost, setDateLost] = useState(new Date());
  const navigate = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();
    const postType = event.target.postType.value;
    const title = event.target.title.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const location = event.target.location.value;
    const imageUrl = event.target.imageUrl.value;

    // Validation: Check if any field is empty
    if (!postType || !title || !description || !category || !location || !imageUrl) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const contactInfo = {
      name: user?.displayName || "Anonymous",
      email: user?.email || "Unknown",
    };

    const newItem = {
      postType,
      imageUrl,
      title,
      description,
      category,
      location,
      dateLost: dateLost.toISOString(),
      contactInfo,
    };

    fetch("https://where-is-it-server.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          event.target.reset();
          setDateLost(new Date());
          navigate("/myItems");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Item | WhereIsIt</title>
        <link rel="canonical" href="http://localhost:5173/addItems" />
      </Helmet>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-10 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">
          Add Lost OR Found Item
        </h2>
        <form onSubmit={handleAdd}>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Post Type</span>
            </label>
            <select
              name="postType"
              className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select type
              </option>
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
              placeholder="Enter image URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
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
              placeholder="Enter location"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
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
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-medium">Contact Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName || "Anonymous"}
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
              value={user?.email || "Unknown"}
              className="input input-bordered w-full bg-gray-100 focus:outline-none"
              readOnly
            />
          </div>

          <button
            type="submit"
            className="btn bg-slate-600 w-full py-3 text-white font-semibold text-lg rounded-lg hover:bg-sky-700"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
