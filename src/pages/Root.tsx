import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import cupOfCoffee from '../assets/cupOfCoffee.jpg'



const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Root