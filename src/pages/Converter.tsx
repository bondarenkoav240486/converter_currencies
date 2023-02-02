
import React
        from 'react';
import {toolkitSlice} from "../store/reducers/toolkitSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import Loader from "../components/UI/Loader/Loader";
import {
        setMessageAction, 
    } from "../store/reducers/toolkitSlice";

const Converter = () => {
    const  dispatch = useAppDispatch();
    const {currencies} = useAppSelector(state => state.toolkitSlice);
    const {error} = useAppSelector(state => state.toolkitSlice);
    const {isLoading} = useAppSelector(state => state.toolkitSlice);
    const {message} = useAppSelector(state => state.toolkitSlice);
    const setMessage = (par:string) => {
        dispatch(setMessageAction(par))
    }

  
    
    const converterFunction = (e:any) => {
        let arrOfInputWords = e.target.value.split(' ');
        let arrCurrenciesAbbreviations = currencies.map((currency) => {
                return currency.cc
            })
          
        if (
            +arrOfInputWords[0] +'' === NaN+''
            ||
            arrOfInputWords[0] === " "
            ||
            arrOfInputWords[0] === ""
        ) { 
           e.target.value=''
        } else {
           // setMessage('')
        }

    
        if (  
            arrOfInputWords.length >= 4
            &&
            arrOfInputWords[3]!=''
            &&
            arrOfInputWords[2] === 'in'
            &&
            arrCurrenciesAbbreviations.includes(
                arrOfInputWords[1].toUpperCase()
            )
            &&   
            arrCurrenciesAbbreviations.includes(
                arrOfInputWords[3].toUpperCase()
            )
        ){ 
            console.log( '+++',4, arrOfInputWords  )
            let  currency1;
            let  rate1;
            currency1= 
            currencies.find(
                elem => elem.cc===arrOfInputWords[1].toUpperCase()
            );
            if (currency1) {
                rate1 = currency1.rate
            }

            let  currency2;
            let  rate2;
            currency2= 
            currencies.find(
                elem => elem.cc===arrOfInputWords[3].toUpperCase()
            );
            if (currency2) {
                rate2 = currency2.rate
            }

            let amounCurrency2 
                = 
                (
                    (
                        +arrOfInputWords[0]
                        *
                        (rate1?rate1:NaN)
                    )/(rate2?rate2:NaN)
                )
                .toFixed(4)

                setMessage(
                    arrOfInputWords[0]
                    +' '+
                    arrOfInputWords[1]
                    + " = "
                    +
                    amounCurrency2
                    +' '+
                    arrOfInputWords[3]
                )
        } else {
           setMessage('введіть данні у форматі: 15 usd in uah')
        }
    }

    return (
        <div className="converter">
            <input 
                onChange = {(e)=>converterFunction(e)} 
                // onBlur = { ()=>{setMessage('')} } 
                onFocus = {(e)=>converterFunction(e)}
                // placeholder='введіть данні у форматі: 15 usd in uah' 
            />
            <div className="info">
                {message}
            </div>
        </div>
    );
}


export default Converter;
