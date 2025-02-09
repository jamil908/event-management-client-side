import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../hooks/utilities/utils";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const image = data.file[0];
    try {
      const photoURL = await imageUpload(image);
      await createUser(data.email, data.password);
      await updateUserProfile(data.name, photoURL);
      Swal.fire({
        title: "Sign Up Successful!",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    googleSignIn()
      .then(() => {
        Swal.fire({ title: "Google Login Successful!", icon: "success" });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({ title: "Error!", text: error.message, icon: "error" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center pt-20 min-h-screen bg-base-200 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password must be at least 6 characters and contain one uppercase letter, one lowercase letter, one number, and one special character.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Profile Picture</label>
            <input type="file" {...register("file", { required: true })} className="file-input w-full" />
            {errors.file && <p className="text-red-500 text-sm">Please upload an image</p>}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4 flex items-center justify-center"
          >
            {loading ? <TbFidgetSpinner className="animate-spin" /> : "Sign Up"}
          </button>
        </form>

        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center"
        >
          <FaGoogle className="mr-2" /> {loading ? "Loading..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
};

export default Register;
