import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice ({
    name: 'root',
    initialState: {
        book_title: 'Title',
        author: 'Author',
        genre: 'Genre',
        cover_type: 'Cover Type',
        isbn: 'ISBN',
        length: 'Length'
    },
    reducers: {
        chooseBook_title: (state, action) => {state.book_title = action.payload},
        chooseAuthor: (state, action) => {state.author = action.payload},
        chooseGenre: (state, action) => {state.genre = action.payload},
        chooseCover_type: (state, action) => {state.cover_type = action.payload},
        chooseIsbn: (state, action) => {state.isbn = action.payload},
        chooseLength: (state, action) => {state.length = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseBook_title, chooseAuthor, chooseGenre, chooseCover_type, chooseIsbn, chooseLength} = rootSlice.actions