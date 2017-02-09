import { Link } from 'react-router'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const Menu = () =>

    <nav className='menu'>
        <Link to='/' activeClassName='selected'>
            <Terrain />
        </Link>
        <Link to='/add-day' activeClassName='selected'>
            <SnowFlake/>
        </Link>
        <Link to='/list-days' activeClassName='selected'>
            <Calendar />
        </Link>

    </nav>