/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center justify-center h-screen">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto ">
          <div className="text-center">
            <h2 className="mb-6 font-extrabold text-7xl md:text-9xl">404</h2>
            <p className="text-lg lg:text-xl font-semibold text-red-600">
              Sorry, An Error occured. <br /> Due to the free hosting, sometimes
              data doesn't come. Please try to refresh the page once.
            </p>
          </div>
          <h2 className="mt-8">
            <Link
              to={"/"}
              className="px-8 py-3 font-semibold rounded bg-lime-400 hover:bg-lime-500 text-gray-800"
            >
              Back to homepage
            </Link>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
