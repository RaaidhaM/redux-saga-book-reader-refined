import React from 'react'
import { INPROGRESS, COMPLETED } from '../entities/status'

const displayBooks = ({ books, status }) => {
    return (
        <div>
         {status === INPROGRESS && <ul></ul>}
         {status === COMPLETED &&
           <ul>

              {books.map(book => (
                 <li key={book.isbn}>{book.title}</li>
              ))}
           </ul>
         }
     </div>
      )
}

export default displayBooks