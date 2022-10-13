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
        <div>
            <Search
                type={'text'}
                id='search'
                value={query}
                onChange={handleChange}
                placeholder='Search...'
            />
            <div className='gallery'>
                {data.map((hero) => (
                    <div className='box-style relative hover:scale-125 hover:z-20'>
                        <img
                            className='image'
                            onClick={() => { show(hero.localized_name) }}
                            src={'https://api.opendota.com' + hero.img}
                            key={hero.id}
                            alt=""
                        />
                        <a className="text-style absolute inset-0 text-bottom flex flex-col justify-end opacity-0 hover:opacity-100 duration-300" onClick={() => { show(hero.localized_name) }}>
                            <div className="mx-auto w-full">
                                <img src={hero.primary_attr === 'agi' ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png' : hero.primary_attr === 'int' ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png' : hero.primary_attr === 'str' ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png' : ''} className="w-6" alt="" />
                                <p className='text-small pl-1'>{hero.localized_name}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery