import React, { useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Galleries from './components/galleries.component/Galleries'
import Controller from './components/controller.component/Controller'
import Welcome from './components/welcome.component/Welcome'
import styles from './App.module.scss'
import './styles/global.scss'
import Nav from './components/nav.component/Nav'
import HeroDetail from './components/hero-detail.component/HeroDetail'

export const GalleryContext = React.createContext()
export const INIT_REQUEST = 'init request'

const initialState = {
	searchedInput: '',
	selectedAttr: ''
}

const reducer = (state, action) => {
	switch (action.type) {
		case INIT_REQUEST:
			return {
				...state,
				[action.key]: action.value
			}
		default:
			return state
	}
}

const App = () => {
	const [requestState, dispatch] = useReducer(reducer, initialState);
	return (
		<Router>
			<div className={styles.container}>
				<Nav />
				<Routes>
					<Route exact path='/' element={<Welcome />}></Route>
					<Route exact path='/heroes' element={
						<GalleryContext.Provider
						value={{ queryState: requestState, queryDispatch: dispatch }}>
							<Controller />
							<Galleries />
						</GalleryContext.Provider>
					}></Route>
					<Route exact path='/hero/:name' element={<HeroDetail />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App