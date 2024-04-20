import React, {useEffect, useState} from 'react';

const Search = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://127.0.0.1:8000/hello");
            return res.json();
        }

        fetchData()
            .then(res => setData(res.message))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {data}
        </div>
    );
};

export default Search;