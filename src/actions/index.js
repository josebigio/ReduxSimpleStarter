const selectBook =  (book)=> {
    console.log(`a book has been selected: ${book}`);
    return {
        type:'BOOK_SELECTED',
        payload:book
    };
}

export {selectBook};