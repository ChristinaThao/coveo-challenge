import React, {useState, useEffect} from 'react';
import Product from './components/Product/Product';
require('dotenv').config();

function App () {
    const rousseApi = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_ROUSSE_API; 
    const beerUnder10Api = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_BEER_UNDER_10_API;
    const merlotApi = process.env.REACT_APP_SEARCH + process.env.REACT_APP_TOKEN + process.env.REACT_APP_MERLOT_API;

    const [beverages, setBeverages] = useState([]);
    const [amberAles, setAmberAles] = useState([]);
    const [beersUnder10, setBeersUnder10] = useState([]);
    const [merlot, setMerlot] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const amberAlesResult = await getAmberAles();
            const beersUnder10Result = await getBeersUnder10();
            const merlotResult = await getMerlot();
            let allBeverages = [...amberAlesResult, ...beersUnder10Result, ...merlotResult];
            setBeverages(allBeverages);
        }
        fetchData();
    },[]);
    
    const getAmberAles = async () => {
        const response = await fetch(rousseApi);
        const data = await response.json();
        setAmberAles(data.results);
        return data.results;
    }

    const getBeersUnder10 = async () => {
        const response = await fetch(beerUnder10Api);
        const data = await response.json();
        setBeersUnder10(data.results);
        return data.results;
    }

    const getMerlot = async () => {
        const response = await fetch(merlotApi);
        const data = await response.json();
        setMerlot(data.results);
        return data.results;
    }

    return (
        <div>
            {beverages.map(beverage => (<Product title={beverage.title} image={beverage.raw.tpthumbnailuri} key={beverage.raw.tpcodesaq}/>))}
        </div>
    )
};

export default App;