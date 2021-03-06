import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { Component, PropTypes } from 'react'

export class SkiDayCount extends Component {
	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	}

	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	}

	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.powder}</span>
					<span>days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<span>days</span>
				</div>
				<div>
                    <span>
                        {this.calcGoalProgress(
							this.props.total,
							this.props.goal
						)}
                    </span>
				</div>
			</div>
		)
	}
}

SkiDayCount.defaultProps = {
		total: 50,
		powder: 15,
		backcountry: 5,
		goal: 100
}

SkiDayCount.propTypes = {
	total: PropTypes.number,
	powder: PropTypes.bool,
	goal: PropTypes.number
}
