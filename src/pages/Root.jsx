export default function Root() {
  return (
    <section className="min-h-[500px] flex flex-col gap-10 p-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <article className="h-40 flex flex-col justify-center items-center bg-rose-100 rounded-md">
          <h3 className="text-2xl font-semibold text-gray-700">
            Total Products
          </h3>
          <h3 className="text-2xl font-semibold text-rose-500">100+</h3>
        </article>

        <article className="h-40 flex flex-col justify-center items-center bg-blue-100 rounded-md">
          <h3 className="text-2xl font-semibold text-gray-700">Total Orders</h3>
          <h3 className="text-2xl font-semibold text-blue-500">100+</h3>
        </article>

        <article className="h-40 flex flex-col justify-center items-center bg-green-100 rounded-md">
          <h3 className="text-2xl font-semibold text-gray-700">Total Sales</h3>
          <h3 className="text-2xl font-semibold text-green-500">$100K</h3>
        </article>
      </div>
    </section>
  );
}
