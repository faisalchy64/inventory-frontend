export default function ManageOrders() {
  return (
    <section className="min-h-[500px] flex flex-col gap-10 p-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Manage Orders
      </h1>

      <div className="border rounded-md overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="text-justify text-gray-900">
            <tr className="*:px-3.5 *:py-2.5 border-b">
              <th>Customer</th>
              <th className="text-nowrap">Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-justify text-gray-500">
            <tr className="hover:bg-gray-50 *:px-3.5 *:py-2.5 border-b last:border-b-0">
              <td>0123456789</td>
              <td>Apple</td>
              <td>20 KG</td>
              <td>$15</td>
              <td>$300</td>
              <td>Pending</td>
              <td>
                <button className="block">
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
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
