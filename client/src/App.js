import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		console.log(query);
		const fetchData = async () => {
			const res = await axios.get(`http://localhost:5001/heroes?q=${query}`);
			setData(res.data);
		};
		if (query.length === 0 || query.length > 2) fetchData();
	}, [query]);

	return (
		<div className="container">
			<input
				className="search"
				placeholder="Search..."
				onChange={(e) => setQuery(e.target.value.toLowerCase())}
			/>
			<div className="gallery">
				{data.map((hero) => (
					<img src={'https://api.opendota.com' + hero.img} key={hero.id} />
				))}
			</div>
		</div>
	);
}

export default App;