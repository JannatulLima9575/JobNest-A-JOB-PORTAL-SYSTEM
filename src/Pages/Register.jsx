import React, { use } from 'react';
import Lottie from 'lottie-react';
import lottieImage from '../assets/lottiefiles/Register.json';
import { AuthContext } from './../Context/AuthContext/AuthContext';

const Register = () => {
    const {createUser} = use(AuthContext);

    // for getting form data
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //create user with email and password
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        // catch error
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      {/* apply lottie animation */}
      <Lottie animationData={lottieImage}  style={{width: '400px'}} loop={true} ></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='text-5xl font-bold'>Register Now!</h1>
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;