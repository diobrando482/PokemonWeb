import React from 'react'

const Pagination = (
    {pageCount, 
        page,
         handleNext,
          handlePrev }
    ) => {
  return (
    <div className='pagination'>
        <button onClick={handlePrev}>Prev</button>
            {page} / {pageCount}
            <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination