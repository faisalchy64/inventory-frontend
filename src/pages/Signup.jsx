import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (payload) => {
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_ORIGIN}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.status === 409) {
        throw new Error(data.message);
      }

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }

    reset();
    setLoading(false);
  };

  return (
    <section className="w-4/5 min-h-[calc(100vh-64.8px)] md:min-h-[calc(100vh-68.8px)] flex justify-center items-center mx-auto">
      <div className="w-full md:w-80 px-3.5 py-5 bg-white rounded-md shadow">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Signup
        </h1>
        <form
          className="flex flex-col gap-2.5 text-sm text-gray-500 my-2.5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              autoComplete="off"
              className="px-2.5 py-1.5 border outline-none rounded-md"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required.",
                },
                pattern: {
                  value: /^[a-zA-Z\s]{3,}$/,
                  message: "Please enter a valid name.",
                },
              })}
            />
            {errors && errors.name && (
              <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              className="px-2.5 py-1.5 border outline-none rounded-md"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email.",
                },
              })}
            />
            {errors && errors.email && (
              <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-2.5 py-1.5 border outline-none rounded-md"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required.",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "Minimum 8 characters neeeded (at least one letter, one digit and one special character).",
                  },
                })}
              />
              <span
                className="text-xs font-medium absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? "Hide" : "Show"}
              </span>
            </div>
            {errors && errors.password && (
              <p className="text-xs leading-4 text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              className="px-2.5 py-1.5 border outline-none rounded-md appearance-none"
              {...register("role", {
                required: {
                  value: true,
                  message: "Role is required.",
                },
              })}
            >
              <option value="">Select your role</option>
              <option value="user">USER</option>
              <option value="supplier">SUPPLIER</option>
            </select>
            {errors && errors.role && (
              <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                {errors.role.message}
              </p>
            )}
          </div>

          <div className="w-fit flex flex-col gap-0.5 text-xs text-blue-700">
            <Link to="/signin">Already have an account?</Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="font-semibold text-white bg-gray-900 hover:bg-gray-800 px-2.5 py-1.5 rounded-md"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
