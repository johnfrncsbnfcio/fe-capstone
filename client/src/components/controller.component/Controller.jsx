import React from 'react'
import Attribute from '../attribute.component/Attribute'
import Input from '../input.component/Input'

import styles from './controller.module.scss'

const Controller = () => {
	return (
		<header className={`${styles.header} header`}>
			<Input />

			<Attribute />
		</header>
	)
}

export default Controller