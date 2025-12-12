import { Link } from "react-router";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-50 p-4">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        {/* Large 404 text */}
        <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>

        {/* Page Not Found Message */}
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Home Button/Link */}
        {/* Use the React Router Link component to navigate without a full page reload */}
        <Link
          to="/"
          className="px-6 py-3 bg-violet-600 text-white font-medium rounded-md shadow-md hover:bg-violet-700 transition duration-150 ease-in-out">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
