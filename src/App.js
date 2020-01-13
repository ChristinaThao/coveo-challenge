import React from 'react';
import SearchResultPage from './pages/SearchResultPage';
import SearchBar from './components/SearchBar/SearchBar';
import { SearchWordProvider } from './context/SearchWordContext';

require('dotenv').config();

function App () {
    return (
        <div>
            <SearchWordProvider>
                <SearchBar/>
                <SearchResultPage/>
            </SearchWordProvider>
        </div>
    )
};

export default App;