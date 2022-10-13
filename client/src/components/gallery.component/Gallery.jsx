import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import {nanoid} from "nanoid";
import Search from "../search.component/Search";
import "./gallery.css"

const Gallery = () => {

    const ICON_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";

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
        (query.length === 0 || query.length > 1) && fetchData();
    }, [query]);

    const show = (data) => {
        alert(data);
    }

    return (
        <section>
            <header>
                <Search
                    type={"text"}
                    id="search"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search..."
                />
            </header>
            <div className="gallery pt-5 pb-10" id={query.length > 1 ? 'result-start':'' }>
                {data.map((hero) => (
                    <div className="box-style relative hover:scale-125 hover:z-20" key={hero.id}>
                        <img
                            className="image"
                            onClick={() => { show(hero.localized_name) }}
                            src={"https://api.opendota.com" + hero.img}
                            alt=""
                        />
                        <div className="text-style absolute inset-0 text-bottom flex flex-col justify-end opacity-0 hover:opacity-100 duration-300 hover:m-0.5" onClick={() => { show(hero.localized_name) }}>
                            <div className="mx-auto w-full">
                                <img
                                    src={hero.primary_attr === "agi" ?
                                        ICON_URL + "agility.png"
                                        : hero.primary_attr === "int" ?
                                            ICON_URL + "intelligence.png"
                                            : hero.primary_attr === "str" ?
                                                ICON_URL + "strength.png"
                                                : ""}
                                    className="w-6"
                                    alt="" />
                                <p className="text-small pl-1">{hero.localized_name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery