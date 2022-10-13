import { useEffect, useState } from "react";
import axios from "axios";


function Heroes() {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(query);
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
        <div className="sm: grid gap-1 grid-cols-3 m-2">
            {data.map((hero) => (
                <img onClick={() => { show(hero.localized_name) }} src={'https://api.opendota.com' + hero.img} key={hero.id} />
            ))}
        </div>
    )
}

export default Heroes