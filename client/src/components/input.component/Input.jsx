import React, { useContext } from 'react'
import { GalleryContext } from '../../App'
import { INIT_REQUEST } from '../../App'

import styles from './input.module.scss'
import { FaSearch } from 'react-icons/fa'

const Input = () => {
	const galleryContext = useContext(GalleryContext)
	return (
		<>
			<div className={styles.searchBox}>
				<FaSearch className={styles.searchIcon} />
				<input
					type="text"
					className={styles.searchField}
					placeholder='SEARCH'
					value={galleryContext.queryState.searchedInput.toUpperCase()}
					onChange={e =>
						galleryContext.queryDispatch({
							type: INIT_REQUEST,
							value: e.target.value,
							key: 'searchedInput'
						})
					}
				/>
			</div>
		</>
	)
}

export default Input