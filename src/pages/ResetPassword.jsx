import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api";
import useGlobal from "../hooks/useGlobal";

export default function ResetPassword() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();
  const { auth } = useGlobal();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await api.patch(`/reset-password/${token}`, data);

      toast.success(res.data.message);
      navigate("/signin");
    } catch (error) {
      toast.error(error.response.data.message);
    }

    reset();
    setLoading(false);
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <section className="w-4/5 min-h-[calc(100vh-64.8px)] md:min-h-[calc(100vh-68.8px)] flex justify-center items-center mx-auto">
      <div className="w-full md:w-80 px-3.5 py-5 bg-white rounded-md shadow">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Reset Password
        </h1>
        <form
          className="flex flex-col gap-2.5 text-sm text-gray-500 my-2.5"
          onSubmit={handleSubmit(onSubmit)}
        >
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

          <div className="flex justify-between items-center gap-1.5 text-xs text-blue-700">
            <Link to="/signin">Back to signin</Link>
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
