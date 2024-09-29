import { useForm } from "react-hook-form";

export default function CreateProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="w-full h-full flex flex-col p-4 overflow-y-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Create Product
      </h1>

      <form
        className="flex flex-col gap-2.5 text-sm text-gray-500 py-10"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="productName" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            className="px-2.5 py-1.5 border outline-none rounded-md"
            {...register("productName", {
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
          {errors && errors.productName && (
            <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
              {errors.productName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="productDescription" className="font-semibold">
            Description
          </label>
          <textarea
            rows="5"
            id="productDescription"
            placeholder="Enter product description"
            className="resize-none px-2.5 py-1.5 border outline-none rounded-md"
            {...register("productDescription", {
              required: {
                value: true,
                message: "Description is required.",
              },
              pattern: {
                value: /^[a-zA-Z\s.]{3,}$/,
                message: "Please enter a valid description.",
              },
            })}
          />
          {errors && errors.productDescription && (
            <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
              {errors.productDescription.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="productPrice" className="font-semibold">
            Price
          </label>
          <input
            type="number"
            min="0"
            id="productPrice"
            placeholder="Enter product price"
            className="px-2.5 py-1.5 border outline-none rounded-md"
            {...register("productPrice", {
              required: {
                value: true,
                message: "Price is required.",
              },
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Please enter a valid price.",
              },
            })}
          />
          {errors && errors.productPrice && (
            <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
              {errors.productPrice.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="productQuantity" className="font-semibold">
            Quantity
          </label>
          <input
            type="number"
            min="0"
            id="productQuantity"
            placeholder="Enter product quantity"
            className="px-2.5 py-1.5 border outline-none rounded-md"
            {...register("productQuantity", {
              required: {
                value: true,
                message: "Quantity is required.",
              },
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Please enter a valid quantity.",
              },
            })}
          />
          {errors && errors.productQuantity && (
            <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
              {errors.productQuantity.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="minimumQuantity" className="font-semibold">
            Minimum Quantity
          </label>
          <input
            type="number"
            min="0"
            id="minimumQuantity"
            placeholder="Enter minimum order quantity"
            className="px-2.5 py-1.5 border outline-none rounded-md"
            {...register("minimumQuantity", {
              required: {
                value: true,
                message: "Minimum quantity is required.",
              },
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Please enter a valid minimum quantity.",
              },
            })}
          />
          {errors && errors.minimumQuantity && (
            <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
              {errors.minimumQuantity.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="productMeasure" className="font-semibold">
            Measurement
          </label>
          <select
            id="productMeasure"
            className="px-2.5 py-1.5 border outline-none rounded-md appearance-none"
            {...register("productMeasure", {
              required: {
                value: true,
                message: "Measurement is required.",
              },
            })}
          >
            <option value="">Select product measurement</option>
            <option value="kg">KG</option>
            <option value="dozen">DOZEN</option>
            <option value="piece">PIECE</option>
          </select>
          {errors && errors.productMeasure && (
            <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
              {errors.productMeasure.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="productImage" className="font-semibold">
            Image
          </label>
          <input
            type="file"
            id="productImage"
            placeholder="Select product image"
            className="px-2.5 py-1.5 border outline-none rounded-md"
            {...register("productImage", {
              required: {
                value: true,
                message: "Image is required.",
              },
            })}
          />
          {errors && errors.productImage && (
            <p className="text-xs text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
              {errors.productImage.message}
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
    </section>
  );
}
