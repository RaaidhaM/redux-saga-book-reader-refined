export const fetchBooksApi = () => {
    return fetch('https://www.anapioficeandfire.com/api/books')
        .then(response => response.json())
        .then(data => ({ data }))
        .catch(err => ({ err }))
}