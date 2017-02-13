import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Router, Route, hashHistory } from 'react-router'
import { Whoops404 } from './components/Whoops404'
import { AddDayForm } from './components/AddDayForm'

import './stylesheets/index.scss'
import './stylesheets/ui.scss'


window.React = React

render(
	<Router history={hashHistory}>
		<Route path='/' component={App} />
		<Route path='list-days' component={App}>
			<Route path=':filter' component={App} />
		</Route>
		<Route path='add-day' component={App} />
		<Route path='*' component={Whoops404} />
	</Router>,
	document.getElementById('react-container')
)
