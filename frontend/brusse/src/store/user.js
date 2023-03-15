const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: ""
    },
    reducers: {
        add(state, action) {
            state.name = action.payload
        },
        remove(state) {
            state.name = "";
        },
    },
})

export const { add, remove } = userSlice.actions;
export default userSlice.reducer;