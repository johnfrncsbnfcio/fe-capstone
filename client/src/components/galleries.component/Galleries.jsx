import React, { useState, useContext, useEffect } from 'react'
import { GalleryContext } from '../../App'
import './galleries.css'
import axios from 'axios'
import HeroImage from '../hero-image.component/HeroImage'

const Galleries = () => {

	const galleryContext = useContext(GalleryContext)
	const { searchedInput, selectedAttr } = galleryContext.queryState
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`http://localhost:5001/heroes?q=${searchedInput.toLowerCase()}`);
			const filtered = res.data.filter(f => {
				return (selectedAttr === 'clr'
					|| selectedAttr === '') ? res.data :
					f.primary_attr === selectedAttr
			})
			setData(filtered)
		}
		fetchData()
	}, [searchedInput, selectedAttr])

	const show = (data) => {
		alert(data)
	}

	return (
		<>
			<div className="gallery pt-5 pb-10" id={searchedInput.length > 0 ? 'result-start' : ''}>
				{data.map((hero) => (
					<div className="box-style relative hover:scale-125 hover:z-20" key={hero.id}>
						<HeroImage
							styleClass={'image'}
							value={hero.img}
							onClick={() => { show(hero.localized_name) }}
						/>
						<div className="text-style absolute inset-0 text-bottom flex flex-col justify-end opacity-0 hover:opacity-100 duration-300 hover:m-0.5" onClick={() => { show(hero.localized_name) }}>
							<div className="mx-auto w-full">
								<HeroImage
									styleClass={'w-6'}
									altdata={true}
									value={
										hero.primary_attr === "agi" ? "agility.png" : 
										hero.primary_attr === "int" ? "intelligence.png" : 
										hero.primary_attr === "str" ? "strength.png" : ""}
									onClick={() => { show(hero.localized_name) }}
								/>
								<p className="text-small pl-1">{hero.localized_name}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Galleries