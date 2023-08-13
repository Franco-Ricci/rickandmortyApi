

// eslint-disable-next-line react/prop-types
export function Pagination({currentPage, setCurrentPage, pages}){
    return(
          
        <div className='buttons__container'>
        <button className='btn' onClick={() => {if(currentPage > 1){setCurrentPage(currentPage-1)}}} disabled={ currentPage === 1}> prev</button>
        <button className='btn' onClick={() => {if(currentPage <= pages){setCurrentPage(currentPage+1)}} } disabled={ currentPage === pages}>next</button>
        </div>
    )
}