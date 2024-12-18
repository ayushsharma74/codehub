// components/pagination.tsx
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
}) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 7) {
      //Show all pages if number is less than 7
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        //If page number is less than 3 show 1,2,3...last
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        //If page is near to last show 1... last 3
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // if pages in middles show 1 ... current -1 current  + 1  ... last
        pageNumbers.push(1);
        pageNumbers.push("...");
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();
  return (
    <div className="mt-4 flex justify-between items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-white px-7 border border-zinc-800 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800"
      >
        Previous
      </button>

      <div className="flex gap-2 items-center">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return <span key={`ellipsis-${index}`} className="text-zinc-500">...</span>;
          }
          return (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              disabled={currentPage === page}
              className={`px-3 py-1 rounded-md  transition-colors duration-300 ${
                currentPage === page
                  ? "bg-zinc-700 text-white"
                  : "text-white hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="text-white px-7 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border border-zinc-800 hover:bg-zinc-900 font-semibold "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;