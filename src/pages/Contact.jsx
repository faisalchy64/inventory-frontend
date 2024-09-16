import contact from "../assets/contact.jpg";

export default function Contact() {
  return (
    <section className="w-4/5 min-h-[500px] flex flex-col gap-10 py-10 mx-auto">
      <div className="h-[350px] rounded-3xl overflow-hidden">
        <img
          src={contact}
          alt="Contact image"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Get in touch with us
      </h1>

      <div className="flex flex-col gap-3.5">
        <p className="text-sm text-gray-500">
          At Xventory, we’re here to help you every step of the way. Whether you
          have questions about our platform, need support with your account, or
          want to learn more about how we can help your business, our team is
          ready to assist you.
        </p>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-semibold text-gray-900">
            Contact information
          </h3>
          <ul className="text-sm text-gray-500">
            <li className="flex flex-col gap-0.5">
              <span className="font-bold text-gray-700">Email</span>
              <span>support@xventory.com</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-bold text-gray-700">Phone</span>
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-bold text-gray-700">Address</span>
              <span>123 Main St, Anytown, USA</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-bold text-gray-700">Office hours</span>
              <span>Mon - Fri, 9AM - 5PM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
