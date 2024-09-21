export default function ManageOrders() {
  return (
    <section className="min-h-[500px] flex flex-col gap-10 p-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Manage Orders
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto font-semibold">
          <thead className="text-justify text-white bg-gray-900">
            <tr>
              <th>Customer</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="">
              <td>0123456789</td>
              <td>Apple</td>
              <td>20KG</td>
              <td>$15</td>
              <td>$300</td>
              <td className="flex gap-2.5">
                <button className="text-xs text-blue-500 bg-blue-100 px-2.5 py-1.5 rounded-3xl">
                  Pending
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
