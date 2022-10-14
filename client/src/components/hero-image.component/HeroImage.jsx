import React from 'react'
import './heroimage.css'

const HeroImage = ({ styleClass, value, onClick, altdata }) => {

	const HERO_IMG_URL = 'https://api.opendota.com';
	const ATTR_ICON_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";

	if (!altdata) {
		return (
			<img
				className={styleClass}
				src={HERO_IMG_URL + value}
				onClick={(event) => onClick(event)}
				alt=""
			/>
		)
	}
	
	if (altdata) {
		return (
			<img
				className={styleClass}
				src={ATTR_ICON_URL + value}
				onClick={(event) => onClick(event)}
				alt=""
			/>
		)
	}
}

export default HeroImage