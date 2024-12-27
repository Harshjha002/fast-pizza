/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const LinkButton = ({ children, to }) => {
    const navigate = useNavigate()
    const classname = 'text-sm p-3 text-blue-500 hover:text-blue-600'

    if (to === '-1') {
        return (
            <button className={classname} onClick={() => navigate(-1)}>
                {children}
            </button>
        )
    }
    return (
        <Link to={to} className={classname}>
            {children}
        </Link>
    )
}

export default LinkButton
