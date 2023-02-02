import React from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import Converter from '../pages/Converter';
import Rates from '../pages/Rates';


const AppRouter = () => {

    return (
        <Routes>
            <Route path="converter" element={<Converter />} />
            <Route path="rates" element={<Rates />} />
            <Route
                path="*"
                element={<Converter/>}
            />
            <Route
                path=""
                element={<Converter  />}
            />
        </Routes>
    );
};

export default AppRouter;

