import Lottie from "lottie-react";
import React, { use } from "react";
import lottieImage from "../assets/lottiefiles/Login.json";
import { AuthContext } from "./../Context/AuthContext/AuthContext";
import SocialLogin from "./SocialLogin";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { signInUser } = use(AuthContext);

  // for back previous page after login
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  console.log('location is signIn page', location);
  

  // for getting form data
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //SignIn user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          {/* apply lottie animation */}
          <Lottie
            animationData={lottieImage}
            style={{ width: "400px" }}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignIn Now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>
            <div className="justify-center items-center text-center">
              <SocialLogin from={from}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
