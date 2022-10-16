import React from 'react'
import styles from './welcome.module.scss'
import CustomIcon from '../custom-icon.component/CustomIcon'
import { NavLink } from 'react-router-dom'

const news = [
	{
		title: 'Battle Pass 2022',
		message: `Today's update ushers in the first of this year's bundle sales — The International 2022 Battle Level Bundle — available now through October 30th for $29.99.`
	},
	{
		title: 'Secret Shop',
		message: `The doors to the Secret Shop are now open — helping celebrate the majesty of The International and a global community of passionate fans with limited edition swag from this year's event.`
	},
	{
		title: 'Dota Region',
		message: `For those watching the action online this year, we’ve teamed up with multiple merchandise partners to ensure the latest lineup of Dota 2 merchandise is accessible in more regions than ever before.`
	}
]

const Welcome = () => {
	return (
		<div className={styles.welcome}>
			
			<h1>Who will you <span>choose?</span></h1>
			<NavLink to="/heroes" end className={styles.navLink}>
				<CustomIcon customStyle={'cs'} icon={''} text={'View all heroes'} />
			</NavLink>

			<h2 className={styles.latest}>Latest Update</h2>

			<div className={styles.news}>
				{news.map((data, index) => {
					return (
						<div className={styles.newsItem} key={index}>
							<h3>{data.title}</h3>
							<p>{data.message}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Welcome