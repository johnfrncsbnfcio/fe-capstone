import React from 'react'
import { useParams } from 'react-router'
import styles from './herodetail.module.scss'
import { Description } from './heroes_story.js'

const HeroDetail = () => {
    const { name } = useParams()
    const URL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/'
    const WEBM = '.webm'
    const PNG = '.png'
    
    { !name && window.location.replace('http://localhost:3000/heroes') }

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroVideoBox}>
                {
                    <video className={styles.heroVideo} poster={URL + name.toLowerCase() + PNG} autoPlay preload="auto" loop playinline='false'>
                        <source type="video/webm" src={URL + name.toLowerCase() + WEBM}></source>
                        <img src={URL + name.toLowerCase() + PNG} alt="" />
                    </video>
                }
            </div>
            <div className={styles.heroDetailBox}>
                <h1 className={styles.heroName}>
                    {name.toUpperCase().replace('_',' ')}
                </h1>
                <div className={styles.heroDescription}>
                    <p>
                        {Description.map(data => {
                            if (data.name == name) {
                                return data.detail
                            }
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroDetail