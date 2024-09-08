import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      {error && (
        <p className="text-red-600">
          <strong>Error:</strong> {error.statusText || error.message}
        </p>
      )}
      <Link
        to="/"
        className="bg-yellow-800 px-3 py-2 rounded-full shadow-md text-yellow-50 mt-10"
      >
        Back to Home Page
      </Link>
    </div>
  );
}
