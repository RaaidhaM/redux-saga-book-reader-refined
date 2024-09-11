import { connect } from 'react-redux'
import displayBooks from '../components/displayBooks'
import { bookTitleIsbnSelector, statusSelector } from '../selectors'

// this container will display the books

// Map state from Redux store to props
const mapStateToProps = state => ({
    books: bookTitleIsbnSelector(state),
    status: statusSelector(state)
})

// Connect the Redux store to the BookReader component
export default connect(mapStateToProps)(displayBooks)