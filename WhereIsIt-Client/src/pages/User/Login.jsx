import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthContext from "../../context/AuthContext/AuthContext";
import auth from "../../firebase/firebase.init";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully Logged In!");
        axios
          .post("https://where-is-it-server.vercel.app/jwt", user, {
            withCredentials: true,
          });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully Logged In!");
        form.reset();
        const userr = { email: email };
        axios
          .post("https://where-is-it-server.vercel.app/jwt", userr, {
            withCredentials: true,
          });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

   // ----------------------------Forget password------------------Start
  // const handleForgetPassword = () => {
  //   const email = emailRef.current.value;
  //   if (!email) {
  //     toast.error("Please Provide a valid email address");
  //   } else {
  //     sendPasswordResetEmail(auth, email)
  //       .then(() => {
  //         toast.success("Password Reset email sent! Please check your email");
  //         emailRef.current.value = "";
  //       })
  //       .catch((error) => {
  //         toast.error(error.message);
  //       });
  //   }
  // };
  // ----------------------------Forget password------------------END

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-700">Login now!</h1>
            <p className="py-6 text-gray-500">
              Join us in making a difference this winter! Log in to donate warm
              clothing and spread the warmth to those in need. Your contribution
              can help bring smiles and comfort to countless lives. Together,
              let's make this winter cozy for everyone!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[52px]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-blue-700"
                >
                  Forgot password?
                </a>
              </label>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-gray-500">
                  Login
                </button>
                <div className="divider">OR</div>
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="bg-gray-400 h-10 w-10 rounded-full mx-auto my-2 flex items-center justify-center"
                >
                  <FaGoogle className="text-2xl" />
                </button>
              </div>
            </form>
            <p className="text-center py-2">
              New to this website? Please!{" "}
              <Link className="text-blue-500" to="/auth/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
