
import React from 'react';
import {useEffect} from 'react';
import {toolkitSlice} from "./store/reducers/toolkitSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchCurrencies} from "./store/reducers/ActionCreators";
import Converter from "./pages/Converter";
import Rates from "./pages/Rates";
import MySelect from "./components/UI/select/MySelect";
import Loader from "./components/UI/Loader/Loader";
import {
    HashRouter
} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

import './styles/App.css';
import './styles/responsive.css';

function App() {
    const  dispatch = useAppDispatch();
    const {isLoading} = useAppSelector(state => state.toolkitSlice);
    const {error} = useAppSelector(state => state.toolkitSlice);

    useEffect(()=>{
        dispatch(fetchCurrencies());
    },[])

    return (
        <div className="App">
            <HashRouter>
                <Navbar />
                {
                    isLoading 
                    ?  
                        <Loader/>
                    :
                        error != 'no error'
                        ?
                            <div className='message_about_error'>
                                <p>
                                    Виникла помилка або немає
                                    з'єднання. Спробуйте ще раз.
                                </p>
                                <br/>
                                <p>
                                    {error}
                                </p>
                            </div>     
                        :
                            <AppRouter />
                }    
            </HashRouter>
        </div>
    );
}

export default App;




