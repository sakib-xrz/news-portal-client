import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const { signUp, updateUser, verifyEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password !== confirm) {
      setError("Password didn't match");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError(
        "Password must contain at least 1 uppercase alphabetical character"
      );
      return;
    }
    if (!/(?=.*[0-9])/.test(password)) {
      setError("Password must contain at least 1 numeric character");
      return;
    }
    if (!/(?=.[!@#$%^&])/.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }
    if (password.length !== 8) {
      setError("password must be eight characters or longer");
    }
    setError("");

    signUp(email, password)
      .then(() => {
        setError("");
        form.reset();
        updateUserProfile(name, photo);
        handleVerifyEmail();
        toast.success(
          "Account successfully created. Please Verify your E-mail!",
          { duration: 1000 }
        );
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUser(profile)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleCheck = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="w-11/12 lg:w-8/12 mx-auto my-8 p-8 rounded-md sm:p-10 bg-secondary text-neutral">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Register</h1>
      </div>
      <form
        onSubmit={handleRegistration}
        noValidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="confirm" className="text-sm">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
              required
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-2 text-sm">
              Photo Link
            </label>
            <input
              type="photo"
              name="photo"
              id="photo"
              placeholder="Photo Link"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
            />
          </div>
        </div>
        <small>
          <p className="text-error mt-2">{error.split("Firebase:")}</p>
        </small>
        <div className="space-y-2 mt-0">
          <div className="flex items-center -mt-8">
            <input
              onClick={handleCheck}
              type="checkbox"
              className="checkbox checkbox-neutral rounded cursor-pointer h-4 w-4 mr-2"
            />
            <span className="label-text pb-px">
              Accept our{" "}
              <Link to={"/terms"} className="text-primary hover:underline">
                terms and conditions
              </Link>
            </span>
          </div>

          <div className="-mt-8">
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-neutral text-secondary disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={!accepted}
            >
              Register
            </button>
          </div>
          <p className="px-6 text-sm text-center text-neutral">
            Already have an account? <br />
            <Link rel="noopener noreferrer" to="/login" className="underline">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
