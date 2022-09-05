import axios from 'axios';
import React, { useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState({});

    useEffect(() => {    
        axios.get(url)
            .then(res => setData(res.data)); 
    }, []);


    console.log(data);

    return { data, url };
};

export default useFetch;