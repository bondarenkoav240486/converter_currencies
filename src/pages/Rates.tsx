
import React
    // , {useEffect} 
    from 'react';
import {toolkitSlice} from "../store/reducers/toolkitSlice";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {interfaceCurrency} from '../models/interfaceCurrency';
import MySelect from '../components/UI/select/MySelect';
import Loader from "../components/UI/Loader/Loader";
import {
        setBaseCurrencyAction, 
    } from "../store/reducers/toolkitSlice";


const Rates = () => {
    const  dispatch = useAppDispatch();
    const {currencies} = useAppSelector(state => state.toolkitSlice);
    const {error} = useAppSelector(state => state.toolkitSlice);
    const {isLoading} = useAppSelector(state => state.toolkitSlice);
    const {baseCurrencyObj} = useAppSelector(state => state.toolkitSlice);
    const {abbreviationsCurrencies} = useAppSelector(state => state.toolkitSlice);

    let arrRatesObj =
        abbreviationsCurrencies.map(abbr => {
                return currencies.find(objCurrency=>objCurrency.cc===abbr)
            }
        )

    let filteredArrRatesObj
        = 
        arrRatesObj?
        arrRatesObj.filter(objCurrency=>objCurrency?.cc!=baseCurrencyObj.cc)
        :
        [] 

    return (
        <div className="rates">
             <div className="select_container">
                <div className="select_content">
                    <MySelect/>
                </div>
            </div>
            <div className="list">
            {
                filteredArrRatesObj.map((rateObj,i) =>
                    <div 
                    key={i}
                    className="rate_item"
                    >
                        {
                            rateObj
                            ?
                            <>
                                <span>
                                    {rateObj.cc}
                                </span>
                                <span>
                                    { (baseCurrencyObj.rate/rateObj.rate).toFixed(4) }
                                </span>
                            </>    
                            :
                            ''
                        }
                    </div>
                )
            }
            </div>
        </div>
    );
}


export default Rates;
