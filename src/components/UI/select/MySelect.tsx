
import React
    from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {interfaceCurrency} from '../../../models/interfaceCurrency';

import {
        setBaseCurrencyAction, 
    } from "../../../store/reducers/toolkitSlice";


const MySelect = () => {
  const  dispatch = useAppDispatch();
    const {abbreviationsCurrencies} = useAppSelector(state => state.toolkitSlice);
    const {baseCurrencyObj} = useAppSelector(state => state.toolkitSlice);

  const {currencies} = useAppSelector(state => state.toolkitSlice);
  
    const setBaseCurrency = (par:interfaceCurrency) => {
        dispatch(setBaseCurrencyAction(par))
    }
   
    const selectBaseCurrencyRate = (abbr:string) => {
        let objBaseCurrency = currencies.find(objCurrency=>objCurrency.cc===abbr)
        console.log(objBaseCurrency)
        if(objBaseCurrency)
        {
            setBaseCurrency(objBaseCurrency)
        } else {
            return
        }
    }
  

    return (
        <div className="MySelect">
            <select
                onChange={event => selectBaseCurrencyRate(event.target.value)}
            >
                <option disabled value="">{baseCurrencyObj.cc}</option>
                {abbreviationsCurrencies.map(option =>
                    <option key={option} value={option}
                    >
                        {option}
                    </option>
                )}
            </select>
        </div>
    );
}


export default MySelect;
