import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "https://where-is-it-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          toast.error("Session expired. Logging out...", {
            position: "top-right",
            autoClose: 3000,
          });

          logOut()
            .then(() => {
              navigate("/auth/login");
            })
            .catch((err) => {
              console.error("Logout failed:", err);
            });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
