import React, { useContext } from 'react'
import { GalleryContext } from '../../App'
import { INIT_REQUEST } from '../../App'
import { FaTimesCircle } from "react-icons/fa";
import styles from './attribute.module.scss'

const ICON_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";
const attr = ['agility', 'intelligence', 'strength'];

const Attribute = () => {
	const galleryContext = useContext(GalleryContext)
	const { selectedAttr } = galleryContext.queryState
	return (
		<div className={styles.filterBox}>
			{attr.map((data, index) => {
				return <img
					key={index}
					className={selectedAttr == selectedAttr ? styles.selected : styles.unSelected}
					src={ICON_URL + data + `.png`}
					alt={data}
					onClick={() => {
						galleryContext.queryDispatch({
							type: INIT_REQUEST,
							value: data.slice(0, 3),
							key: 'selectedAttr'
						})
					}
					}
				/>
			})}
			<span onClick={
				() => {
					galleryContext.queryDispatch({
						type: INIT_REQUEST,
						value: 'clr',
						key: 'selectedAttr'
					})
					galleryContext.queryDispatch({
						type: INIT_REQUEST,
						value: '',
						key: 'searchedInput'
					})
				}
			}>
				<FaTimesCircle className={styles.clearIcon}/>
				{/* clear */}
			</span>
		</div>
	)
}

export default Attribute