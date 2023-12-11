import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    onPageChange(selectedPage); // Callback to parent component with selected page
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={handlePageClick}
      containerClassName={"font-segoe flex items-center justify-center pt-[1.7rem] max-w-full"}
      pageClassName={
        "mx-2 sm:w-[2.5rem] w-[1.5rem] sm:h-[2.5rem] h-[1.5rem] bg-primary_blue text-white flex items-center justify-center rounded-full"
      }
      previousClassName={
        "sm:mr-2 mr-1 border border-primary_blue bg-[#EFEFEF] sm:px-3 px-2 py-1 text-primary_blue rounded"
      }
      nextClassName={
        "sm:ml-2 ml-1 border border-primary_blue bg-[#EFEFEF] sm:px-3 px-2 py-1 text-primary_blue rounded"
      }
      activeClassName={"bg-white text-blue-500 border border-primary_blue"}
      disabledClassName={"text-gray-500"}
    />
  );
};

export default Pagination;
