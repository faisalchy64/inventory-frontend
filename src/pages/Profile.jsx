import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Profile() {
  const [show, setShow] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    setShow(false);
  };

  return (
    <section className="w-full h-full flex flex-col gap-10 p-4 overflow-y-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        My Profile
      </h1>

      <div className="flex flex-col gap-5 bg-gray-50 px-3.5 py-2.5 border rounded-md">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h3>

          <button onClick={() => setShow(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-3.5 text-sm text-gray-500">
          <div>
            <h6 className="font-semibold">Name</h6>
            <p>John Doe</p>
          </div>

          <div>
            <h6 className="font-semibold">Email address</h6>
            <p>john@doe.com</p>
          </div>

          <div>
            <h6 className="font-semibold">Role</h6>
            <p>Supplier</p>
          </div>

          <div>
            <h6 className="font-semibold">Address</h6>
            <p>Chittagong, Bangladesh</p>
          </div>
        </div>
      </div>

      {show && (
        <div className="flex flex-col gap-5 bg-white px-3.5 py-2.5 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Update Information
            </h3>

            <button onClick={() => setShow(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form
            className="flex flex-col gap-2.5 text-sm text-gray-500"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
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
              <label htmlFor="address" className="font-semibold">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="px-2.5 py-1.5 border outline-none rounded-md"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required.",
                  },
                  pattern: {
                    value:
                      /^(?=.*\b(\w+\s?)+\b)(?=.*\b(\w+\s?)+\b)(?=.{5,}).*$/,
                    message: "Please enter a valid address.",
                  },
                })}
              />
              {errors && errors.address && (
                <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                  {errors.address.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="font-semibold text-white bg-gray-900 hover:bg-gray-800 px-2.5 py-3 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
