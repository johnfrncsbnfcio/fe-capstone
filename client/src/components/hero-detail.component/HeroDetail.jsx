import React from 'react'
import { useParams } from 'react-router'
import styles from './herodetail.module.scss'

const HeroDetail = () => {
    const { name } = useParams()
    const URL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/'
    const WEBM = '.webm'
    const PNG = '.png'
    return (
        <>
            {!name && window.location.replace('http://localhost:3000/heroes')}
            {
                <video className={styles.heroDetail} poster={URL + name.toLowerCase() + PNG} autoPlay preload="auto" loop playsInline><source type="video/webm" src={URL + name.toLowerCase() + WEBM}></source><img src={URL + name.toLowerCase() + PNG} alt="" /></video>
            }
        </>
    )
}

export default HeroDetail