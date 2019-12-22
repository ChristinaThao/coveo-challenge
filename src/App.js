import React, {useState, useEffect} from 'react';
import Product from './components/Product';
 './components/Product';

function App () {

    const token = '058c85fd-3c79-42a3-9236-b83d35588103';
    
    const rousseApi = 'https://cloudplatform.coveo.com/rest/search?access_token=' + token + '&q=Bi%C3%A8re%20rousse'; 
    const beerUnder10Api = 'https://cloudplatform.coveo.com/rest/search?access_token=' + token + '&q=@tpprixnum%3C10';
    const merlotApi = 'https://cloudplatform.coveo.com/rest/search?access_token=' + token + '&q=@tpcepagenomsplitgroup==Merlot';

    const [amberAles, setAmberAles] = useState([]);
    const [beersUnder10, setBeersUnder10] = useState([]);
    const [merlot, setMerlot] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAmberAles();
        getBeersUnder10();
        getMerlot();
    },[]);
    
    const getAmberAles = async () => {
        const response = await fetch(rousseApi);
        const data = await response.json();
        setAmberAles(data.results);
    }

    const getBeersUnder10 = async () => {
        const response = await fetch(beerUnder10Api);
        const data = await response.json();
        setBeersUnder10(data.results);
    }

    const getMerlot = async () => {
        const response = await fetch(merlotApi);
        const data = await response.json();
        setMerlot(data.results);
    }

    return (
        <div>
            {amberAles.map(amberAle => (<Product title={amberAle.title}/>))}
            {beersUnder10.map(beer => (<Product title={beer.title}/>))}
            {merlot.map(merlot => (<Product title={merlot.title}/>))}
        </div>
    )
};

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             data: {},
//         }
//     }

//     componentDidMount() {
//         this.fetchData();
//     }

//     fetchData() {
//         const token = '058c85fd-3c79-42a3-9236-b83d35588103';
//         const rousseApi = 'https://cloudplatform.coveo.com/rest/search?access_token=' + token + '&q=Bi%C3%A8re%20rousse';
//         fetch(rousseApi).then(response => response.json()).then(data => console.log(data));
//     } 
//     render () {
//         return (
//             <div></div>
//         )
//     }
// }

export default App;