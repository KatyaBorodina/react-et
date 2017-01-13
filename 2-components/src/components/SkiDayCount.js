import { Component } from 'react'
import '../stylesheets/ui.scss'
import FaFlagO from 'react-icons/lib/fa/flag-o'
import FaFlag from 'react-icons/lib/fa/flag'
import FaFlagCheckered from 'react-icons/lib/fa/flag-checkered'

//first method
// export const SkiDayCount = React.Component({})

//second method - COMPONENTS WITH ES6
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

//third method - STATELESS COMPONENTS
const percentToDecimal2 = (decimal) => {
    return ((decimal * 100) + '%')
}

const calcGoalProgress2 = (total, goal) => {
    return percentToDecimal2(total/goal)
}

export const SkiDayCount2 = ({ total, powder, backcountry, goal }) => (
<div className="ski-day-count">
    <div className="total-days">
        <span>
            {total}
            <FaFlagO />
        </span>
        <span>days</span>
    </div>
    <div className="powder-days">
        <span>
            {powder}
            <FaFlag />
        </span>
        <span>days</span>
    </div>
    <div className="backcountry-days">
        <span>
            {backcountry}
            <FaFlagCheckered />
        </span>
        <span>days</span>
    </div>
    <div>
        <span>
            {calcGoalProgress2(
                total,
                goal
            )}
        </span>
    </div>
</div>
)