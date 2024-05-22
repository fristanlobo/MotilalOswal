import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../slices/TransactionSlice';

const appStore = configureStore({
    reducer: {
        transaction: transactionReducer,
    }
})

export default appStore;