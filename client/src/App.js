import React, { useReducer } from 'react'
import Galleries from './components/galleries.component/Galleries'
import Controller from './components/controller.component/Controller'
import './App.css'

export const GalleryContext = React.createContext()

export const INIT_REQUEST = 'init request';

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
		<div id="container">
			<GalleryContext.Provider
				value={{ queryState: requestState, queryDispatch: dispatch }}>
				<Controller />
				<Galleries />
			</GalleryContext.Provider>
		</div>

	)
}

export default App