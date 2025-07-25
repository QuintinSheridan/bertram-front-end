import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="p-5 text-2xl">
            <Link className='border-2 p-2 rounded-md' to='/'>Home</Link>
        </div>
    )
}

export default Header