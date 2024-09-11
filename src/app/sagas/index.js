import { all, takeLeading } from 'redux-saga/effects'
import { fetchBooks } from './fetchBooksSaga'
import { fetchBooksRequested } from '../actions/userActions'


export default function * root ()  {
yield all ([
    takeLeading(fetchBooksRequested, fetchBooks)
])
}