import { useContext, useState } from "react";
import { FaPen, FaUserCircle } from "react-icons/fa";
import hi from "../../assets/hi.jpg";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext/AuthContext";
import Lottie from "../../components/Lottie";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    if (user) {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          const updatedUser = {
            ...user,
            displayName: name,
            photoURL: photoURL,
          };
          setUser(updatedUser);
          toast.success("Profile updated successfully!");
          setShowModal(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | WhereIsIt</title>
        <link rel="canonical" href="http://localhost:5173/dashboard" />
      </Helmet>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10">
        <div>
          <div className="py-10 p-5 lg:p-10 card bg-gray-100 w-4/4 mx-auto my-20 shrink-0 shadow-2xl flex flex-col justify-center items-center">
            <h3 className="my-2 lg:text-xl font-bold text-purple-500 flex items-center justify-center gap-3">
              <img
                className="w-10 lg:w-16 rounded-full animate-bounce"
                src={hi}
                alt=""
              />
              Welcome, "{user && user?.displayName}"
            </h3>

            {user && user.photoURL ? (
              <div className="w-36 lg:w-64 h-36 lg:h-64 p-3 lg:p-5 hover:animate-spin">
                <img
                  className="w-full h-full rounded-full"
                  src={user?.photoURL}
                  alt="User Photo"
                />
              </div>
            ) : (
              <FaUserCircle className="w-36 lg:w-64 h-36 lg:h-64 p-3 lg:p-5 animate-spin" />
            )}

            <div>
              <h3 className="text-xs lg:text-2xl font-bold">
                Name:{" "}
                <span className="text-gray-500 text-xs lg:text-xl">
                  {user?.displayName || ""}
                </span>
              </h3>
              <h3 className="text-xs lg:text-2xl font-bold">
                Email:{" "}
                <span className="text-gray-500 text-xs lg:text-xl">
                  {user?.email || ""}
                </span>
              </h3>
            </div>

            <button
              className="btn bg-gray-500 my-5 flex items-center gap-2 text-white"
              onClick={() => setShowModal(true)}
            >
              <FaPen /> Update Your Profile
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg w-3/4 lg:w-2/4 p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-600">
                  Update Profile
                </h2>
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={user?.displayName}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="photoURL"
                    >
                      Photo URL
                    </label>
                    <input
                      type="text"
                      id="photoURL"
                      name="photoURL"
                      defaultValue={user?.photoURL || ""}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
                      placeholder="Enter your photo URL"
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <div>
          <Lottie></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
