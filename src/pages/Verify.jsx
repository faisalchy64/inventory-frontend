import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api";

export default function Verify() {
  const [show, setShow] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        if (token) {
          const res = await api.get(`/verify/${token}`);

          if (res.status === 200) {
            setShow(true);
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    verifyAccount();
  }, [token]);

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center gap-2.5 bg-gray-50 p-5 border rounded-md">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Account Verification
        </h1>
        <p className="text-gray-500">
          {show
            ? "Account successfully verified. You can now signin."
            : "We are verifying your account..."}
        </p>

        {show && (
          <Link
            to="/signin"
            className="text-white bg-gray-900 hover:bg-gray-800 px-2.5 py-1.5 rounded-md"
          >
            Go to signin page
          </Link>
        )}
      </div>
    </main>
  );
}
