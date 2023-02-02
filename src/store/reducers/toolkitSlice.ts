
import {interfaceCurrency} from '../../models/interfaceCurrency';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCurrencies} from "./ActionCreators";

interface СurrencyState {
    currencies: interfaceCurrency[];
    isLoading: boolean;
    error: string;
    abbreviationsCurrencies: string[];
    baseCurrencyObj: interfaceCurrency;
    message: string;
}

const initialState: СurrencyState = {
    currencies: [],
    isLoading: false,
    error: '',
    abbreviationsCurrencies: ['UAH','PLN','GBP','USD','EUR','JPY',],
    baseCurrencyObj: {
                    cc:'UAH',
                    rate:1,
                    r030:0,
                    txt:'Українська гривня',
                    exchangedate:''
                },
    message: '',             
}

export const toolkitSlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        currenciesFetching(state, ){
            state.isLoading = true
        },
        currenciesFetchingSuccess(state, action:PayloadAction<interfaceCurrency[]>){
            state.isLoading = false;
            state.error = 'no error';
            state.currencies = action.payload;
            state.currencies.push(
                {
                    cc:'UAH',
                    rate:1,
                    r030:0,
                    txt:'Українська гривня',
                    exchangedate:''
                }
            )
        },
        currenciesFetchingError(state,action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        setBaseCurrencyAction(state,action:PayloadAction<interfaceCurrency>){
            state.baseCurrencyObj = action.payload
        },
        setMessageAction(state,action:PayloadAction<string>){
            state.message = action.payload
        },
    },
})

export default toolkitSlice.reducer;

export const {  
    setBaseCurrencyAction,
    setMessageAction,
} = toolkitSlice.actions