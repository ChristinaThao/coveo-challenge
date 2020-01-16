import React from 'react';

import SearchResultPage from './pages/SearchResultPage';
import SearchBar from './components/SearchBar/SearchBar';

import { DisplayedProductsProvider } from './context/DisplayedProductsContext';
import { UriProvider } from './context/UriContext';
import { ApiGetParamsProvider} from './context/ApiGetParamsContext';

require('dotenv').config();

function App () {
    return (
        <div>
            <ApiGetParamsProvider>
                <UriProvider>
                    <DisplayedProductsProvider>
                        <SearchBar/>
                        <SearchResultPage/>
                    </DisplayedProductsProvider>
                </UriProvider>
           </ApiGetParamsProvider>
        </div>
    )
};

export default App;