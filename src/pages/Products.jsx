import Card from "../components/Card";

export default function Products() {
  return (
    <section className="w-4/5 min-h-[500px] flex flex-col gap-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Browse and purchase from a wide range of suppliers, all from a single,
        easy-to-use platform.
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
