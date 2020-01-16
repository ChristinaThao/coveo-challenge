import React from 'react';

import SearchResultPage from './pages/SearchResultPage';
import SearchBar from './components/SearchBar/SearchBar';

import { SearchWordProvider } from './context/SearchWordContext';
import { DisplayedProductsProvider } from './context/DisplayedProductsContext';
import { UriProvider } from './context/UriContext';

require('dotenv').config();

function App () {
    return (
        <div>
            <UriProvider>
                <SearchWordProvider>
                    <DisplayedProductsProvider>
                        <SearchBar/>
                        <SearchResultPage/>
                    </DisplayedProductsProvider>
                </SearchWordProvider>
            </UriProvider>
        </div>
    )
};

export default App;