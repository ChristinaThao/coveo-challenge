import React, {useState, useEffect} from 'react';
import Product from './components/Product/Product';

function App () {

    const token = '058c85fd-3c79-42a3-9236-b83d35588103';
    
    const rousseApi = 'https://cloudplatform.coveo.com/rest/search?access_token=' + token + '&q=Bi%C3%A8re%20rousse'; 
    const beerUnder10Api = 'https://cloudplatform.coveo.com/rest/search?access_token=' + token + '&q=@tpprixnum%3C10';
    const merlotApi = 'https://cloudplatform.coveo.com/rest/search?access_token=' + token + '&q=@tpcepagenomsplitgroup==Merlot';

    const [beverages, setBeverages] = useState([]);
    const [amberAles, setAmberAles] = useState([]);
    const [beersUnder10, setBeersUnder10] = useState([]);
    const [merlot, setMerlot] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        const amberAlesResult = await getAmberAles();
        const beersUnder10Result = await getBeersUnder10();
        const merlotResult = await getMerlot();
        let allBeverages = [...amberAlesResult, ...beersUnder10Result, ...merlotResult];
        setBeverages(allBeverages);
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
            {beverages.map(beverage => (<Product title={beverage.title} image={beverage.raw.tpthumbnailuri}/>))}
        </div>
    )
};

export default App;