import { useState } from "react";

export default function Product() {
  const [count, setCount] = useState(0);

  return (
    <section className="w-4/5 min-h-[500px] flex flex-col md:flex-row gap-10 py-10 mx-auto">
      <div className="w-full lg:h-[450px] rounded-3xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/27835751/pexels-photo-27835751/free-photo-of-a-tree-with-green-apples-on-it.jpeg?auto=compress&w=600"
          alt="Product image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col gap-3.5">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Green Apple
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">$4.99</h2>
        <p className="text-gray-500">
          Fresh and organic apple. Fresh and organic apple. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Sapiente veniam optio porro
          nihil nam ducimus culpa ut laboriosam sed accusamus? Impedit, numquam
          totam optio perspiciatis aliquam nihil doloremque ratione sapiente in
          molestiae quo architecto, facilis laborum dignissimos illum velit.
        </p>

        <h3 className="uppercase text-gray-700">100 kg available in stock</h3>

        <div className="flex items-center gap-2.5">
          <button
            className="hover:bg-gray-50 p-2.5 border rounded-md"
            onClick={() => count > 0 && setCount((prevCount) => prevCount - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-gray-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <input
            type="number"
            name="quantity"
            className="w-20 text-center p-2.5 border rounded-md appearance-none [&::-webkit-outer-spin-button]:margin-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:margin-0 [&::-webkit-inner-spin-button]:appearance-none"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />

          <button
            className="hover:bg-gray-50 p-2.5 border rounded-md"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <button className="text-white bg-gray-900 hover:bg-gray-800 py-2.5 my-5 rounded-md">
          Confirm Order
        </button>
      </div>
    </section>
  );
}
