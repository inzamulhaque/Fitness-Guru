import { useState, useEffect } from 'react';

const useData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://inzamulhaque.github.io/pHero-assignment-10-fake-data/data.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return data;
};

export default useData;