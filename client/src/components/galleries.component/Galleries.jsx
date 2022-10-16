import React, { useState, useContext, useEffect } from 'react'
import { GalleryContext } from '../../App'
import axios from 'axios'
import HeroImage from '../hero-image.component/HeroImage'
import styles from './galleries.module.scss'


const Galleries = () => {


// https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm


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
			<div className={styles.gallery}>
				{data.map((hero) => (
					<div className={styles.galleryBox} key={hero.id} onClick={() => { show(hero.localized_name) }}>
						<HeroImage
							className={styles.galleryHeroImage}
							value={hero.img}
							// onClick={() => { show(hero.localized_name) }}
						/>
						<div className={styles.galleryAttrBox}>
							<HeroImage
								className={styles.galleryHeroAttr}
								altdata={true}
								value={
									hero.primary_attr === "agi" ? "agility.png" :
										hero.primary_attr === "int" ? "intelligence.png" :
											hero.primary_attr === "str" ? "strength.png" : ""}
								onClick={(e) => { e.stopPropagation(); show(hero.primary_attr) }}
							/>
							<p className={styles.galleryHeroName}>{hero.localized_name.toUpperCase()}</p>
							<div className={styles.roleBox}>
								<p className={styles.galleryRoles}><span>[</span>Roles<span>]</span></p>
								<div className={styles.galleryHeroInfo}>
									{hero.roles.map((data, index) => <p key={index}>{data}</p>)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Galleries