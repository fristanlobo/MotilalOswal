import { createSlice } from '@reduxjs/toolkit'

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        Transactions: null,
        Salary: null
    },
    reducers: {
        addTransaction: (state, action) => {
            state.Transactions = action.payload;
        },
        salary: (state, action) => {
            state.Salary = action.payload
        }
    }
})
export const { addTransaction,salary } = transactionSlice.actions;
export default transactionSlice.reducer;
