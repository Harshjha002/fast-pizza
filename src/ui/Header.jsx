import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/users/Username'

const Header = () => {
    return (
        <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
            <Link to="/" className="uppercase tracking-widest">
                Fast React Pizza Co.
            </Link>
            <SearchOrder />
            <Username />
        </header>
    )
}

export default Header
