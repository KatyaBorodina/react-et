import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount, SkiDayCount2 } from './components/SkiDayCount'

window.React = React


render(
	<SkiDayCount total={50}
		         powder={20}
				 backcountry={10}
				 goal={100}
		/>,
	document.getElementById('3-method')
)

render(
	<SkiDayCount2 total={30}
				  powder={10}
				  backcountry={20}
				  goal={100}
		/>,
	document.getElementById('2-method')
)