/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({ count, currentPage = 1, setCurrentPage }) {
  const totalPages = Math.ceil(count / 6);
  const pages = [...Array(totalPages).keys()];

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-col md:flex-row sm:flex-1 items-center mx-auto md:justify-between gap-4">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{(currentPage - 1) * 6 + 1}</span> to{" "}
            <span className="font-medium">
              {currentPage * 6 <= 40 ? currentPage * 6 : 40}
            </span>{" "}
            of <span className="font-medium">40</span> results
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
