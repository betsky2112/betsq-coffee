/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
	useEffect(() => {
		Aos.init({
			offset: 100,
			duration: 700,
			easing: 'ease-in',
			delay: 100,
		})
	}, [])

	return <div className="bg-fuchsia-500">App</div>
}

export default App
