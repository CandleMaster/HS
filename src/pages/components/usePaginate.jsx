import { useState } from "react";

export default function usePagination(points) {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5
    
    const maxPage= 1
    // const maxPage= Math.ceil(points.length / itemsPerPage)

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
   return points.slice(begin, end)
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }


  return [ next, prev, currentData ]
 }

