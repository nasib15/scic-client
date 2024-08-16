/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({ count, currentPage = 1, setCurrentPage }) {
  const totalPages = Math.ceil(count / 6);
  const pages = [...Array(totalPages).keys()];
  console.log(currentPage, pages.length, pages);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">6</span> of{" "}
            <span className="font-medium">40</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                currentPage === pages[1] && "hover:cursor-not-allowed"
              }`}
              disabled={currentPage === pages[1]}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            {pages?.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                aria-current="page"
                className={`${
                  currentPage === page + 1
                    ? "bg-lime-500 text-white"
                    : "bg-white text-gray-800"
                } px-3 py-1`}
              >
                {page + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                currentPage === pages.length && "hover:cursor-not-allowed"
              }`}
              disabled={currentPage === pages.length}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className={`h-5 w-5 `} />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
