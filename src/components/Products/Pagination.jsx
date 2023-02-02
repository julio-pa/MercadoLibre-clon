import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ElementCard from './ElementCard';



function PaginatedItems(props) {
  const { data } = props

  // We start with an empty list of data.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6

  useEffect(() => {
    // Fetch data from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='bg-white overflow-hidden rounded-md p-5 mb-3'>
        {
          currentItems?.map((item) => (
            <>
              <ElementCard
                key={item.id}
                img={item.image}
                product={item.title}
                price={item.price}
              />
              <hr />
            </>
          ))
        }
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="siguiente >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< anterior"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName='active'

      />
    </>
  );
}


export default PaginatedItems;
