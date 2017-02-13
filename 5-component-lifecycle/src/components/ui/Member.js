import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

export class Member extends Component {

    // componentWillMount() - before render(), without re-rendering
    componentWillMount() {
        this.style={
            background: 'gray'
        }
    }

    // componentWillUpdate() - is invoked immediately before rendering when new props or state are being received
    componentWillUpdate(nextProps) {
        this.style = {
            backgroundColor: (nextProps.admin) ? 'green' : 'purple'
        }
    }

    // shouldComponentUpdate(nextProps, nextState) - re-render with new props and/or state
    shouldComponentUpdate(nextProps) {
        return this.props.admin !== nextProps.admin
    }

    render() {

        const { name, thumbnail, email, admin, makeAdmin, removeAdmin } = this.props

        return (
            <div className="member" style={this.style}>
                <h1>{name} {(admin) ? <FaShield />  : null}</h1>
                {(admin) ?
                    <a onClick={() => removeAdmin(email)}>Remove Admin</a> :
                    <a onClick={() => makeAdmin(email)}>Make Admin</a>
                }

                <img src={thumbnail} alt='profile image' />
                <p><a href='`maito:${email}`'>{email}</a></p>
            </div>
        )
    }
}

