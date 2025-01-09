import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Access Denied</h2>
        <p className="mb-4 text-gray-700">
          You do not have permission to access this page. Please contact your
          administrator if you believe this is a mistake.
        </p>
        <Link to="/login" className="text-blue-500 hover:text-blue-700">
          Go back to login
        </Link>
      </div>
    </div>
  );
};

export default Error;
