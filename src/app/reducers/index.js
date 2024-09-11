import { combineReducers } from "redux"
import booksReducer from "./booksReducer"

// Combine all reducers here
const rootReducer = combineReducers({
    // creating an object called books in the state to store book data
    books: booksReducer
})

export default rootReducer
