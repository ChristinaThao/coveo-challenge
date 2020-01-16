import React from 'react';

import SearchResultPage from './pages/SearchResultPage';
import SearchBar from './components/SearchBar/SearchBar';

import { UriProvider } from './context/UriContext';
import { ApiGetParamsProvider} from './context/ApiGetParamsContext';

require('dotenv').config();

function App () {
    return (
        <div>
            <ApiGetParamsProvider>
                <UriProvider>
                    <SearchBar/>
                    <SearchResultPage/>
                </UriProvider>
           </ApiGetParamsProvider>
        </div>
    )
};

export default App;