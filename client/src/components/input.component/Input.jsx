import React, { useContext } from 'react'
import { GalleryContext } from '../../App'
import { INIT_REQUEST } from '../../App'
import './input.css'

const Input = () => {
	const galleryContext = useContext(GalleryContext)
	return (
		<>
			<input
				type="text"
				className="form-control
				block
				px-10
				py-2
				text-xl
				font-normal
				text-gray-700
				bg-gray-600 bg-clip-padding
				border border-solid border-gray-600
				rounded
				transition
				ease-in-out
				m-0
				focus:text-white focus:bg-grey-600 focus:border-grey-600 focus:outline-none"
				placeholder='Search...'
				value={galleryContext.queryState.searchedInput}
				onChange={e =>
					galleryContext.queryDispatch({
						type: INIT_REQUEST,
						value: e.target.value,
						key: 'searchedInput'
					})
				}
			/>
		</>
	)
}

export default Input