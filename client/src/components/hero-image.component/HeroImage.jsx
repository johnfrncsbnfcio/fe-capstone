import React from 'react'
import styles from './heroimage.module.scss'

const HeroImage = ({ value, onClick, altdata }) => {

	const HERO_IMG_URL = 'https://api.opendota.com';
	const ATTR_ICON_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";

	if (!altdata) {
		return (
			<img
				className={styles.heroImage}
				src={HERO_IMG_URL + value}
				// onClick={(event) => onClick(event)}
				alt=""
			/>
		)
	}
	
	if (altdata) {
		return (
			<img
				className={styles.heroAttr}
				src={ATTR_ICON_URL + value}
				onClick={(event) => onClick(event)}
				alt=""
			/>
		)
	}
}

export default HeroImage