import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import Search from "../search.component/Search";
import "./gallery.css"

const Gallery = () => {

    const ICON_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";
// background-image: url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png");
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    const handleChange = (data) => {
        setQuery(data);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:5001/heroes?q=${query.toLowerCase()}`);
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
                <form>
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                height="30" viewBox="0 0 30 30">
                                <path
                                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                </path>
                            </svg>
                        </span>
                        <Search
                            type={"text"}
                            id="search"
                            value={query}
                            onChange={handleChange}
                            placeholder="Search..."
                        />
                    </label>
                </form>
            </header>
            <div className="gallery pt-5 pb-10" id={query.length > 0 ? 'result-start' : ''}>
                {data.map((hero) => (
                    <div className="box-style relative hover:scale-125 hover:z-20" key={hero.id}>
                        <img
                            className={`image transition-all duration-200 ${query ? "ease-in duration-500" : "ease-out duration-100"}`}
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