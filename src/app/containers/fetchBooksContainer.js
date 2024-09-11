import { connect } from 'react-redux'
import { fetchBooksRequested } from '../actions/userActions'

import { statusSelector } from '../selectors'
import fetchBooks from '../components/fetchBooks'

// this container will load the state with the books

// Map state from Redux store to props
const mapStateToProps = state => ({
    status: statusSelector(state)
})

// Map dispatch actions to props
const mapDispatchToProps = dispatch => ({
    fetchBooks: () => dispatch(fetchBooksRequested())
})

// Connect the Redux store to the fetchBooks component
export default connect(mapStateToProps, mapDispatchToProps)(fetchBooks)