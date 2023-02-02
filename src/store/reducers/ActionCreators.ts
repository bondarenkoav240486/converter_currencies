import {AppDispatch} from "../store";
import axios from 'axios';
import {interfaceCurrency} from "../../models/interfaceCurrency";
import {toolkitSlice} from "./toolkitSlice";


function addZero(num:number) {
    return num < 10 ? '0' + num : '' + num
}


export const fetchCurrencies = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(toolkitSlice.actions.currenciesFetching())
        const response 
            = 
            await axios.get<interfaceCurrency[]>(
                'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date='
                +
                new Date().getFullYear()
                +
                addZero( new Date().getMonth()+1 )
                +
                addZero( new Date().getDate() )
                +
                '&json'
            )
        dispatch(toolkitSlice.actions.currenciesFetchingSuccess(response.data))
    } catch (e:any) {
        dispatch(toolkitSlice.actions.currenciesFetchingError(e.message))
    }
}
