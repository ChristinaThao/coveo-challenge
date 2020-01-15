import React from 'react';

import SearchResultPage from './pages/SearchResultPage';
import SearchBar from './components/SearchBar/SearchBar';

import { SearchWordProvider } from './context/SearchWordContext';
import { DisplayedProductsProvider } from './context/DisplayedProductsContext';

require('dotenv').config();

function App () {
    return (
        <div>
            <SearchWordProvider>
                <DisplayedProductsProvider>
                    <SearchBar/>
                    <SearchResultPage/>
                </DisplayedProductsProvider>
            </SearchWordProvider>
        </div>
    )
};

export default App;