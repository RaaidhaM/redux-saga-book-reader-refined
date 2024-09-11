import { put, call } from 'redux-saga/effects'
import { fetchBooksApi } from '../api/fetchBooksApi'

export function * fetchBooks () {
    const { data, err } = yield call(fetchBooksApi, {})
    if (data) {
        yield put({ type: 'FETCH_BOOKS_SUCCESS', payload: data })
    } else {
        yield put({ type: 'FETCH_BOOKS_FAILURE', payload: err })
    }
}