import React from 'react'
import { INPROGRESS, COMPLETED, FAILED } from '../entities/status'

const fetchBooks = ({ status, fetchBooks}) => {
    return (
        <div>
        <button onClick={fetchBooks}>Fetch Books</button>
        {status === INPROGRESS && <p>Processing Request...</p>}
        {status === COMPLETED && <p>Books fetched successfully</p>}
        {status === FAILED && <p>Failed to fetch books</p>}
        </div>
    )
}

export default fetchBooks