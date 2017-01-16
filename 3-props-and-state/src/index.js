import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

/*render(
	<SkiDayList days={
		[
			{
				resort: 'Yalta',
				date: new Date('1/5/2017'),
				powder: true,
				backcountry: false
			},
			{
				resort: 'Kotor',
				date: new Date('3/9/2017'),
				powder: false,
				backcountry: false
			},
			{
				resort: 'Budapest',
				date: new Date('8/15/2017'),
				powder: false,
				backcountry: true
			}
		]
	} />,
	document.getElementById('react-container')
)*/

render(
	<SkiDayCount />,
	document.getElementById('react-container')
)