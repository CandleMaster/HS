import { useState } from "react";

export default function usePagination(data) {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4
    const maxPage = Math.ceil(data.length / itemsPerPage)

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
   return data.slice(begin, end)
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }


  return { next, prev, currentData, currentPage, maxPage }
 }

