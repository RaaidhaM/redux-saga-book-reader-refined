// Selector to retrieve books from the state
export const bookSelector = state => state.books

// Selector to retrieve book title and ISBN from the state
export const bookTitleIsbnSelector = state => state.books.books.map(book => ({
    title: book.name,
    isbn: book.isbn
}));

// Selector to retrieve error from the state
export const errorSelector = state => state.books.error

// Selector to retrieve the request status from the state
export const statusSelector = state => state.books.status