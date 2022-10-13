import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Search from '../search.component/Search';

import './gallery.css'

const Gallery = () => {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    const handleChange = (data) => {
        setQuery(data);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:5001/heroes?q=${query}`);
            setData(res.data);
        };
        if (query.length === 0 || query.length > 1) fetchData();
    }, [query]);

    const show = (data) => {
        alert(data);
    }

    return (
        <>
            <Search
                type={'text'}
                id='search'
                value={query}
                onChange={handleChange}
                placeholder='Search...'
            />
            <div className='gallery'>
                {data.map((hero) => (
                    <img
                        onClick={() => { show(hero.localized_name) }}
                        src={'https://api.opendota.com' + hero.img}
                        key={hero.id}
                        alt=""
                    />
                ))}
            </div>
        </>
    )
}

export default Gallery