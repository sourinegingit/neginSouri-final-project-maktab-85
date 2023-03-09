import React, { useState } from 'react'
import { Pagination } from '@mui/material'
const Pagination = () => {
    const [page,setPage]=useState(0);
    const[rowsPerPage,setRowsPerPage]=useState(5)
    const handlePagination=(event,value)=>{
        setPage(value)
    }
  return (
    <div>
<Pagination count={10} color="secondary" onChange={handlePagination}/>
    </div>
  )
}

export default Pagination
